const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    ()=>{
        console.log("Base de datos conectada");
    }
);

app.use(express.json());


app.listen(process.env.PORT || 3000, function(){
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})