/*usara js estricto
'use strict';
usara el http para hacer peticiones web
const http = require('http');
lanza el server y ejecutar el codigo
const server = http.createServer(function(req,res){
    writeHead permire escribir una respuesta http en la cabecera
    res.writeHead(200,
        {
            'content-type': 'text/plain'
        }
    );
    res.end('Hola Mundo');
});
puerto al que el servidor esta a la escucha
server.listen(5000);*/

//importa modulo express (caja de herramientas)
const express = require('express')
//creacion de la constante app (espacio de trabajo)
const app = express()
const port = 3000

//si alquien entra a la pagina localhost:3000/  en la ruta / mandale un holi
app.get('/',(req,res) => {
    //info del body en la respuesta
    res.send("Holi")
})

//establecer la conexion al puerto especificado
app.listen(port, () => {
    console.log("Ejecucion de la app" +  `${port}`)
})