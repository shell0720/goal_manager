myApp.controller("GSController", ["$scope", "GoalManager", function($scope, GoalManager){
  $scope.garagesale = {};
  console.log("here");

  $scope.submitGS = function(data) {
   GoalManager.postGS(data);

  };

  $scope.garagesaleArray = GoalManager.garagesale;
  GoalManager.getGS();
  console.log("wow");

  $scope.deleteGS = function(data){
    GoalManager.deleteGS(data);
    console.log("deleted");

  };


}]);
