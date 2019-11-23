const mongoose = require("mongoose");
const citySchema =new mongoose.Schema({
    pais: String,
    itineraries:[{type: mongoose.Schema.Types.ObjectId, ref: 'itinerary'}]
})
module.exports = mongoose.model('citie',citySchema)