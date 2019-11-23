const express = require("express");
const app = express();
const db = require('./db');
const cors = require("cors")
const routerCity = require('./city/city.routes')
const routerItinerary = require('./itinerary/itinerary.routes')

app.use(cors())

app.use(routerCity)
app.use(routerItinerary)

app.listen(8080,()=>{console.log("Server is UP!")})
