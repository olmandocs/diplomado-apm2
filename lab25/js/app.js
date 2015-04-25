angular.module('initial_spi', ['ngRoute', 'initial_spi.controllers'])//llama los modulos ngRoute y initial_spi.controllers
.config(['$routeProvider', function($routeProvider){
    $routeProvider

$routeProvider

    .when('/mobile', {
        templateUrl : "views/mobile.html",
        controller: 'mobileController'
    })

    .when('/smartphone', {
        templateUrl: "views/smartphone.html",
        controller: 'smartphoneController'
    });

}]);