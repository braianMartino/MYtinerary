const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const routerCity = require("./city/city.routes");
const routerItinerary = require("./itinerary/itinerary.routes");
const routerActivity = require("./activity/activity.routes");

app.use(cors());

app.use(routerCity);
app.use(routerItinerary);
app.use(routerActivity);

app.listen(8080, () => {
  console.log("Server is UP!");
});
