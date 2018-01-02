app.service("TodoService",function($http, API_ENDPOINT){
	this.findAllTodos = function(){
		return $http.get(API_ENDPOINT.TODOS).then(function(response) {
			return response.data;
		}, function(errResponse) {
			console.log("An exception occured", errResponse);
			return errResponse;
		});
	}
	
	this.addTodo = function(todo){
		return $http.post(API_ENDPOINT.TODOS, todo).then(function(response) {
			return response.data;
		}, function(errResponse) {
			console.log("An exception occured", errResponse);
			return errResponse;
		});
	}
	
	this.deleteTodo = function(id){
		return $http.delete(API_ENDPOINT.TODOS + "/" + id).then(function(response) {
			return response.data;
		}, function(errResponse) {
			console.log("An exception occured", errResponse);
			return errResponse;
		});
	}
	
	this.updateTodo = function(todo){
		return $http.put(API_ENDPOINT.TODOS + "/" + todo.id, todo).then(function(response) {
			return response.data;
		}, function(errResponse) {
			console.log("An exception occured", errResponse);
			return errResponse;
		});
	}
});