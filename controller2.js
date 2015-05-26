


sampleApp.controller('SecondeCtrl', function($scope,$rootScope,greetingSerive) {

		var secondeCtrl = this;
		secondeCtrl.valueBetweenController = greetingSerive;

		$scope.valueBetweenController=secondeCtrl.valueBetweenController.valueTo;


});