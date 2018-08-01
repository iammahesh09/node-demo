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