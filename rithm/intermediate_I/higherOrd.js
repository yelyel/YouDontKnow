function sendMessage(message, fn) {
  return fn(message);
}
sendMessage("Hello World", console.log);


sendMessage("Hello World", function(message){
    // message refers to the string "Hello World"
    console.log(message + " from a callback function!");
});  // Hello World from a callback function!


function each(arr, fn){
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

each([1,2,3,4], console.log);

function map(arr, fn) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], 2));
  }
  console.log(newArr);
}
function add(a, b) {
  return a + b;
}

map([1,2,3,4], add);

function reject(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i]) == false) {
      newArr.push(arr[i]);
    }
  } console.log(newArr);
}

function maxTwo(val) {
  return val > 2;
}
function mod(val) {
  return val % 2 === 0;
}

reject([1,2,3,4], maxTwo);

reject([2,3,4,5], mod);
