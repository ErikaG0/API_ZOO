const express = require("express");
const router = express.Router();
const userShema = require("../models/user");

router.post('/signup' , async (req,res) => {
    const {usuario,correo,clave} = req.body;
    const user = new userShema({
        usuario: usuario,
        correo: correo,
        clave:clave
    })

    user.clave = await user.encryptClave(user.clave);
    await user.save();
    res.json(user);

}) 

module.exports = router;
