

describe("API_ENDPOINT", function(){
	var apiEndPoint;
	beforeEach(module('todoApp'));
	
	beforeEach(inject(function(API_ENDPOINT){
		apiEndPoint = API_ENDPOINT;
	}));
	
	it("should be defined", function(){
		expect(apiEndPoint).toBeDefined();
	});
	
	it("API_ENDPOINT.ROOT should be /", function(){
		expect(apiEndPoint.ROOT).toBe("/");
	});
	
	it("API_ENDPOINT.TODOS should be /", function(){
		expect(apiEndPoint.TODOS).toBe("/todos");
	});
});