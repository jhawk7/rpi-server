var http = require("http");

var server = http.createServer(function(request,response){
	var headers = request.headers;
	var method = request.method;
	var url = request.url;

	if (url === "/") {
		response.setHeader("Content-Type", "text/html");
		response.end("<h1>Hello from raspi server<h1>");
	} else if (url === "/creator") {
		var creator = {
			name : "Jarel",
			age : 25
		};
		response.setHeader("Content-Type", "application/json");
		response.end(JSON.stringify(creator));
	}

});

server.listen(8888);