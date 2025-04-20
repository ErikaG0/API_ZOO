const express = require("express");
const router = express.Router();
const userShema = require("../models/user");
const jwt = require("jsonwebtoken");

router.post('/signup' , async (req,res) => {
    const {usuario,correo,clave} = req.body;
    const user = new userShema({
        usuario: usuario,
        correo: correo,
        clave:clave
    })

    user.clave = await user.encryptClave(user.clave);
    await user.save();
    

    const token = jwt.sign({ id: user._id}, process.env.SECRET,{
        expiresIn: 60 * 60 * 24,
    });
    res.json({
        auth:true,
        token,
    });

});

module.exports = router;
