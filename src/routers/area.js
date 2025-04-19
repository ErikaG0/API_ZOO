const express = require("express");
const router = express.Router();
const animalShema = require("../models/animal");
const areaShema = require("../models/area");


//crea areas
router.post("/creation" , (req,res) => {
    const area = areaShema (req.body);
    area
        .save().then((data) => {res.json(data)})
        .catch((error) => {res.json({message:error})})

})


//modificar area
//pasarle el id de un  area 
router.put("/add/:id", async(req,res) => {
    const { id } = req.params;
    //crea una instancia del modelo animal
    const animal = animalShema(req.body);
    var idAnimal = null;

    //busca en la bade de datos si ya existe un animal con ese codigo
    const animalConsulta = await animalShema.findOne({ codigo: req.body.codigo});
    
    // si el aninaml == null guarda el nuevo animal 
    if(!animalConsulta){
        //guarda el animal y guarda el id animal 
        await animal.save().then((dataAnimal) => {
            idAnimal = dataAnimal._id;
        });
    
     } else {
        //si ya existe el animla simplemente se roma el id
        idAnimal = animalConsulta._id
     }

     //actualiza el area agregando el animal
     areaShema
        .updateOne( {_id:id}, {
            //$push -> agrefa un elemento sin importa si ya existe.
            //$addToSet -> agrega un elemento sin repetirlo en el arreglo
            $addToSet: {animales: idAnimal}
            
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})


module.exports = router;