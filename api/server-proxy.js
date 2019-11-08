var http = require('http');
var url = require('url');
var qs = require('querystring');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var httpRequest = new XMLHttpRequest();


http.createServer(function (req, res) {
  var _url = req.url;
  var pathname = url.parse(_url, true).pathname;
  console.log(pathname);
  var regex = new RegExp('streams');
  var id = pathname.replace(/[^0-9]/g,"");
  var baseURL = "http://localhost:3001/streams/";
  var route_url = ( id=="" ? baseURL : baseURL+id );

  

  if(req.method == 'GET'){
    if( regex.test(pathname)){
	  httpRequest.open("GET", route_url, false);
      httpRequest.onreadystatechange = function() { // 요청에 대한 콜백
        if (httpRequest.readyState === httpRequest.DONE) { // 요청이 완료되면
          if (httpRequest.status === 200 || httpRequest.status === 201) {
            console.log(httpRequest.responseText);  
	        res.writeHead(200, { 'Content-Type': 'text/plain' });
	        res.write('request succesfully served:'+route_url+'/n'+httpRequest.responseText);
		    res.end();
		} else {
            console.error(httpRequest.responseText);
	      res.writeHead(400, { 'Content-Type': 'text/plain' });
	      res.write('req fail:'+route_url+'/n'+httpRequest.responseText);
		  res.end();
		  }
        }
      };
      httpRequest.send(null); 
	}
  }

  if(req.method == 'POST'){
    if( regex.test(pathname)){
	  httpRequest.open("POST", route_url, false);
      httpRequest.onreadystatechange = function() { // 요청에 대한 콜백
        if (httpRequest.readyState === httpRequest.DONE) { // 요청이 완료되면
          if (httpRequest.status === 200 || httpRequest.status === 201) {
            console.log(httpRequest.responseText);  
	        res.writeHead(200, { 'Content-Type': 'text/plain' });
	        res.write('request succesfully served:'+route_url+'/n'+httpRequest.responseText);
		    res.end();
		} else {
            console.error(httpRequest.responseText);
	      res.writeHead(400, { 'Content-Type': 'text/plain' });
	      res.write('req fail:'+route_url+'/n'+httpRequest.responseText);
		  res.end();
		  }
        }
      };
      httpRequest.send(null); 
	}
  }

  
}).listen(8000);

