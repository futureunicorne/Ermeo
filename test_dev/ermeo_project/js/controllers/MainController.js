
app.controller('mainCtrl', function($scope, $http) {
		$http({
			method: 'GET',
			url: 'https://api.themoviedb.org/3/authentication/token/new?api_key=4b5769d9c114b4c008e50bc35c1d64f8'
		}).success(function(data){
			$scope.objets = data;
			console.log(data);
		}).catch(function(response) {
			console.log('response', response);
		});
});
