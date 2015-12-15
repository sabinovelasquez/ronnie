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
	.controller('instagramCtrl', [ '$scope', 'photos',
		function($scope, photos) {
			// tweets.get({
			// 	widgetId: '676261576450641920'
			// }).success(function(data) {
			// 	$scope.feed = data;
			// });
		}
	]);