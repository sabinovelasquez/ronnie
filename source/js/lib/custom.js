'use strict';

function processTweetLinks(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    text = text.replace(exp, "<a href='$1' target='_blank'>$1</a>");
    exp = /(^|\s)#(\w+)/g;
    text = text.replace(exp, "$1<a href='https://twitter.com/search?q=%23$2' target='_blank'>#$2</a>");
    exp = /(^|\s)@(\w+)/g;
    text = text.replace(exp, "$1<a href='https://www.twitter.com/$2' target='_blank'>@$2</a>");
    return text;
}

var app = angular

	.module('app', ['ngAnimate','ui.bootstrap', 'angular-parallax', 'duScroll', 'ngTweets'])
	.filter('linky', function ($sce) {
		return function (str) {
			var tweet = processTweetLinks(str);
			return $sce.trustAsHtml(tweet);
		}
	})
	.controller('gralCtrl', [ '$scope', '$document', 
		function($scope, $document) {
			$scope.head = false;
			$scope.lang = 1;
			$document.on('scroll', function() {
				if( $document.scrollTop() > 330 ){
					$scope.head = true;
				}else{
					$scope.head = false;
				}
				$scope.$apply();
			});
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
			var instagram_json = 'https://api.instagram.com/v1/users/41166289/media/recent/?client_id=8a5f05fceb2c42299239597c6ded2f8e&count=8&callback=JSON_CALLBACK'
			$http.jsonp( instagram_json )
				.success(function(response) {
					$scope.photos = response.data;
				});
			}
	]);

