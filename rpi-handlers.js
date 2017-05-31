exports.homepage = function(request,response){
	response.setHeader("Content-Type","text/html");
	response.end("<h1> Hello from Raspberry pi! </h1>");
}

exports.creator = function(request,response){
	var creator = { 
		name : "Jarel", 
		age : 25,
	};
	response.setHeader("Content-Type","application/json");
	response.end(JSON.stringify(creator));
}

exports.notFound = function(request,response){
	response.statusCode = 404;
	response.setHeader("Content-Type","text/html");
	response.end("<h1>Page not found.. <br /> <span>\\\_(^__^)_/</span> </h1>");
}