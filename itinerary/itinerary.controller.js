const Itinerary = require('./itinerary.model')

const getItinerary = (req,res)=>{
    Itinerary
    .find({}).populate('city').then((cities)=>{res.json(cities).status(204)})
}
module.exports = {
    getItinerary
}