console.log("node 1");
console.log("node 2");

function callbackFun() {
    console.log("callback functon nodejs")
}
setTimeout(callbackFun, 3000);
console.log("node 3");
console.log("node 4");