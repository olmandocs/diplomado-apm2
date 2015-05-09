/**
 * Created by alejo8591 on 21/04/15.
 */
angular.module('lab29.services', ['ngResource']) //llama a angular-resource
.factory('data', function($resource){//crea un metodo, resource va a usarse en el

    'use strict';

    return $resource('http://localhost:3636/data');//toma los datos y los regresa
    //return $resource('http://104.236.37.193:8888/login/');
});