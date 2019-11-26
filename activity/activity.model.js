const mongoose = require("mongoose");

const activitySchema =new mongoose.Schema({
    title: String,
    ubication: String,
    urlPic: String,
    rating: Number,
    price: String,
    description: String
})
module.exports = mongoose.model('activity',activitySchema)