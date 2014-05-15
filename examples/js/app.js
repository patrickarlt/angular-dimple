angular.module('myApp', [
  'angular-dimple',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/line-graph', {
    templateUrl: 'partials/line-graph.html',
    controller: 'lineGraphController'
  })

  .when('/stacked-area', {
    templateUrl: 'partials/stacked-area.html',
    controller: 'stackedAreaController'
  })

  .otherwise({
    redirectTo: '/line-graph'
  });

}]);