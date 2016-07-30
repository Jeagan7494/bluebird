angular
    .module('bluebirdApp', ['ui.router'])
    .config(['$stateProvider',
        function($stateProvider){
            $stateProvider
                .state('/main', {
                    url: "",
                    templateUrl: "html/views/work.html"
                })
                .state('work', {
                    url: "/work",
                    templateUrl: "html/views/work.html"
                })
                .state('our-story', {
                    url: "/our-story",
                    templateUrl: "html/views/story.html"
                })
                .state('what-we-do', {
                    url: "/what-we-do",
                    templateUrl: "html/views/what.html"
                })
                .state('contact', {
                    url: "/contact",
                    templateUrl: "html/views/contact.html"
                })
                .state('cases', {
                    url: "/cases",
                    templateUrl: "html/views/cases.html"
                })
        }
    ])
    .controller('mainController', ['$scope', '$http', function($scope, $http) {
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
            .then(function(returnData) {
               if (returnData.data.success) {
                   window.location.href = "/contactSuccess";
               }
            });
        }
    }]);


//===================================================================//
   