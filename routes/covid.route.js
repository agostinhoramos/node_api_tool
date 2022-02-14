const express = require("express");
const router = express.Router();

// import controller
const covidDeath_controller = require("../controllers/covid.controller");

router.post('/create', covidDeath_controller.create);
router.get("/retrieve/:_id", covidDeath_controller.retrieve)
router.put("/update/:_id", covidDeath_controller.update)
router.delete("/delete/:_id", covidDeath_controller.delete)
router.get("/retrieveAll", covidDeath_controller.retrieveAll)

module.exports = router;