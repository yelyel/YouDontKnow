var arr = [5,4,3,2,1];
var poppedVal = arr.pop();
console.log(arr);
console.log(poppedVal);


function firstFunction(){
    console.log("I just wrote my first function!");
}

console.log(firstFunction());

console.log("====== Exercises ================");
console.log("  ");
function myName() {
  console.log("Yel Koch");
}

myName();  // Yel Koch

var favoriteFoods = ["pizza", "icecream"];

// function randomFood()  {
//   if (Math.random() > .5) {
//     return console.log(favoriteFoods[0]);
//   }
//   return console.log(favoriteFoods[1]);
// }

function randomFood()  {
  return Math.random() > .5 ?  console.log(favoriteFoods[0]) : console.log(favoriteFoods[1]);

}
randomFood();


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function displayOdds(num)  {
//   for (var i = 0; i < num.length; i++) {
//     if (i % 2 == 0) {
//       console.log(num[i]);
//     }
//   }
// }
//
// displayOdds(numbers);

// function displaySecondHalf(num)  {
//   for (var i = 0; i < num.length; i++) {
//     if ( i >= num.length / 2) {
//         console.log(num[i]);
//         }
//       }
// }

function displaySecondHalf(num)  {
  return num.slice(num.length / 2);
}

console.log(displaySecondHalf(numbers));


// Function parameters and scope
console.log("  ");
console.log("====== Exercises par & Scope ================");
console.log("  ");

var num1 = 3;
var num2 = 7;

function add(a, b) {
  console.log(a + b);
}

function subtract(a, b) {
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}

function divide(a, b) {
  console.log(a / b);
}

add(num1, num2);
subtract(num1, num2);
multiply(num1, num2);
divide(num1, num2);

function sayHello(name) {
  console.log("Salut " + name);
}

sayHello("Fritz");


function average(nums) {
  var j = 0 ;
  for (var i = 0; i < nums.length; i++) {
    j = j + nums[i];
  } console.log(j / nums.length);
}

average(numbers);


function createMember(first, last) {
  return {
    firstName : first,
    lastName : last
  }
}

var tim = createMember("Tim", "Cook");
var fritz = createMember("Fritz", "Blatter");
var yel = createMember("Yel", "Cool");

var members = [tim, fritz, yel];

function findMemByFirstName(first, mems) {
  firstLow = first.toLowerCase();
  for (var i = 0; i < mems.length; i++) {
    if (mems[i].firstName.toLowerCase() == firstLow ) {
      return true;
    }
  } return false;
}

console.log(findMemByFirstName("yel", members));


function extractEveryThird(values) {
  var newValues = [];
  for (var i = 2; i < values.length; i += 3) {
          newValues.push(values[i]);
      } return newValues;
}

console.log(extractEveryThird([1,2,3]));
console.log(extractEveryThird([1,2,3,4,5,6]));
console.log(extractEveryThird(["a","b","c","d"]));
console.log(extractEveryThird(["first value", "second value", "third value"]));

function countEvensAndOdds(arr) {
  var count = {
    oddCount : 0,
    evenCount : 0
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    count.evenCount++;
  } else {
    count.oddCount++;
    }
  }
  return count;
}
console.log(countEvensAndOdds([1,2,3,4]));
console.log(countEvensAndOdds([1,2,3,9,5,6,7]));

var myVar = "Hello from global";

function scopePractice() {
   var myVar = "Hello from function scope";
}

scopePractice();
console.log(myVar); // ""from function"

var tricky = "Hello from global";

function trickyScopePractice() {
    tricky = "Hello from function scope";
}
trickyScopePractice();
console.log(tricky); // from functiomn

function onlyCaps(str) {
  var caps = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      caps += str[i];
    }
  }
  console.log(caps);
}

onlyCaps("Amazing");
onlyCaps("nothing");
onlyCaps("EVERYTHING");

console.log("   ");
console.log("=============Anonymous Functions and IIFEs    ==========");
console.log("   ");

function declaredFunction(){
    return "I am a function declaration!";
}
var expression = (function(){
    return "I am a function expression!";
})();

console.log(expression);


var personel = (function() {
  return {
    name : "Yel",
    famName : "Cook"
  };
})();

console.log(personel.famName);


var personObject = (function  invokeRightAway() {
  var person = "Ello";
  return {
    getName : function() {
      return person;
    },
    setName : function(newName) {
      return person = newName;
    }
  }
})();


console.log(personObject.person);

console.log("wieso gibt das hier undefined  und bei nur 'person' gibts reference Error ??????? ");

console.log(personObject.getName());

console.log(personObject.setName(" i and I "));

console.log(personObject.getName());

console.log("   ");
console.log("=========Anonymous Functions and IIFEs  EXERCISES  ========");
console.log("   ");

(function displayName(firstName, lastName) {
  console.log(firstName + " " + lastName);
})("Karl", "Schranz");

function createCalculator() {
  //var result;
  return {
    add : function(a,b) {
      return a + b;
    },

    subtract : function(a,b) {
      return a - b;
    },
    multiply : function(a,b) {
      return a * b;
    },
    divide : function(a,b) {
      return(a / b);
    }
  };
}

var calc = createCalculator();

console.log(calc.add(20,20));
console.log(calc.subtract(2,2));
console.log(calc.multiply(2,2));
console.log(calc.divide(12,2));

console.log("   ");
console.log("========= Hoisting  ========");
console.log("   ");

var instructor;
console.log(instructor); // this will NOT throw an error!
instructor = "Elie";


// sayHi("Matt"); // "Hello Matt"
//
// function sayHi(name){
//     return console.log("Hello " + name);
// }

sayHi() // ?

sayHi() // ?

var sayHi = function(){
    return 'Hi!';
}

console.log(sayHi()); // ?
