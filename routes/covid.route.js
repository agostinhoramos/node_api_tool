const express = require("express");
const router = express.Router();

// import controller
const user_controller = require("../controllers/user.controller");
const covidDeath_controller = require("../controllers/covid.controller");

//router.post('/login', user_controller.login);

router.post('/create', covidDeath_controller.create);
router.get("/retrieve/:_id", covidDeath_controller.retrieve)
router.put("/update/:_id", covidDeath_controller.update)
router.delete("/delete/:_id", covidDeath_controller.delete)
router.get("/retrieveAll", covidDeath_controller.retrieveAll)

module.exports = router;