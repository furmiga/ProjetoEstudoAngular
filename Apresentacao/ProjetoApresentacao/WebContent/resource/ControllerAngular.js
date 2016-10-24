angular.module('main').controller('EnderecoController',
				function($scope, $http) {
					
					
					$scope.limpar = function(){
						$scope.enderecos = "";
						$scope.texto = "";
					}
					
					$scope.consultarEndereco = function() {
						var promisse = $http.get('https://viacep.com.br/ws/'+$scope.texto+'/json/');
						
						// promisse.then(function(retorno){
						// $scope.enderecos = retorno.data;
						// }).catch(function (erro){
						// console.log(erro);
						// });
						promisse.success(function(retorno) {

							$scope.enderecos = retorno;// não precisa fazer
														// retorno.data
							console.log($scope.enderecos);
							console.log();
							
						}).error(function(erro) {
							console.log(erro);
						});
					}
				});