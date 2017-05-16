/**
 * Copyright(c) 2014 ZeOmega, Inc.
 * See ZeOmega_EULA.txt file included with this module distribution.
 *
 */
'use strict';

angular.module('gandhiGrocery')
    .factory('dataFactory', ['$http', function($http) {

    var urlBase = 'https://sdinoo-test.apigee.net/v1/orders',
    	dataFactory = {};

    dataFactory.postGroceries = function (dataObj, authorization, apikey) {
    	var url = urlBase + '?apikey=' + apikey;
    	// $http.defaults.headers.common.Authorization = 'Bearer ' + authorization;
        return $http.post(url, dataObj,
        				  { 
        				  	headers:{ 'Authorization':  'Bearer ' + authorization }
        				  });
    };
    return dataFactory;
}]);