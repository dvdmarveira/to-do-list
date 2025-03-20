const express = require("express");
const {
  getTasks,
  getTaskById,
  createTask,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTaskById).delete(deleteTask);

module.exports = router;
