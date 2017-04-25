myApp.controller("KidsController", ["$scope", "GoalManager", function($scope, GoalManager){
  $scope.kid = {};
  console.log("here");

  $scope.submitKids = function(data) {
   GoalManager.postKids(data);
     $scope.kid = {};
  };

  $scope.kidsArray = GoalManager.kids;
  GoalManager.getKids();
  console.log("wow");

  $scope.deleteKids = function(data){
    GoalManager.deleteKids(data);
    console.log("deleted");
  };


}]);
