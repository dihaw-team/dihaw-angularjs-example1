


sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/default', {
        templateUrl: 'first.html',
        controller: 'FirstCtrl'
    }).      
      when('/secondePage', {
        templateUrl: 'seconde.html',
        controller: 'SecondeCtrl' 
      }).
      when('/thirdPage', {
        templateUrl: 'third.html',
        controller: 'thirdCtrl' ,
        resolve: {
                    messageFromFunction: checkRouting
                }        
    }).      
      otherwise({
        redirectTo: '/'
      });
}]);

