var app = angular.module('app', []);

app.controller('main', function($scope, $window) {
  $scope.notify = function() {
    $window.notifier.notify({
      title: 'main controller',
      message: 'main ctrl message'
    });
  };
});