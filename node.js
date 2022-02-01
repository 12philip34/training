const http = require("http")
  const fs = require("fs")

const port = 8000
http.createServer(function (request, response) {

    response.writeHead(200,{"content-type":"text/html"});
    var url =request.url;

    if(url ==="/") {

        response.writeHead(200,{"content-type":"text/html"});

        var file = fs.createReadStream("api.html");
        file.pipe(response);
    }
})
.listen(port, function (){
    console.log("server start at port 8000");
});