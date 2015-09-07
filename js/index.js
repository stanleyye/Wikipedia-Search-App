var app = angular.module('WikiSearch',['ngAnimate']);

app.controller('WikiController', ['$scope', '$http', function($scope, $http){
  
  $scope.names =[];
  $scope.descriptions = [];
  $scope.links = [];
  
  $scope.search = function () {
    $('.title').addClass('hide');
    var inputvalue = document.getElementById("searchbox").value;
  $http.jsonp(      'https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&search=' + inputvalue + '&format=json&callback=JSON_CALLBACK').success(function(data) {
    $scope.names.length = 0;
    $scope.descriptions.length = 0;
    $scope.links.length = 0;
     for (var i=0;i<10;i++) {
       $scope.names.push(data[1][i]);
 $scope.descriptions.push(data[2][i]);
       $scope.links.push(data[3][i]);
     }   
  });
  }

}]);