angular.module('LaravelAngularJS.usuario', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/usuario', {
            templateUrl: 'views/usuario.html',
            controller: 'UsuarioController'
        });
    }])
    .controller('UsuarioController', function($scope, UsuarioService) {
    	UsuarioService.get().then(function(response){
            $scope.usuarios = response.data.data;
    	});
    });