myApp.controller("PetsController", ["$scope", "GoalManager", function($scope, GoalManager){
  $scope.pet = {};
  console.log("here");

  $scope.submitPets = function(data) {
   GoalManager.postPets(data);
   $scope.pet = {};
  };

  $scope.petsArray = GoalManager.pets;
  GoalManager.getPets();
  console.log("wow");

  $scope.deletePets = function(data){
    GoalManager.deletePets(data);
    console.log("deleted");

  };


}]);
