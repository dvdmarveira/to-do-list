const express = require("express");
const {
  getTechnologies,
  getTechnologyById,
  checkTechnologyExists,
  createTechnology,
  deleteTechnology,
} = require("../controllers/technologyController");
const router = express.Router();

router.route("/").get(getTechnologies).post(createTechnology);
router.route("/check/:name").get(checkTechnologyExists);
router.route("/:id").get(getTechnologyById).delete(deleteTechnology);

module.exports = router;
