myApp.controller("AddController", ["$scope", "GoalManager", function($scope, GoalManager){
  $scope.goal = {};
  console.log("here");

  $scope.submitGoal = function(data) {
   GoalManager.postData(data);

  };
}]);

myApp.controller("ShowController", ["$scope", "GoalManager", function($scope, GoalManager){
  $scope.goalArray = GoalManager.data;
  GoalManager.getData();
  console.log("wow");

  $scope.deleteGoal = function(data){
    GoalManager.deleteData(data);
    console.log("deleted");

  };

}]);
