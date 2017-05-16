/**
 * Master Controller
 */

angular.module('gandhiGrocery')
    .controller('DashboardCtrl', [
        '$scope', '$rootScope', '$cookieStore', 'dataFactory', '$filter',
        function ($scope, $rootScope, $cookieStore, dataFactory, $filter) {
            var mobileView = 992;

            $scope.getWidth = function () {
                return window.innerWidth;
            };

            $scope.$watch($scope.getWidth, function(newValue, oldValue) {
                if (newValue >= mobileView) {
                    if (angular.isDefined($cookieStore.get('toggle'))) {
                        $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
                    } else {
                        $scope.toggle = true;
                    }
                } else {
                    $scope.toggle = false;
                }
            });

            window.onresize = function() {
                $scope.$apply();
            };


            $scope.toggleSidebar = function () {
                $scope.toggle = !$scope.toggle;
                $cookieStore.put('toggle', $scope.toggle);
            };

            $scope.postGroceries = function (name, beer, bread, wine, authorization, apikey) {
                $scope.errorStatus = null;
                var dataObj = {
                    name: name,
                    beer: beer,
                    bread: bread,
                    wine: wine
                }
                dataFactory.postGroceries(dataObj, authorization, apikey)
                .then(function (response) {
                    $scope.groceries = response.data.entities;
                }, function (error) {
                    $scope.errorStatus = 'failed to get the response';
                })
            };
        }
]);