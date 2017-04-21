myApp.controller("RecipeController", ["$scope", "GoalManager", function($scope, GoalManager){
  $scope.recipe = {};
  console.log("here");

  $scope.submitRecipe = function(data) {
   GoalManager.postRecipe(data);

  };

  $scope.recipeArray = GoalManager.recipe;
  GoalManager.getRecipe();
  console.log("wow");

  $scope.deleteRecipe = function(data){
    GoalManager.deleteRecipe(data);
    console.log("deleted");

  };


}]);
