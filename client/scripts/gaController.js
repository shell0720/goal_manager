myApp.controller("GAController", ["$scope", "GoalManager", function($scope, GoalManager){
  $scope.giveaway = {};
  console.log("here");

  $scope.submitGA = function(data) {
   GoalManager.postGA(data);
     $scope.giveaway = {};

  };

  $scope.giveawayArray = GoalManager.giveaway;
  GoalManager.getGA();
  console.log("wow");

  $scope.deleteGA = function(data){
    GoalManager.deleteGA(data);
    console.log("deleted");

  };


}]);
