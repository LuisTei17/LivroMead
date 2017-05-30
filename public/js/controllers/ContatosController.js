angular.module('contatooh').controller('ContatosController', function($scope, $resources){
  $scope.total = 0;
  $scope.contatos = [];
  $scope.filtro = '';
33
  /*var Contato = $resource('/contatos');
  function buscaContato(){

    Contato(
      function(data){
        $scope.contatos = data
      },
      function(erro){
        console.log("erro");
        console.log(erro);
      });
  } */

  $scope.remove = function(contato){
    console.log(contato)
  }
//Código legado para buscar contatos através do http
  $http.get('/contatos').success(function(data){
    $scope.contatos = data;
  }).error(function(statusText){
    console.log("N foi possível obter a lista");
    console.log(statusText);
  });
//*/
  buscaContato();
});
