angular.module('app', []).controller('main', function ($scope, $rootScope, $http) {

    $scope.produtos = [
        { codigo: '01', nome: 'Loot-box', modelo: 'Caixa', valor: 'R$ 40,00', data: '22/08/2022' },
    ]

    $('body').on('click', '.container-itens', function () {

        $(this).toggleClass('active-border');
        $(this).find('.container-itens-secundarios').slideToggle()
    })

    $scope.setProduto = function (testes) {
        $scope.produtos.push(testes)
    }
});