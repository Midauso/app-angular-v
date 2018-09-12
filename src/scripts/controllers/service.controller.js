angular.module('service.controller', []).controller("ServiceController", _serviceController)

function _serviceController($scope, $http) {
	$http({
		method: 'GET', // POST, PUT, DELETE
		url: 'https://www.w3schools.com/angular/customers.php',
	}).then(function (response) {
		$scope.data = eval(response.data.records);
	}, function (error) {
		console.log('Lỗi 003 - Service: ' + error);
	});
}
