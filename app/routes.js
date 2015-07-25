timesheet.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/welcome/index.html',
      controller: 'WelcomeController'
    })
    .when('/projects', {
      templateUrl: 'app/views/projects/index.html',
      controller: 'ProjectsControllerIndex'
    })
    .when('/projects/:id', {
      templateUrl: 'app/views/projects/show.html',
      controller: 'ProjectsControllerShow'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
