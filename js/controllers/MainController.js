myApp.factory("myFactory2", function($http, $q){
		var factory = {
			posts : false,
			getPosts : function() {
				var d = $q.defer();
				$http.get("post.json")
				    .then(function(response) {
				     factory.posts = response.data;
					 d.resolve(factory.posts);
				 });
				return d.promise;
			}
		}
		return factory;
});

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
			}
		}
		return factory;
});

myApp.controller("MainController", function($scope, myFactory2){
		$scope.lines = myFactory2.getPosts().then(function(lines){
			$scope.lines = lines;
		}, function(msg) {
			alert(msg);
		})
		$scope.addFunCol = function(){
			$scope.newElm1 = {};
			$scope.newElm1.id = $scope.lines.length + 1;
			$scope.lines.push($scope.newElm1);
		},
		$scope.delFunCol = function(){
			var i = $scope.lines.length - 1;
			$scope.lines.splice(i, 1);
		}
});

myApp.controller("PostController", function($scope, myFactory){
		$scope.posts = myFactory.getPosts().then(function(posts){
			$scope.posts = posts;
		}, function(msg) {
			alert(msg);
		})
		$scope.addFuncLine = function(){
			$scope.newElm = {};
			$scope.newElm.id = $scope.posts.length + 1;
			$scope.posts.push($scope.newElm);
		},
		$scope.delFuncLine = function(){
			var i = $scope.posts.length - 1;
			$scope.posts.splice(i, 1);
		}
});