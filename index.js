// function user(firstname, lastname) {
//     console.log(firstname + " " + lastname);
// }

// function person(username, fname, lname) {
//     username(fname, lname);
// }
// person(user, "Mahesh", "Ch");

var user = function (firstname, lastname) {
    console.log(firstname + " " + lastname);
}

function person(username, fname, lname) {
    username(fname, lname);
}
person(user, "Mahesh", "Ch");