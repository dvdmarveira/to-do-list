// Definir a estrutura dos dados de Task no meu database

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    taskTitle: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      required: true,
    },
  },
  {
    timestamps: true, // createdAt e updatedAt
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
