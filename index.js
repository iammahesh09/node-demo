const http = require('http');


var anonymousFun = function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plan"
    })
    res.write("Hello HTTP NodeJS");
    res.end();
}

http.createServer(anonymousFun).listen(5000);