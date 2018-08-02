const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plan"
    })
    res.write("Hello NodeJS");
    res.end();
}).listen(5000);