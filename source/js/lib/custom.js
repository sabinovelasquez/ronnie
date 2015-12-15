'use strict';
var app = angular

	.module('app', ['ngAnimate','ui.bootstrap', 'angular-parallax', 'duScroll', 'ngTweets'])

	.controller('gralCtrl', [ '$scope', 
		function($scope) {

			$scope.lang = 1;

		}
	])
	.controller('twitterCtrl', [ '$scope', 'tweets',
		function($scope, tweets) {
			tweets.get({
				widgetId: '676261576450641920'
			}).success(function(data) {
				$scope.feed = data;
			});
		}
	])
	.controller('instagramCtrl', [ '$scope', '$http',
		function($scope, $http) {
			var max = 8;
			var instagram_json = 'https://api.instagram.com/v1/users/41166289/media/recent/?client_id=8a5f05fceb2c42299239597c6ded2f8e&count='+max;
			$http.get( instagram_json )
				.success(function(response) {
					$scope.photos = response.data;
				});
			}
	]);