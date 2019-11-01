const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const Citie= require("./citie");
const cors = require("cors");
app.use(cors())

app.get("/",(req,res)=>{
    res.json("hola").status(200);
});


app.get("/cities",(req,res)=>{

    mongoose.connect('mongodb+srv://braian:mirta1989@mytinerary-xyiit.gcp.mongodb.net/mytinerary?retryWrites=true&w=majority')
                        
    .then(()=>{
        Citie
            .find({}).then((citiesFinded)=>{res.json(citiesFinded).status(204)})
    })
   
})

app.listen(8080,()=>{console.log("server is up")})

