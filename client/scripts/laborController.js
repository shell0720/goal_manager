myApp.controller("LaborController", ["$scope", "GoalManager", function($scope, GoalManager){
  $scope.labor = {};
  console.log("here");

  $scope.submitLabor = function(data) {
   GoalManager.postLabor(data);
   $scope.labor = {};

  };

  $scope.laborArray = GoalManager.labor;
  GoalManager.getLabor();
  console.log("wow");

  $scope.deleteLabor = function(data){
    GoalManager.deleteLabor(data);
    console.log("deleted");

  };


}]);
