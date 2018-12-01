'use strict';

// Register `marketList` component, along with its associated controller and template
angular.
    module('marketList').
    component('marketList', {
        templateUrl: 'market-list/market-list.template.html',
        controller: ['$http', '$location', function MarketListController($http, $location) {
            this.orderProp = '-Volume';    
            this.showMarketDetail = function(marketName) {
                console.log(marketName);
                $location.path('/markets/' + marketName);
            }

            var self = this;
            $http.get("https://bittrex.com/api/v1.1/public/getmarketsummaries").then(function(response) {
                self.markets = response.data.result;
                self.limit = self.markets.length;
            });
        }]
  });
