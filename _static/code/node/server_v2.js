var http = require("http");

function start_http(text) {
  function onRequest(request, response) {
      console.log("Request received.");
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Biicode rocks!");
      response.write(text);
      response.end();
    }

  http.createServer(onRequest).listen(8888);
  console.log("Server v2 has started.");
}

exports.start_http = start_http
