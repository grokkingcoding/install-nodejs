// this is a library within nodejs so you do not need to install anything via npm 
var http = require('http'); 

const port = 8888; 

var server = http.createServer(function(req,res) {
    res.end('Hello World!\n');     
})

server.listen(port, function() {
    console.log(`The server is listening on ${port}`); 
}); 