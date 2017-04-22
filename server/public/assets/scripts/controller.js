myApp.controller("AddController", ["$scope", "GoalManager", function($scope, GoalManager){
  $scope.goal = {};
  console.log("here");

  var d = new Date();
  console.log(d);
  $scope.time = d.toDateString();
  console.log($scope.time);

  $scope.submitGoal = function(data) {
   GoalManager.postData(data);
   $scope.goal={};

  };

  $scope.goalArray = GoalManager.data;
  GoalManager.getData();
  console.log("wow");

  $scope.deleteGoal = function(data){
    GoalManager.deleteData(data);
    console.log("deleted");

  };


}]);
