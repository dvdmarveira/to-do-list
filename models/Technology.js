// Definir a estrutura dos dados de Technology no meu database

const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    area: {
      type: String,
      enum: ["frontend", "backend", "fullstack"],
      required: true,
    },
  },
  {
    timestamps: true, // createdAt e updatedAt
  }
);

const Technology = mongoose.model("Technology", technologySchema);

module.exports = Technology;
