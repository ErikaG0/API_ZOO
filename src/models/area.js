//Asociando dos colecciones
const e = require("express");
const mongoose= require("mongoose");

const areaShema = mongoose.Schema({
    nombre:{
        type:String,
        require: true
    },
    description:{
        type:String,
        require: true
    }, 
 
    //Un área tiene muchos animales, y esos animales están almacenados en la colección Zoo_Animal.
    animales: [{type: mongoose.Schema.Types.ObjectId, ref:'Zoo_Animal'}]
});

module.exports = mongoose.model('Area', areaShema);
