myApp.controller("ToolController", ["$scope", "GoalManager", function($scope, GoalManager){
  $scope.tool = {};
  console.log("here");

  $scope.submitTool = function(data) {
   GoalManager.postTool(data);

  };

  $scope.toolArray = GoalManager.tool;
  GoalManager.getTool();
  console.log("wow");

  $scope.deleteTool = function(data){
    GoalManager.deleteTool(data);
    console.log("deleted");

  };


}]);
