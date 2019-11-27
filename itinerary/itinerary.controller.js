const Itinerary = require("./itinerary.model");

const getItineraries = (req, res) => {
  Itinerary.find({}).then(cities => {
    res.json(cities).status(204);
  });
};

const getItinerary = (req, res) => {
  Itinerary.findOne({ _id: req.params.id })
    .populate("activities")
    .then(itinerary => {
      res.json(itinerary).status(204);
    });
};

module.exports = {
  getItineraries,
  getItinerary
};
