'use strict'

angular
	.module('app', ['ngRoute'])
	.config($routeProvider => 
		$routeProvider
			.when('/', {
				controller: 'main',
				templateUrl: 'partials/main.html'
			})
	)
	.controller('main', function($scope, $http) {
		$http
			.get('/api/title')
			.then(({data: { title }}) => {
				console.log('title:', title)
				$scope.name = title 
		})
	})