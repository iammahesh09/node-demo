## NodeJs

## How to run nodejs

    - first create js file
    - run "$ node index.js"


## Anonymous Function

    Anonymous functions are functions that are dynamically declared at runtime. They’re called anonymous functions because they aren’t given a name in the same way as normal functions.

    Ex-1
    ----
        function user(name){
            console.log(name)
        }

        function person(username, val){
            username(val)
        }
        person(user, "Hello World")

    Ex-2
    ----
        function fullname(firstname, lastname) {
            console.log(firstname + " " + lastname);
        }

        function person(username, fname, lname) {
            username(fname, lname);
        }
        person(fullname, "Mahesh", "Ch");



    Ex-3
    ----
        var user = function (firstname, lastname) {
            console.log(firstname + " " + lastname);
        }

        function person(username, fname, lname) {
            username(fname, lname);
        }

        person(user, "Mahesh", "Ch");


    #argument to other functions

        setTimeout(function() {
            alert('hello');
        }, 1000);


## Global Objects and Timers

    $ __dirname

        console.log("Dir Path : " + __dirname);
            //Dir Path : C:\xampp\htdocs\nodejs-practice

    $ __filename

        console.log("File Name : " + __filename);
            //File Name : C:\xampp\htdocs\nodejs-practice\index.js
    

    $ setInterval(callback, delay[, ...args])


    $ clearInterval(intervalObject)


    $ setTimeout(callback, delay[, ...args])


    $ clearTimeout(timeoutObject)


    Others
    ------

        $ Console

        console.log([data][, ...])

        console.info([data][, ...])

        console.error([data][, ...])

        $ exports

            A reference to the "module.exports" that is shorter to type. See the section about the exports shortcut for details on when to use exports and when to use "module.exports".

        $ require()

            To require modules.

## Callback functions

    A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

        console.log("node 1");
        console.log("node 2");

        function callbackFun() {
            console.log("callback functon nodejs")
        }
        setTimeout(callbackFun, 3000);
        console.log("node 3");
        console.log("node 4");


## Modules

    Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application.

    Node.js includes three types of modules:

       - Core Modules
       - Local Modules
       - Third Party Modules

    # Node.js Core Modules

        Node.js is a light weight framework. The core modules include bare minimum functionalities of Node.js. These core modules are compiled into its binary distribution and load automatically when Node.js process starts. However, you need to import the core module first in order to use it in your application.

 
        Core Module	Description
            http    -	http module includes classes, methods and events to create Node.js http server.

            url     -   url module includes methods for URL resolution and parsing.

            querystring -	querystring module includes methods to deal with query string.

            path    -   path module includes methods to deal with file paths.

            fs      -   fs module includes classes, methods, and events to work with file I/O.

            util    -	util module includes utility functions useful for programmers.


            #Loading Core Modules

            In order to use Node.js core or NPM modules, you first need to import it using require() function as shown below.

                var module = require('module_name');

            As per above syntax, specify the module name in the require() function. The require() function will return an object, function, property or any other JavaScript type, depending on what the specified module returns.

            The following example demonstrates how to use Node.js http module to create a web server.

            Example: 
                
                Load and Use Core http Module

                var http = require('http');

                var server = http.createServer(function(req, res){

                //write code here

                });

                server.listen(5000); 


                In the above example, require() function returns an object because http module returns its functionality as an object, you can then use its properties and methods using dot notation e.g. http.createServer().

                In this way, you can load and use Node.js core modules in your application. We will be using core modules throughout these tutorials.

                Learn about local modules in the next section.


## HTTP Module

    http module includes classes, methods and events to create Node.js http server.

        https://nodejs.org/api/http.html

        const http = require('http');

        http.createServer(function (req, res) {
            res.writeHead(200, {
                "Content-Type": "text/plan"
            })
            res.write("Hello NodeJS");
            res.end();
        }).listen(5000);

        