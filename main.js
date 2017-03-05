angular.module('LaravelAngularJS', ['ngRoute',
        'LaravelAngularJS.index',
        'LaravelAngularJS.usuario',
        'LaravelAngularJS.usuarioService',
        'LaravelAngularJS.minhaUrlService',
        'LaravelAngularJS.usuarioForm'
        ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/index'
        });
    }]);
