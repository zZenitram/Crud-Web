app.controller('main', function ($scope, $rootScope, $http) {

    // ---------------------------------------------- URLs ----------------------------------------------

    $scope.offcanvas = { name: 'produto', url: 'components/offcanvas/produto.html' };

    $scope.dropdown = { name: 'menu', url: 'components/dropdown/opcoes.html' };

    $scope.tabela = { name: 'tabela', url: 'views/armazenamento/tabela/tabela.html' }

    $scope.header = { name: 'cabecalho', url: 'views/main/header/header.html' }

    $scope.topbar = { name: 'manu lateral', url: 'views/main/topbar/topbar.html' }

    // ---------------------------------------------- Menu ----------------------------------------------

    $scope.menu = function () {
        $('.container-topbar, main#view').toggleClass('show')
    }

    // ---------------------------------------------- Table ----------------------------------------------

    $scope.searcher = function (search) { $scope.search = search }

    $('body').on('click', '.container-itens', function () {
        $(this).find('.container-itens-secundarios').slideToggle()

        $(this).find('.container-itens-principais i.arrow').toggleClass('down')
    })

    // ---------------------------------------------- Resquest ----------------------------------------------

    function request(method, url, date = '') {
        return $http({ method: method, url: url, date: date })
    }
    function callbackProdutos(response) { $scope.produtos = response.data.produtos }
    request('get', 'assets/json/produtos.json').then(callbackProdutos)

    function callbackClientes(response) { $scope.clientes = response.data.clientes }
    request('get', 'assets/json/clientes.json').then(callbackClientes)

    function callbackUsuario(response) { $scope.usuario = response.data.usuario }
    request('get', 'assets/json/usuario.json').then(callbackUsuario)

});