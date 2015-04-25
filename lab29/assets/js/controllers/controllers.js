/**
 * Created by alejo8591 on 21/04/15.
 */
angular.module('lab29.controllers', ['lab29.services']) //usa el modulo services
.controller('lab29Controller', function($scope, data){// usa el metodo data del fatory
    'use strict';
    data.query(function(data){ //query consulta lo que llega en data
       $scope.data = data; //lo asigna a variable en scope
    });
});