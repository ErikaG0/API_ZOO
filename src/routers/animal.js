const express = require("express");
//mini-rutas que maneja caminos especificos
const router = express.Router();
const animalShema = require("../models/animal");

//creacion animal
router.post("/creation/animals", (req,res) =>{
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
router.get("/all/animals", (req,res) =>{
    animalShema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json ({message:error}));
})
module.exports = router;

//animal por id
router.get("/search/animal/:id", (req,res) => {
    const { id } = req.params;
    animalShema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
})

//update 
router.put("/update/animal/:id", (req, res) =>{
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
router.delete("/delete/animal/:id", (req,res) =>{
    const { id } = req.params;
    animalShema
        .findByIdAndDelete(id)
        .then((data) => {res.json(data)})
        .catch((error) => {res.json({message:error})})
})