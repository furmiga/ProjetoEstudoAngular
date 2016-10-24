angular.module('minhasDiretivas',[]).directive('gridEnderecos',function(){
		//directive definition object(objeto que ira definir a diretiva)
		var ddo = {};
		
		//indica que eu posso usar minha diretiva tanto como atributo quanto como elemento
		ddo.restrict = "AE";
		
		ddo.scope = {
			//o @ passa um valor em string
			//caso eu queira que seja uma função eu altero @ por &
			//acao: '&acao'
			logradouro: '@logradouro',
			complemento: '@complemento',
			bairro: '@bairro',
			localidade: '@localidade',
			uf: '@uf'
		};
		
		//ddo.template = '<div><table><tr><th>rua</th></tr><tr><td>{{endereco}}</td></tr></table></div>'
		ddo.templateUrl = "partials/Grid-Enderecos.html";
		return ddo;
	}
);