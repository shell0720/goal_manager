var myApp = angular.module("myApp", ["ngRoute"]);

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
      .otherwise("/home");
}]);
