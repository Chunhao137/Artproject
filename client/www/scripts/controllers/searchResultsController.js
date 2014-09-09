'use strict';

angular.module('dangerousWrenchApp')
.controller('SearchResultsCtrl', function ($scope, $location, $rootScope, KeywordSearch) {
    $scope.searchterms;
    $scope.artData = {};

    $scope.search = function() {
      $location.search('q', $scope.searchterms);
      KeywordSearch.search($scope.searchterms)
        .then(function (response) {
          $scope.artData = response.data;
          console.log($scope.artData);
        }, function (error) {
          console.log(error);
        })
    };
    console.log('q is', $location.search().q);
    var q = $location.search().q;
    if (q != null) {
      $scope.searchterms = q;
      $scope.search();
    };
})