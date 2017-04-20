myApp.factory("GoalManager", ["$http", function($http){
  var data = {};
  var tool = {};

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

  return {
    postData: postData,
    getData: getData,
    deleteData: deleteData,
    data: data,

    postTool: postTool,
    getTool: getTool,
    deleteTool: deleteTool,
    tool: tool
  };
}]);
