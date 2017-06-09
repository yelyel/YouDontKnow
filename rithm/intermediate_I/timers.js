// var timerId = setInterval(function(){
//     console.log("Hello!");
// },1000);
//
// setTimeout(function(){
//     clearTimeout(timerId);
// },11000);

console.log("first");
setTimeout(function(){
    console.log("second");
},0);
console.log("third");

    // the first log function goes on the stack, prints out "first," and then it goes off,
    // a message is sent to the queue to log "second" in 0 milliseconds
    // during that time, another log function comes on the stack and prints out "third"
    // now the stack is clear so the callback to the setTimeout goes on the stack and "second" is printed

function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7));
