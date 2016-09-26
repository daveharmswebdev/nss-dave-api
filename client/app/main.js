'use strict'

angular
	.module('app', [])
	.controller('main', function($scope, $http) {
		$http
			.get('/api/title')
			.then(({data: { title }}) => {
				console.log('title', title)
				$scope.name = title 
		})
	})