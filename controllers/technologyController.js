// Implementar as regras de negócio e manipular os dados em comunicação com o model.

const Technology = require("../models/Technology");

// @desc    Get all technologies
// @route   GET /api/technologies
// @access  Public
exports.getTechnologies = async (req, res) => {
  try {
    const technologies = await Technology.find();
    res.json(technologies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Check if technology exists
// @route   GET /api/technologies/check/:name
// @access  Public

exports.checkTechnologyExists = async (req, res) => {
  try {
    const technology = await Technology.findOne({
      name: { $regex: new RegExp(`^${req.params.name}$`, "i") },
    });
    res.status(200).json({ exists: !!technology });
  } catch (error) {
    res.status(500).json({
      error: "Erro na verificação",
      message: error.message,
    });
  }
};

// @desc    Get single technology
// @route   GET /api/technologies/:id
// @access  Public
exports.getTechnologyById = async (req, res) => {
  try {
    const technology = await Technology.findById(req.params.id);
    if (!technology) {
      return res.status(404).json({ message: "Technology not found" });
    }
    res.json(technology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new technology
// @route   POST /api/technologies
// @access  Public
exports.createTechnology = async (req, res) => {
  const { name, description, area } = req.body;
  try {
    const technology = new Technology({
      name,
      description,
      area,
    });
    await technology.save();
    res.status(201).json(technology);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({
        message: `A tecnologia '${name}' já existe (comparação case-insensitive)`,
      });
    } else {
      res.status(400).json({
        message: err.message.includes("validation failed") // Erros de validação do Mongoose
          ? "Dados inválidos: verifique os campos obrigatórios e as restrições"
          : err.message,
      });
    }
  }
};

// @desc    Delete technology
// @route   DELETE /api/technologies/:id
// @access  Public
exports.deleteTechnology = async (req, res) => {
  try {
    const technology = await Technology.findByIdAndDelete(req.params.id);
    if (!technology) {
      return res.status(404).json({ message: "Technology not found" });
    }
    res.json({ message: "Technology deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
