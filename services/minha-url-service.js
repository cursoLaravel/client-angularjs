angular.module('LaravelAngularJS.minhaUrlService', ['ngRoute', 'ngResource']).
service('MinhaUrlService', ['$http', function($http) {
   
     this.getUrl = function(){
        return "http://localhost:8000/"
     };

 }]);