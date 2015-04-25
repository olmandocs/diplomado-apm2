var express = require('express');//llama a express

var app = express(); //crea app

app.get('/', function(req, res){ //el / indica el contexto de la respuesta, a donde debe apuntar para obtenerla, se pueden implementar varios
	res.send('hello world'); //respuesta
});

app.listen(3000); //inicia el servidor y implementa la escucha