app.controller("TodoController", function(TodoService){
	var self = this; 
	self.todos = [];
	self.todo = {};
	self.editMode = false;
	
	self.findAllTodos = function(){
		TodoService.findAllTodos().then(function(data){
			self.todos = data;
		});
	};
	
	self.addTodo = function(){
		TodoService.addTodo(self.todo).then(function(data){
			self.findAllTodos();
		});
		
		self.todo = {};
	};
	
	self.deleteTodo = function(id){
		TodoService.deleteTodo(id).then(function(data){
			self.findAllTodos();
		});
	};
	
	self.editTodo = function(todo){
		TodoService.updateTodo(todo).then(function(data){
			self.findAllTodos();
		});
		self.editMode = false;
	};
	
	self.setCompleted = function(todo){
		todo.completed = !todo.completed;
		TodoService.updateTodo(todo).then(function(data){
			self.findAllTodos();
		});
	}
	
	self.findAllTodos();
});