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
    },
    //id humano-friendly
   codigo: {
        type: String,
        require: true,
        unique: true
    }
 
});

//pre hook generacion de codigo automatico
//antes de guardar un anumal ejecute esta funcion 
animalShema.pre("save", async function (next){
    if(!this.codigo){
        //contamos animales existentes
        const count = await this.constructor.countDocuments();
        //await toma tiempo pero todo bien espera
        this.codigo = `AN${count + 1}`;    
    }
    //continuar con el proceso de guardar
    next(); 
})
//nombre de la coleccion de mongo
module.exports = mongoose.model("Zoo_Animal", animalShema);