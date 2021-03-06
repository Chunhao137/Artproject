var myApp = angular.module('dangerousWrenchApp')

myApp.controller('UserRecommend', function ($scope,$ionicSideMenuDelegate, likeButton, userServices) {

  var results = userServices.generateArtistRecommendations('demo');
    
  results.then(function(response) {
    $scope.items =response.data;
  })

  $scope.selectedIndex = [];
  
  $scope.itemClicked = function ($index) {
    console.log('item liked clicked');
    $scope.selectedIndex.push($index);
    likeButton.like({username: userServices.userName, url: $scope.items[$index].url });
  }

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

 $scope.userID = "hello"
    
})


