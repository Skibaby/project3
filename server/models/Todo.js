const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
    maxlength: 30,
    trim: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo;