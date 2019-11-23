  
const router = require('express').Router()
const itineraryController = require('./itinerary.controller')


router.get("/cities/itinerary",itineraryController.getItinerary)


module.exports = router