const mongoose = require("mongoose");
const citieSchema =new mongoose.Schema({
    pais: String
})
module.exports = mongoose.model('city',citieSchema)