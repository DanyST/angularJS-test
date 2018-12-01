'use strict';

// Register `marketDetail` component, along with its associated controller and template
angular.
    module('marketDetail').
    component('marketDetail', {
        templateUrl: 'market-detail/market-detail.template.html',
        controller: ['$http', '$routeParams', function MarketDetailController($http, $routeParams) {                            
            this.marketName = $routeParams.marketName;            
            var self = this;
            $http.get("https://bittrex.com/api/v1.1/public/getmarketsummary?market=" + this.marketName).then(function(response) {
                self.market = response.data.result[0];
            });
        }]
  });
