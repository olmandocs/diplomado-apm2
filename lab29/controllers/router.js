var express = require('express');//llamado a express

var router = express.Router(); //enrutamiento para node


router.get('/', function(req, res){
	res.render('index', {'title' : 'Lab4'}); //llama al index, setea a la variable title el valor
});

/*respuesta al entrar a /message peticion post*/
router.post('/message', function(req, res){
	var data = {
		name : "Algún Nombre",
		age : "100",
		id : "4848447"
	};//crea un json

	console.log(req.body);

	res.header('Content-Type', 'text/json').send(data);//setea la cabezera tipo json
});

/*respuesta al entrar a /data peticion get*/
router.get('/data', function(req, res){

	try{

		//Modulo en Node.js para manipular archivos
		var fs = require('fs');//fs lee archivos en node

		var path = require('path');//llama a path

		fs.readFile(path.join(__dirname, "../models/data.json"), "utf-8", function(err, data){ //busca dentro de models el archivo data

            console.log(typeof data); //pone en consola el tipo de dato

			var data = JSON.parse(data); //se parsea a json el archivo data

            console.log(typeof data); //pone en consola el tipo de dato

			res.header('Content-Type', 'application/json').send(data); //setea la cabezera tipo json
		});
	} catch(err){
		console.log(err); //muestra el error
	}
});


module.exports = router; //expone el router para que lo vea la aplicación