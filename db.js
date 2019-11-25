const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://braian:mirta1989@mytinerary-xyiit.gcp.mongodb.net/mytinerary?retryWrites=true&w=majority"
  )
  .catch(err => {
    console.log("Error ", err.message);
  });

const db = mongoose.connection;

module.exports = db;
