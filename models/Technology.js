// Definir a estrutura dos dados de Technology no meu database

const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      enum: ["frontend", "backend", "fullstack"],
      required: true,
    },
  },
  {
    timestamps: true, // createdAt e updatedAt
    collation: { locale: "pt", strength: 2 },
  }
);

technologySchema.index(
  { name: 1 },
  {
    unique: true,
    collation: { locale: "pt", strength: 2 }, // Força busca case-insensitive
  }
);

const Technology = mongoose.model("Technology", technologySchema);

module.exports = Technology;
