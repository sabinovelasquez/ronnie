'use strict';
var app = angular

	.module('app', ['ngAnimate','ui.bootstrap', 'angular-parallax'])

	.controller('gralCtrl', [ '$scope', 
		function($scope) {

			$scope.lang = 1;

		}
	])

/*
<img parallax parallax-ratio="0.4" src="some/image.jpg" />
<div parallax-background parallax-ratio="0.2"></div>
*/