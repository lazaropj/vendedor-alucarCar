angular.module('starter.services', [])

.factory('PedidosService', function($http) {

  //var url = 'https://aluracar.herokuapp.com';
	var url = 'http://localhost:8080';

  return {
    obterPedidos : function(){
			return $http.get(url + "/obterPedidos").then(function(response){
				return response.data;
			});
		},
  };
})

.factory('FornecedorService', function($http) {

  //var url = 'https://aluracar.herokuapp.com';
	var url = 'http://localhost:8080';

  return {
    obterFornecedores : function(){
			return $http.get(url + "/obterFornecedores").then(function(response){
				return response.data;
			});
		},
  };
});
