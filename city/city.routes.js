const router = require("express").Router();
const cityController = require("./city.controller");

router.get("/cities", cityController.getCities);
router.get("/cities/:id", cityController.getCity);

module.exports = router;
