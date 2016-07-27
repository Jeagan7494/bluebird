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

                .state('work', {
                    url: "/work",
                    templateUrl: "html/views/home.html"
                })

                .state('our-story', {
                    url: "/our-story",
                    templateUrl: "html/views/about.html"
                })

                .state('what-we-do', {
                    url: "/what-we-do",
                    templateUrl: "html/views/howto.html"
                })

                .state('contact', {
                    url: "/contact",
                    templateUrl: "html/views/construction.html"
                })

        }
    ]);






//===================================================================//
   