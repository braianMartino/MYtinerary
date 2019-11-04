const mongoose = require("mongoose");
const citySchema =new mongoose.Schema({
    pais: String
})
module.exports = mongoose.model('citie',citySchema)