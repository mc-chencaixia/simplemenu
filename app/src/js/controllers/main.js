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

angular.module('myappApp')
  	.controller('JoinCtrl', function ($scope, $timeout) {
  		var $btn = $('#J_order');  	
	    $scope.init = function(){
	    	$scope.launchMan = $scope.dinnerRoom = undefined;
	    	$scope.orderName = '';
	    	$scope.orderDinner = '';
	    	$scope.dinnerList = [];
	    	$scope.errorMsg = '';
	    	$scope.loading = false;
	    	$scope.getDate();
	    };

	    $scope.getDate = function(){
	    	$timeout(function(){
	    		$scope.launchMan = 'ccx';
	    		$scope.dinnerRoom = '味捷外卖';
	    		$scope.dinnerList = [
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
	    };	

	    $scope.updateOrderDinner = function( dinner ) {
	    	$scope.orderDinner = dinner;
	    	$scope.apply();
	    };

	    $scope.clickOrder = function(){	
	    	var ajaxData = {};  	
	    	if($btn.hasClass('disabled')){
	    		return false;
	    	}
	    	$scope.loading = true;
	    	$scope.errorMsg = '';
	    	$scope.apply();	 
	    	ajaxData = {
	    		'orderName': $scope.orderName,
	    		'orderDinner': $scope.orderDinner,
	    	};
	    	console.log(ajaxData);
	    	$timeout( $scope.orderSuc , 1000 );
	    	//$timeout( $scope.orderFail , 2000 );
	    };

	    $scope.orderSuc = function(data) {
	    	console.log('suc');
	    	$scope.loading = false;
	    }

	    $scope.orderFail = function(reason) {
	    	var reason = "网络";
	    	$scope.loading = false;
	    	$scope.errorMsg = '因为' + reason + '原因，出错了';
	    	$scope.apply();
	    }

	    $scope.apply = function() {
			if(!$scope.$$phase) {
			    $scope.$apply();
			}
		}    
  	});
