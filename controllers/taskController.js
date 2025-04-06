// Implementar as regras de negócio e manipular os dados em comunicação com o model.

const Task = require("../models/Task");

// @desc    Get all taks
// @route   GET /api/tasks
// @access  Public
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single task
// @route   GET /api/tasks/:id
// @access  Public
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update task
// @route   UPDATE /api/tasks/:id
// @access  Public
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updatedTask)
      return res.status(404).json({ message: "Task não encontrada" });

    res.status(200).json(updatedTask);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Erro ao atualizar task", error: error.message });
  }
};

// @desc    Create new task
// @route   POST /api/tasks
// @access  Public
exports.createTask = async (req, res) => {
  const { taskTitle, status } = req.body;
  try {
    const task = new Task({
      taskTitle,
      status,
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Public
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
