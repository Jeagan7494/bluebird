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





//===================================================================//
   