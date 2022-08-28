app.config(function ($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/armazenamento/armazenamento.html',
            controller: 'produtoController',
        })

        .when('/inicio', {
            templateUrl: 'views/inicio/inicio.html',
            controller: 'inicioController',
        })

        .when('/clientes', {
            templateUrl: 'views/clientes/clientes.html',
            controller: 'produtoController',
        })

        .when('/armazenamento', {
            templateUrl: 'views/armazenamento/armazenamento.html',
            controller: 'produtoController',
        })

        .otherwise({
            redirectTo: '/armazenamento'
        });

    $locationProvider.html5Mode(false);
});