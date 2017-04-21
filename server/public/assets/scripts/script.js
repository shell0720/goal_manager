var myApp = angular.module("myApp", ["ngRoute", "720kb.datepicker"]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
      when("/home", {
      templateUrl: "/assets/views/routes/home.html",
      controller: "AddController"
      })
      .when("/add", {
      templateUrl: "/assets/views/routes/add.html",
      controller: "AddController"
      })
      .when("/view", {
      templateUrl: "/assets/views/routes/view.html",
      controller: "ShowController"
      })
      .when("/contact", {
      templateUrl: "/assets/views/routes/contact.html",
      controller: "ShowController"
      })
      .when("/about", {
      templateUrl: "/assets/views/routes/about.html",
      controller: "ShowController"
      })
      .when("/news", {
      templateUrl: "/assets/views/routes/news.html",
      controller: "AddController"
      })
      .when("/tools", {
      templateUrl: "/assets/views/routes/tools.html",
      controller: "ToolController"
      })
      .when("/garagesale", {
      templateUrl: "/assets/views/routes/garagesale.html",
      controller: "GSController"
      })
      .when("/pets", {
      templateUrl: "/assets/views/routes/pets.html",
      controller: "PetsController"
      })
      .when("/giveaway", {
      templateUrl: "/assets/views/routes/giveaway.html",
      controller: "GAController"
      })
      .when("/kids", {
      templateUrl: "/assets/views/routes/kids.html",
      controller: "KidsController"
      })
      .when("/recipe", {
      templateUrl: "/assets/views/routes/recipe.html",
      controller: "RecipeController"
      })
      .when("/labor", {
      templateUrl: "/assets/views/routes/labor.html",
      controller: "LaborController"
      })
      .when("/tutor", {
      templateUrl: "/assets/views/routes/tutor.html",
      controller: "AddController"
      })
      .otherwise("/home");
}]);
