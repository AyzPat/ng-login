(function () {

    var app = angular.module('app', ['firebase', 'ui.router'])
                     .constant('firebaseUrl', "https://popping-torch-4767.firebaseio.com/");
   
    app.config(function ($stateProvider, $urlRouterProvider, firebaseUrl) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home.html'
            })

        .state('authenticated', {
            url: '/authenticated',
            templateUrl: 'authenticated.html',
            resolve: {
                
              
                "currentAuth": ["$firebaseAuth", function ($firebaseAuth) {
                    
                    var ref = new Firebase(firebaseUrl);
                    var authObj = $firebaseAuth(ref);
console.log("login");
                    return authObj.$requireAuth();
                }]
            }
        });
    });


})();