angular.module('note', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.notes = [];
    $scope.addNote = function() {
      var newnote = {title:$scope.formContent,upvotes:0};
      $scope.formContent='';
      $http.post('/notes', newnote).success(function(data){
        $scope.notes.push(data);
      });
    };
    $scope.upvote = function(note) {
      return $http.put('/notes/' + note._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          note.upvotes = data.upvotes;
        });
    };
        $scope.incrementUpvotes = function(note) {
          $scope.upvote(note);
    };
    $scope.getAll = function() {
      return $http.get('/notes').success(function(data){
        angular.copy(data, $scope.notes);
      });
    };
    $scope.getAll();

  }
]);

