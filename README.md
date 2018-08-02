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