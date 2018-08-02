function user() {
    console.log("Hello! World")
}

function fullname(fname, lname) {
    console.log(fname + " " + lname)
}


module.exports.userModule = user;

module.exports.fullnameModule = fullname;