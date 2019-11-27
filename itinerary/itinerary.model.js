const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  title: String,
  profilePic: String,
  rating: Number,
  duration: Number,
  price: String,
  hashtag: Array,
  nameActivities: Array,
  activities: [{ type: mongoose.Schema.Types.ObjectId, ref: "activity" }]
});
module.exports = mongoose.model("itinerary", itinerarySchema);
