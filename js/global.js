// Execute the following code when the page is loaded

function couponCtrl($scope) {

	$scope.currentTab = 'Free Lunch';

	$scope.couponList = [
		{type: 'meal', title: 'Free Breakfast', count: 10, detail: 'This entitles the bearer to a free, morning meal.', debtee: 'Hayden Rendos'},
		{type: 'meal', title: 'Free Lunch', count: 2, detail: 'This entitles the bearer to a free, roughly-noontime meal.', debtee: 'Hayden Rendos'},
		{type: 'meal', title: 'Free Dinner', count: 1, detail: 'This entitles the bearer to a free, evening meal.', debtee: 'Hayden Rendos'},
		{type: 'meal', title: 'A Snack', count: 1, detail: 'This entitles the bearer to a free, evening meal.', debtee: 'Hayden Rendos'}
	];

	$scope.setCurrentTab = function (tabName) {
		$scope.currentTab = tabName;
	};
}
