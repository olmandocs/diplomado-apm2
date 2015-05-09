/*
* Dependencias
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo' concatena los archivos q encuentra en source y crea un min
*/
gulp.task('concat-files-olman', function(){ //concat-files es el nombre de la tarea
	gulp.src('source/*.js') //fuente de archivos .js , si se necesita un orden se le manda un arreglo LAB32
		.pipe(concat('lab31.min.js')) //concatena y crea un .min
		.pipe(uglify())//lo deja en una sola linea
		.pipe(gulp.dest('build/'))//lo guarda en la carpeta build, la crea automaticamente
});