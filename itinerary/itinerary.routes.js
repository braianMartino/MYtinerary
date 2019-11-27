const router = require("express").Router();
const itineraryController = require("./itinerary.controller");

router.get("/itineraries", itineraryController.getItineraries);
router.get("/itineraries/:id", itineraryController.getItinerary);

module.exports = router;
