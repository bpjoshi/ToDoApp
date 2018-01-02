app.constant("API_ENDPOINT",(function(){
	var root_endpoint = "";
	
	return {
		ROOT : root_endpoint + "/",
		TODOS : root_endpoint + "/todos"
	};
})());