/**
 * Created by alejo8591 on 21/04/15.
 */
// Express Framework "MVC" para crear aplicaciones web con Node.js
//instanciar los módulos que voy a utilizar
var express = require('express')
  , path    = require('path') //propio de node, navegacion entre directorios
  , bodyParser = require('body-parser')//antes estaba dentro de express
  , cons = require('consolidate');//motor html

// Creando la primera instancia de mi aplicacion
var app = express();//levanta la aplicación

var debug = require('debug')('lab29');//debug de la aplicacion

// Configurando parametros de funcionamiento para express con respecto a la aplicacion

// Puerto de trabajo para la url
app.set('port', process.env.PORT || 3636); //recibe o pone default 3636

// Motor de templates utilizando Consolidate y swig
app.engine('html', cons.swig);

// Tipo de templates que utilizaran; en nuestro caso `html`
app.set('view engine', 'html');

// Path o directorio donde se encuentran los templates
app.set('views', path.join(__dirname, 'views'));

// Encoding para las tramas HTTP
app.use(bodyParser.json()); //recibe tramas json en las cabeceras
app.use(bodyParser.urlencoded({//admite el encode
	extended : true
}));

// Sirviendo los estaticos de la aplicacion en nuestro caso los `assets`
app.use(express.static(path.join(__dirname, 'assets')));//archivos estáticos

// Quien resuelve y gestiona las url a través del controlador
var controllers = require('./controllers/router');//controlador y resolución de urls

app.use(controllers);

// En el caso en que la url no sea conocida o resuelta (si no lo encuentra en controllers)
app.get('*', function(req, res){
	res.status(405).send('Method not allowed');
});


var server = app.listen(app.get('port'), function(){
	debug('Express esta escuchando por el puerto' + server.address().port);//se levanta el servidor
});