angular.module('bluebirdApp', ['ui.router']);


angular.module('bluebirdApp')
    .config(['$stateProvider',
        function($stateProvider){

            console.log('config loaded');

            $stateProvider
                .state('/main', {
                    url: "",
                    templateUrl: "html/views/home.html"
                })

                .state('home', {
                    url: "/home",
                    templateUrl: "html/views/home.html"
                })

                .state('about', {
                    url: "/about",
                    templateUrl: "html/views/about.html"
                })

                .state('howto', {
                    url: "/howto",
                    templateUrl: "html/views/howto.html"
                })

                .state('locate', {
                    url: "/locate",
                    templateUrl: "html/views/construction.html"
                })

                .state('register', {
                    url: "/register",
                    templateUrl: "html/views/register.html"
                })

                .state('connect', {
                    url: "/connect",
                    templateUrl: "html/views/contact.html"
                })
                .state('disclaimer', {
                    url: "/theLegalStuff",
                    templateUrl: "html/views/disclaimer.html"
                })
        }
    ]);






//===================================================================//
   