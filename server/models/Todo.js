const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 30,
    trim: true,
  },
  todotask: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  completedOn: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo;