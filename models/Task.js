// Definir a estrutura dos dados de Task no meu database

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "done"],
      required: true,
    },
  },
  {
    timestamps: true, // createdAt e updatedAt
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
