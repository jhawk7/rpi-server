var http = require("http");
var handlers = require("./rpi-handlers");

var server = http.createServer(function(request,response){
	var headers = request.headers;
	var method = request.method;
	var url = request.url;

	if (url === "/") {
		handlers.homepage(request,response);
	} else if (url === "/creator") {
		handlers.creator(request,response);
	} else {
		handlers.notFound(request,response);
	}

});

server.listen(8888);