

sampleApp.controller('thirdCtrl', function($scope,$rootScope,messageFromFunction,greetingSerive) {

	$scope.messageFrom  = messageFromFunction;


	var thirdCtrl = this;
	thirdCtrl.valueBetweenController = greetingSerive;
	$scope.valueBetweenController=thirdCtrl.valueBetweenController.valueTo;

});