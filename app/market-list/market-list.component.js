'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
    module('marketList').
    component('marketList', {
        templateUrl: 'market-list/market-list.template.html',
        controller: ['$http', function MarketListController($http) {
            this.orderProp = '-Volume';

            var self = this;
            $http.get("https://bittrex.com/api/v1.1/public/getmarketsummaries").then(function(response) {
                self.markets = response.data.result;
            });
        }]
  });
