timesheet.controller('ProjectsControllerIndex', function() {
  var p = this;
  p.projects = [{
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam provident, at dicta quas aliquid labore itaque ut expedita voluptatem aliquam alias quis natus inventore culpa nisi incidunt nobis ipsa, dolore.',
    category: 'Example',
    tickets: []
  }];
});

timesheet.controller('ProjectsControllerShow', ['$routeParams', function($routeParams) {
  
}]);

