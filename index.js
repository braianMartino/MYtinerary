const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const bodyParser = require('body-parser');
const express = require('express');
const routerCity = require("./city/city.routes");
const routerItinerary = require("./itinerary/itinerary.routes");
const routerActivity = require("./activity/activity.routes");
const routerUser = require("./user/user.routes");


app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

app.use(routerCity);
app.use(routerItinerary);
app.use(routerActivity);
app.use(routerUser);

app.listen(8080, () => {
  console.log("Server is UP!");
});
