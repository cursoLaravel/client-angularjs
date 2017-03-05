angular.module('LaravelAngularJS.index', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        });
    }])
    .controller('IndexController', function($scope) {
        console.log("index");
    });