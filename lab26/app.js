var http = require('http'); //llama al módulo http

var server = http.createServer(function(req, res){//crea el servidor
	res.writeHead(200, { //200 ok setea cabecera por default petición get
		"Content-Type": "text/plain" //texto plano
	});

	res.end("Hello Unipiloto APM-2\n"); //finaliza response
});

server.listen(3333); //inicia y configura puerto de escucha
