const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema(
    {
    //   _id: Number,
      title: String,
      completed: Boolean
    },
    {
      versionKey: false
    }
)

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo