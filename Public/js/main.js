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



angular.module('bluebirdApp').controller('mainController', ['$scope', '$http', function($scope, $http) {
    console.log('mainController loaded');

    $scope.form = {};

    $scope.formSubmit = function() {
        console.log($scope.form)
        //$http.post('/submit', $scope.form)
        $http({
            method  : 'post',
            url     : '/api/register',
            data    : $scope.form
        })
            // .then(function(returnData) {
        //    if (returnData.data.success) {
        //        window.location.href = "/contactSuccess";
        //    }
        //}
    };

    // $(document).ready(function () {
    //     $(".navbar-nav li a").click(function(event) {
    //         $(".navbar-collapse").collapse('hide');
    //     });
    // });


//===================================================================//
   