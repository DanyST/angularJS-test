'use strict';

angular.
  module('marketApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/markets', {
          template: '<market-list></market-list>'
        }).
        when('/markets/:marketName', {
          template: '<market-detail></market-detail>'
        }).
        otherwise('/markets');
    }
  ]);
