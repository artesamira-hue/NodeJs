import { useEffect, useState } from 'react'
import './App.css'

export const App = () => {
  const [user,setUser] = useState([])
  const [loader,setLoader] = useState(false)

  const fetchAPI = async() => {
    try {
      setLoader(true)
      const res = await fetch('http://localhost:8000/')
      const data = await res.json()
      setUser(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  if(loader) {
    return (<h1>Loading...</h1>)
  }
  
  return (
    <>
    <h1>Hello World</h1>
    {user.map((user) => (
      <div>
        <span>{user.id}</span>
        <span>{user.name}</span>
      </div>
    ))}
    </>
  )
}
