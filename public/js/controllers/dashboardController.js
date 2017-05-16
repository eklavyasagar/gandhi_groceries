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

            $scope.postGroceries = function (name, beer, bread, wine) {
                $scope.errorStatus = null;
                var dataObj = {
                    name: name,
                    beer: beer,
                    bread: bread,
                    wine: wine
                }
                dataFactory.postGroceries(dataObj)
                .then(function (response) {
                    var groceries = response.data.entities;
                    $scope.groceries = $filter('filter')(groceries, { name: name, beer: beer, bread: bread, wine: wine });
                }, function (error) {
                    $scope.errorStatus = error.data.error_description;
                })
            };
        }
]);