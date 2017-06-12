function outer(a){
    return function inner(b){
        return a + b;
    }
}

// var out = outer(9);
// console.log(out);
var out = outer(9);
//out(10);
console.log(out(10));
console.log(out(10));
// out = outer(9)(7);
//
// console.log(out);
//var out = outer(11);
//out(12)
console.log(out(15));  //24


var laterAdd = outer(10);
console.log(laterAdd(15));  //25

function newAge(){
   var age = 21;
    return function growUp(){
        return age++;
    }
}
var agePlus = newAge();
console.log(agePlus());
console.log(agePlus());
console.log(agePlus());
console.log(agePlus);
console.log(agePlus());
console.log(agePlus.age);



// function defineAge(){
//     var age = 28;
//     return function growUp(){
//         return ++age;
//     }
// }

function quickMath() {
  var a = 5;
  return {
    add: function add(b) {
      return a + b;
    },
    multiply: function multiply(b) {
      return a * b;
    }
  }
}

var myMath = quickMath();
console.log(myMath.add(5));   //10
console.log(myMath.add(10)); //15
console.log(myMath.multiply(5));  // 25

var newMath = quickMath().add(10); //10
console.log(newMath);

var mathModule = (function quickMath() {
  var a = 5;
  return {
    add: function add(b) {
      return a + b;
    },
    multiply: function multiply(b) {
      return a * b;
    }
  }
})();

console.log(mathModule.add(7));  // 12
console.log(mathModule.add(17));  // 22
console.log(mathModule.multiply(17));  //85


var mathModuleRefactored = (function() {
  var a = 5;
  function add(b) {
    return a + b;
    }
  function multiply(b) {
    return a * b;
    }
  return {
    add: add,
    multiply: multiply
  }
})();
console.log(mathModuleRefactored.multiply(17));  //85



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
