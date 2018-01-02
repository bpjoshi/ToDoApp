
describe("TodoController Tests", function(){
	var scope;
	var todoCtrl;

	beforeEach(module('todoApp'));

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		todoCtrl = $controller('TodoController', {$scope: scope});
	}));
	 
	 it("should be defined", function(){
		expect(todoCtrl).toBeDefined(); 
	 });
	 
	 it("should have a findAllTodos", function(){
		expect(todoCtrl.findAllTodos).toBeDefined();
	 });
	 
	 
});