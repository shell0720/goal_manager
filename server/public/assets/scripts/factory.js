myApp.factory("GoalManager", ["$http", function($http){

  var getData = function() {
    $http.get("/goal").then(function(response){
      data.result = response.data;
      console.log(data);
    });
  };

  var data = {};

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


  return {
    postData: postData,
    getData: getData,
    deleteData: deleteData,
    data: data
  };
}]);
