angular.module('contatooh', ['ngRoute', 'ngResource']).config(function($routeProvider){
  $routeProvider.when('/contatos', {
    templateUrl: 'partial/contatos.html',
    controller: 'ContatosController'
  });
  $routeProvider.when('/contatos/:contatoId', {
    templateUrl: 'partial/contato.html',
    controller: 'ContatoController'
  });
  $routeProvider.otherwise({redirectTo: '/contatos'});
});
