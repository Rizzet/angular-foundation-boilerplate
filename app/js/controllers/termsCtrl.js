'use strict';

angular.module('healthLiteracy')

.controller('termsCtrl',
  
  [          '$scope', 
    function ($scope) {
        $scope.menu = [{'state':'state1.list','name':'Dynamic menu show 1 and list'},{'state':'state2','name':'Dynamic menu show 2 not list'}]
      console.log('yup');
        console.log($scope);
    }
  ]
);