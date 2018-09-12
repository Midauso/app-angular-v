angular.module('service.router', []).config(_serviceRoute)

function _serviceRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('service', {
			url: '/service',
			data : { 
				pageTitle: 'Dich vu' 
			},
			views: {
				"@": {
					controller: 'ServiceController',
					templateUrl: '/views/service.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
