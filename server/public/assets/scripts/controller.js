myApp.controller("AddController", ["$scope", "GoalManager", function($scope, GoalManager){
  $scope.goal = {};
  console.log("here");

  var d = new Date();
  console.log(d);
  $scope.time = d.toDateString();

  $scope.submitGoal = function(data) {
   GoalManager.postData(data);

  };

  $scope.goalArray = GoalManager.data;
  GoalManager.getData();
  console.log("wow");

  $scope.deleteGoal = function(data){
    GoalManager.deleteData(data);
    console.log("deleted");

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
