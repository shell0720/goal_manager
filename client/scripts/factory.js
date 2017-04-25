myApp.factory("GoalManager", ["$http", function($http){
  var data = {};
  var tool = {};
  var garagesale = {};
  var giveaway = {};
  var kids = {};
  var labor = {};
  var pets = {};
  var recipe = {};

  var getData = function() {
    $http.get("/goal").then(function(response){
      data.result = response.data;
      console.log(data);
    });
  };

  var postData = function(data){
    $http.post("/goal", data).then(function(response){
      console.log(response.data);
      getData();
    });
  };

  var deleteData = function(data){
    $http.delete("/goal/"+data._id).then(function(response){
      console.log(data);
      console.log(response.data);
      getData();
    });
  };

  var getTool = function() {
    $http.get("/tool").then(function(response){
      tool.result = response.data;
      console.log(response.data);
    });
  };

  var postTool = function(data){
    $http.post("/tool", data).then(function(response){
      console.log(response.data);
      getTool();
    });
  };

  var deleteTool = function(data){
    $http.delete("/tool/"+data._id).then(function(response){
      console.log(data);
      console.log(response.data);
      getTool();
    });
  };

  var getGS = function() {
    $http.get("/garagesale").then(function(response){
      garagesale.result = response.data;
      console.log(response.data);
    });
  };

  var postGS = function(data){
    $http.post("/garagesale", data).then(function(response){
      console.log(response.data);
      getGS();
    });
  };

  var deleteGS = function(data){
    $http.delete("/garagesale/"+data._id).then(function(response){
      console.log(data);
      console.log(response.data);
      getGS();
    });
  };

  var getGA = function() {
    $http.get("/giveaway").then(function(response){
      giveaway.result = response.data;
      console.log(response.data);
    });
  };

  var postGA = function(data){
    $http.post("/giveaway", data).then(function(response){
      console.log(response.data);
      getGA();
    });
  };

  var deleteGA = function(data){
    $http.delete("/giveaway/"+data._id).then(function(response){
      console.log(data);
      console.log(response.data);
      getGA();
    });
  };

  var getKids = function() {
    $http.get("/kids").then(function(response){
      kids.result = response.data;
      console.log(response.data);
    });
  };

  var postKids = function(data){
    $http.post("/kids", data).then(function(response){
      console.log(response.data);
      getKids();
    });
  };

  var deleteKids = function(data){
    $http.delete("/kids/"+data._id).then(function(response){
      console.log(data);
      console.log(response.data);
      getKids();
    });
  };

  var getLabor = function() {
    $http.get("/labor").then(function(response){
      labor.result = response.data;
      console.log(response.data);
    });
  };

  var postLabor = function(data){
    $http.post("/labor", data).then(function(response){
      console.log(response.data);
      getLabor();
    });
  };

  var deleteLabor = function(data){
    $http.delete("/labor/"+data._id).then(function(response){
      console.log(data);
      console.log(response.data);
      getLabor();
    });
  };

  var getPets = function() {
    $http.get("/pets").then(function(response){
      pets.result = response.data;
      console.log(response.data);
    });
  };

  var postPets = function(data){
    $http.post("/pets", data).then(function(response){
      console.log(response.data);
      getPets();
    });
  };

  var deletePets = function(data){
    $http.delete("/pets/"+data._id).then(function(response){
      console.log(data);
      console.log(response.data);
      getPets();
    });
  };

  var getRecipe = function() {
    $http.get("/recipe").then(function(response){
      recipe.result = response.data;
      console.log(response.data);
    });
  };

  var postRecipe = function(data){
    $http.post("/recipe", data).then(function(response){
      console.log(response.data);
      getRecipe();
    });
  };

  var deleteRecipe = function(data){
    $http.delete("/recipe/"+data._id).then(function(response){
      console.log(data);
      console.log(response.data);
      getRecipe();
    });
  };

  return {
    postData: postData,
    getData: getData,
    deleteData: deleteData,
    data: data,

    postTool: postTool,
    getTool: getTool,
    deleteTool: deleteTool,
    tool: tool,

    postGS: postGS,
    getGS: getGS,
    deleteGS: deleteGS,
    garagesale: garagesale,

    postGA: postGA,
    getGA: getGA,
    deleteGA: deleteGA,
    giveaway: giveaway,

    postKids: postKids,
    getKids: getKids,
    deleteKids: deleteKids,
    kids: kids,

    postLabor: postLabor,
    getLabor: getLabor,
    deleteLabor: deleteLabor,
    labor: labor,

    postPets: postPets,
    getPets: getPets,
    deletePets: deletePets,
    pets: pets,

    postRecipe: postRecipe,
    getRecipe: getRecipe,
    deleteRecipe: deleteRecipe,
    recipe: recipe,
  };
}]);
