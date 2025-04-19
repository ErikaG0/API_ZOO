const mongoose =require("mongoose");
const bcrypt = require("bcrypt")//importanto bycrypt
const userShema = mongoose.Schema({
    usuario: { type:String, require:true},
    correo: { type:String, require:true},
    clave: { type:String, require:true}
    
    
});

//metodo asincrono recibe la contraseña 
userShema.methods.encryptClave = async(clave) => {
    //genera un salt 10rondas -> cadena de texto aleatorio que se mezcla
    //con la contraseña anterior
    const salt = await bcrypt.genSalt(10);
    //aplica un hash funcion matematica y la conviete en una longitud fija
    //no se puede reverti el hash a su valor original
    return bcrypt.hash(clave, salt);
}

module.exports = mongoose.model('User', userShema);

