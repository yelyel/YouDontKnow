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

var mathModuleRefactored = (function quickMath() {
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

console.log(mathModule.add(17));  // 22
