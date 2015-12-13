'use strict';
var app = angular

	.module('app', ['ngAnimate','ui.bootstrap', 'angular-parallax', 'duScroll'])

	.controller('gralCtrl', [ '$scope', 
		function($scope) {

			$scope.lang = 1;

		}
	]);