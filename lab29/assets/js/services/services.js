/**
 * Created by alejo8591 on 21/04/15.
 */
angular.module('lab29.services', ['ngResource']) //llama a angular-resource
.factory('data', function($resource){//crea un metodo, resource va a usarse en el

    'use strict';

    return $resource('http://127.0.0.1:3636/data');//toma los datos y los regresa
});