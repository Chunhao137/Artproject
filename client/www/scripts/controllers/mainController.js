angular.module('dangerousWrenchApp')
  .controller('MainCtrl', function ($scope, KeywordSearch, userServices) {
    $scope.searchterms;
    $scope.displayResults = function() {
      KeywordSearch.displayResults($scope.searchterms);
    };
    $scope.hello = 'hello'
    // $scope.userID="ahhhhh"
    $scope.getuserId = function(){
      console.log('heldfdsfadslo')
      $scope.userID = userServices.grabUserID()
      console.log('userIDDDD',$scope.userID)
    };
    $scope.goToLikes = userServices.goToLikes
    $scope.checkLoginState = function(){
      userServices.checkLoginState();
      $scope.getuserId();

    }
  })