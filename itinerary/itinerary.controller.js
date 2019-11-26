const Itinerary = require('./itinerary.model')

const getItinerary = (req,res)=>{
    Itinerary
    .find({}).populate('activities').then((cities)=>{res.json(cities).status(204)})
}


module.exports = {
    getItinerary
}