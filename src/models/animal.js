//importanto express , mongo 
const e = require("express");
const mongoose= require("mongoose");

//aqui se define que campos tengra el documento
const animalShema = mongoose.Schema({
    nombre: {
        type:String,
        required: true
    },
    edad: {
        type:Number,
        required: true
    },
    tipo: {
        type:String,
        required: true
    },
    fecha: {
        type:Date,
        default: Date.now
    }

});
//nombre de la coleccion de mongo
module.exports = mongoose.model("Zoo_Animal", animalShema);