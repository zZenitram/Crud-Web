app.config(function ($routeProvider, $locationProvider) {

    $routeProvider

        .when('/inicio', {
            templateUrl: 'views/inicio/inicio.html',
            controller: 'main',
        })

        .when('/entrar', {
            templateUrl: 'views/entrar/entrar.html',
            controller: 'main',
        })

        .when('/registrar', {
            templateUrl: 'views/registrar/registrar.html',
            controller: 'registrarController',
        })

        .otherwise({
            redirectTo: '/inicio'
        });

    $locationProvider.html5Mode(false);
});