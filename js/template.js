SOME_CONSTANT = true;

angular.module('appName', [ 'ui.bootstrap' ])

  // [Name] controller
  .controller('NameCtrl', function($scope, $http, $interval, $window) {
    var url = $window.location.href; 
    $scope.state = true;

    $scope.takeAction = function(action) {
      console.log('Took action ' + action);
    };

    function doSomethingRESTful() {
      $http.defaults.headers.common.Accept = 'application/json';
      $http({ method: 'GET', url: url })
        .then(function(response) { // Success
          console.log('Example of a successful HTTP GET');
        }, function(response) {    // Error
          console.log('Example of an unsuccessful HTTP GET');
      });
    }

    $scope.intervalPromise = $interval(doSomethingRESTful, 1000);
    $interval.cancel($scope.intervalPromise);
  });
