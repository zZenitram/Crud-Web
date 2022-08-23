angular.module('app', []).controller('main', function ($scope, $rootScope, $http) {

    $http({ method: 'GET', url: "assets/json/dados.json" }).then(successCallback, errorCallback)

    function successCallback(response) {
        console.log(response.data.produtos);

        $scope.produtos = response.data.produtos
    }

    function errorCallback(response) {
        console.error(response);
    }

    $('body').on('click', '.container-itens', function () {

        $(this).toggleClass('active-border');
        $(this).find('.container-itens-secundarios').slideToggle()
    })

    $scope.setProduto = function (get) {
        $scope.produtos.push(get)
        $('#cadastrar').offcanvas('hide');
    }
});