myApp.factory("myFactory", function($http, $q){
		var factory = {
			posts : false,
			getPosts : function() {
				var d = $q.defer();
				$http.get("main.json")
				    .then(function(response) {
				     factory.posts = response.data;
					 d.resolve(factory.posts);
				 });
			    return d.promise;
			},
			getPost: function(id) {
				var post = {};
				angular.forEach(factory.posts, function(value, key) {
					if (value.id == id) {
						post = value;
					}
				});
				return post;
			},
		}
		return factory;
});

myApp.controller("PostController", function($scope, myFactory, $routeParams){
		var post = myFactory.getPost($routeParams.id)
});

myApp.controller("MainController", function($scope, myFactory){
		$scope.posts = myFactory.getPosts().then(function(posts){
			$scope.posts = posts;
		}, function(msg) {
			alert(msg);
		})
		$scope.addFunCol = function(){
			$scope.newElm = {};
			$scope.newElm.id = $scope.posts.length;
			$scope.posts.push($scope.newElm);
		},
		$scope.delFunCol = function(){
			$scope.posts.splice($scope.newElm, 1);
		}
});