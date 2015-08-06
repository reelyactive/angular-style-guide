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
      $http.get(url)
        .success(function(data, status, headers, config) {
          console.log('Example of a successful HTTP GET');
        })
        .error(function(data, status, headers, config) {
          console.log('Example of an unsuccessful HTTP GET');
        });
    }

    $scope.intervalPromise = $interval(doSomethingRESTful, 1000);
    $interval.cancel($scope.intervalPromise);
  });
