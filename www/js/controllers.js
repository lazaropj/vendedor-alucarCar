angular.module('starter.controllers', [])

.controller('AgendamentoController', function($scope, PedidosService) {

  PedidosService.obterPedidos().then(function(dados){
		$scope.listaDePedidos = dados;
	})

})

.controller('FornecedorController', function($scope, FornecedorService) {

  FornecedorService.obterFornecedores().then(function(dados){
		$scope.listaDeFornecedores = dados;
	})


})
