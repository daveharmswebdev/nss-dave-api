'use strict'

angular
	.module('app', ['ngRoute'])
	.config($routeProvider => 
		$routeProvider
			.when('/', {
				controller: 'main',
				templateUrl: 'partials/main.html'
			})
			.when('/chat', {
				controller: 'chat',
				templateUrl: 'partials/chat.html'
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
	.controller('chat', function($scope, $http) {
		$scope.sendMessage = () => {
			const msg = {
				author: 'dave',
				message: $scope.content
			}

			$http
				.post('/api/messages', msg)
				.then(() => $scope.messages.push(msg))
				.catch(console.error)
		}
		
		$http
			.get('/api/messages')
			.then(({data: { messages }} ) => {
					console.log('messages', messages)
					$scope.messages = messages
			}) 
	})