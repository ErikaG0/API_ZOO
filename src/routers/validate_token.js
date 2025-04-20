const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    const token= req.header('access-token')

    if(!token) return res.status(401).json({error: 'No tiene permiso'})
    try{
        const verified = jwt.verify(token, process.env.SECRET)
        req.user = verified
        next()
    }
    catch(error){
        res.status(400).json({error: 'Token no es valido'})
    }
}

module.exports = verifyToken;