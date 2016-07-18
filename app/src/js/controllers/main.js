'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('MainCtrl', function ($scope, $timeout) {
	    $scope.init = function(){
	    	$scope.launchMan = $scope.dinnerRoom = undefined;
	    	$scope.orderList = [];
	    	$scope.getDate();
	    }
	    $scope.getDate = function(){
	    	$timeout(function(){
	    		$scope.launchMan = 'ccx';
	    		$scope.dinnerRoom = '味捷外卖';
	    		$scope.orderList = [
	    			{'dinner':'马蹄鸡肉丸',
	    			'price':18,
	    			'sum':4,},
	    			{'dinner':'川香贵妃鸡（辣）',
	    			'price':22,
	    			'sum':2,},
	    			{'dinner':'咖喱鸡肉',
	    			'price':12,
	    			'sum':0,},
	    		];
	    	},1000);
	    }
	    
	    
  	});
