console.log();
console.log("======   EXERCISES  ========");
console.log();


function createCounter() {
  var count = 0;
  return function() {
    return count++;
  }
}

counter_1 = createCounter();
console.log(counter_1());
console.log(counter_1());
console.log(counter_1());
console.log(counter_1());
counter_2 = createCounter();
console.log(counter_2());
console.log(counter_2());
console.log(counter_1());
console.log(counter_1());


// function down(secsToLaunch) {
//
//   if (secsToLaunch <= 0) {
//     console.log("DONE");
//     clearInterval(timer);
//   } else {
//     console.log(secsToLaunch);
//   }
// }
// setInterval(down(5), 1000);

// function countDown(secsToLaunch)  {
//   for (var i = 0; i <= secsToLaunch; i++) {
//     if (i === secsToLaunch) {
//       console.log("DONE");
//     } else {
//       setInterval(function(){console.log(i)}, 1000);
//     }
//
//   }
// }

console.log();
function countDown(time){
  var timer = setInterval(function(){
    console.log(time);
    --time;
    console.log(time);
    if(time <= 0){
      clearInterval(timer);
      console.log('DONE!');
    }
    else {
      console.log(time);
    }

  },1000)
}
//countDown(5);
var test = 10;
--test;
console.log("test jetzt = " + test);

console.log();

function randomGame() {
  var times = 0;
  var timer = setInterval(function() {
    times++;
    rand = Math.random();
    if (rand > .75) {
      console.log("YOU LOST !! it took " + times + " times");
      clearInterval(timer);
    }
    else {
      console.log(times);
    }
  }, 1000);
}
//randomGame();

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(120)); // true
console.log(isEven(121)); // false


function isOdd(num) {
  return num % 2 !== 0;
}


console.log(isOdd(120)); // false
console.log(isOdd(121)); // true

function isOdd(num) {
  return num % 2 !== 0;
}

function isPrime(num) {
  var result = true;
  for (var i = 2; i < num; i++) {

    if (num % i === 0) {
      result = false;
      //console.log(i);
      break;
    }
  }
  console.log(i);
  return result;
}
console.log();

console.log(isPrime(49));  // true
console.log(isPrime(146));  // false

// function numberFact(num, fn) {
//   return fn(num);
// }

function numberFact(num, fn){
  return fn(num);
}
console.log();
console.log(numberFact(49, isEven)); //false
console.log(numberFact(49, isOdd)); //true
console.log(numberFact(49, isPrime)); //false


function find(arr, fn)  {
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      return arr[i];
      //break;
    }
  }
}

console.log();
console.log(find([8,11,4,27], function(val){return val >= 10})); // 11
console.log(find([8,11,4,27], function(val){return val === 5})); // undefined


function findIndex(arr, fn)  {
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      return i;
      //break;
    }
  }
}

console.log();
console.log(findIndex([8,11,4,27], function(val){return val >= 10})); // 1
console.log(findIndex([8,11,4,27], function(val){return val === 5})); // undefined


function specialMultiply(a,b) {
  if (arguments.length === 1) {
    return function(b) {
    return a * b;
    }
  } return a * b;
}
console.log();
console.log(specialMultiply(3,4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // returns a function


var multi = specialMultiply(3);
var multi2 = multi(4);
console.log(multi2);
