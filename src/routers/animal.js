const express = require("express");
//mini-rutas que maneja caminos especificos
const router = express.Router();
const animalShema = require("../models/animal");

//creacion animal
router.post("/creation", (req,res) =>{
    const animal= animalShema(req.body);
    animal
    //guarda ese animal en la bd
        .save()
    //luego devuelve los datos del animal recien gurdado
        .then((data) => res.json(data))
    //o devuelve un mensaje de error
        .catch((error) => res.json ({message: error}));
})


//consulta de todos los animales
router.get("/all", (req,res) =>{
    animalShema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json ({message:error}));
})


//animal por id
router.get("/search/:id", (req,res) => {
    const { id } = req.params;
    animalShema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
})

//update 
router.put("/update/:id", (req, res) =>{
    const { id } = req.params;
    const {nombre, edad, tipo,fecha} = req.body;
    animalShema
        .updateOne(
            {_id:id},
            { $set: { nombre,edad, tipo ,  fecha}}
        )
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
})


//delete
router.delete("/delete/:id", (req,res) =>{
    const { id } = req.params;
    animalShema
        .findByIdAndDelete(id)
        .then((data) => {res.json(data)})
        .catch((error) => {res.json({message:error})})
})



//exporta las rutas para que puedan ser utilizadas en otro lugar
module.exports = router;