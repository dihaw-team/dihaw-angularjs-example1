



sampleApp.controller('FirstCtrl', function($scope,$rootScope,greetingSerive) {

		var firstCtrl = this;
		firstCtrl.valueBetweenController = greetingSerive;
		firstCtrl.valueBetweenController.valueTo= "Value From First Controller";

		$scope.valueBetweenController=firstCtrl.valueBetweenController.valueTo;

});

