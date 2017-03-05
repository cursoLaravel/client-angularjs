angular.module('LaravelAngularJS.usuarioService', ['ngRoute', 'ngResource']).
service('UsuarioService', ['$http', 'MinhaUrlService', function($http, MinhaUrlService) {
     this.usuarioUrl = MinhaUrlService.getUrl() + "usuario";

     this.get = function(){
        return $http.get(this.usuarioUrl);
     };

     this.salvar = function(usuario){
     	return $http.post( this.usuarioUrl, usuario);
     }

     this.getId = function(id){
     	return $http.get(this.usuarioUrl + "/" + id);
     }

     this.editar = function(usuario){
     	return $http.put( this.usuarioUrl, usuario);
     }

 }]);