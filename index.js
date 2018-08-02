const http = require('http');
const event = require('events');

const eventEmitter = new event.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}
var anonymousEventHandler = function (name) {
    console.log(name);
}

//Assign the event helloEvent to an event:
eventEmitter.on('helloEvent', myEventHandler);

eventEmitter.on('nameEvent', anonymousEventHandler);

//Fire the 'helloEvent' event:
eventEmitter.emit('helloEvent');

eventEmitter.emit('nameEvent', "Mahesh");




var anonymousFun = function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plan"
    })
    res.write("Hello HTTP NodeJS");
    res.end();
}

http.createServer(anonymousFun).listen(5000);