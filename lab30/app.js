//SERVIDOR
var express = require('express'),
	app     = express(),
	http    = require('http'),
	server  = http.createServer(app),
	io      = require('socket.io')(server), //socket io, se indica q corre sobre el servidor local
	port    = process.env.PORT || 8585;

server.listen(port, function(){

	console.log('Listen %d', port);
});

app.use(express.static(__dirname));//estaticos?

// Ruta(s) que se manejaran
app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});


// Variable `usernames` para los usuarios conectados
var usernames = {};

//evento inicial para socketio
io.sockets.on('connection', function(socket){ //crea la conexion en el servidor

	// Cuando el cliente, browser, emite el evento `sendchat` este debe escuchar y ejecutar
	socket.on('sendchat', function(data){
		io.sockets.emit('updatechat', socket.username, data);
	});

	// Cuando el cliente emite un evento `adduser` , este escucha y ejecuta
	socket.on('adduser', function(username){

		// Almacenamiento del nombre de usuario en la sesión que toma info del cliente
		socket.username = username;

		// Adicionando el usuario `socket.username` al objeto `usernames`
		usernames[username] = username;

		// enviando a los clientes conectados el objet con la lista de usuarios del objeto `usernames`
		socket.broadcast.emit('updatechat', 'SERVIDOR', username + 'Esta conectado'); //broadcast.emit envia a todos los clientes

		// enviamos petición al mismo cliente que solicita
		socket.emit('updatechat', 'SERVIDOR', 'Usted esta conectado');//emit envia solo al usuario

		// Actualizamos la lista de usuarios en el chat
		io.sockets.emit('updateusers', usernames);//io actualiza variable usando el metodo
	});

	socket.on('disconnect', function(){

		delete usernames[socket.username];

		io.sockets.emit('updateusers', usernames);

		socket.broadcast.emit('updatechat', 'SERVIDOR', socket.username + 'Esta desconectado');
	});
});