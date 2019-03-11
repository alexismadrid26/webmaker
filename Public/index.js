var express = require("express");

var app = express();

app.use(express.static("public"));

app.listen(3333);

console.log("Servidor encendido en el puerto 3333");
