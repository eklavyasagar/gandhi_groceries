/**
 * Copyright(c) 2014 ZeOmega, Inc.
 * See ZeOmega_EULA.txt file included with this module distribution.
 *
 */
'use strict';

angular.module('gandhiGrocery')
    .factory('dataFactory', ['$http', function($http) {

    var urlBase = 'https://apibaas-trial.apigee.net/sdinoo/sandbox/mp_orders';
    var dataFactory = {};

    dataFactory.postGroceries = function (dataObj) {
        return $http.post(urlBase, dataObj);
    };

    return dataFactory;
}]);