const express = require("express");
const {
  getTechnologies,
  getTechnologyById,
  createTechnology,
  deleteTechnology,
} = require("../controllers/technologyController");
const router = express.Router();

router.route("/").get(getTechnologies).post(createTechnology);
router.route("/:id").get(getTechnologyById).delete(deleteTechnology);

module.exports = router;
