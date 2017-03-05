angular.module('LaravelAngularJS.usuarioForm', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/usuario-add', {
            templateUrl: 'views/usuario-form.html',
            controller: 'UsuarioFormController'
        });
    }])
    .controller('UsuarioFormController', function($scope, UsuarioService, $location) {
    	

        $scope.salvar = function(){
            UsuarioService.salvar($scope.usuario).then(function(response){
                $location.url("usuario");
            });    
        }

        

    });