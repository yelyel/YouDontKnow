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


sayHi("Matt"); // "Hello Matt"

function sayHi(name){
    return console.log("Hello " + name);
}

// sayHi() // ?
//
// sayHi() // ?
//
// var sayHi = function(){
//     return 'Hi!';
// }

console.log(sayHi()); // ?

console.log("   ");
console.log("=========     EXERCISES     ========");
console.log("   ");

function difference(a, b) {
  return console.log(a - b);
}

function product(a, b) {
  return console.log(a * b);
}
difference(2,2); // 0
difference(0,2); // -2

product(2,2); // 4
product(0,2); // 0

function printDay(a) {
  var weekday = [];
  weekday[0] =  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  if (1 <= a <= 7) {

    return console.log(weekday[a - 1]);
  }
}

printDay(4); // "Wednesday"
printDay(41); // undefined

function lastElement(arr) {
  return console.log(arr[arr.length - 1]);
}

lastElement([1,2,3,4]); // 4
lastElement([]); // undefined

function numberCompare(f, g) {
  if ( f == g) {
    return console.log(" numbers equal ");
  } else if (f > g) {
    return console.log(" first greater ");
  }
  return console.log(" first smaller ");
}

numberCompare(1,1); // "Numbers are equal"
numberCompare(2,1); // "First is greater"
numberCompare(1,2); // "Second is greater"

function singleLetterCount(str, letter) {
  var count = 0;
  for (var i = 0 ; i < str.length; i++) {
    if (str[i].toUpperCase() === letter.toUpperCase()) {
      count++;
    }
  }
  return console.log(count);
}


singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2


function multipleLetterCount(str) {
  var arr = [];
  for (var i = 0 ; i < str.length; i++) {
    if (str[i] in arr) {
      arr[str[i]]++;
    } else {
      arr[str[i]] = 1;
    }
  } return console.log(arr);
}

// function multipleLetterCount(str){
//   var finalObj = {};
//   for(var i =0; i< str.length; i++){
//     if (!(str[i] in finalObj)){
//       finalObj[str[i]] = 1;
//     } else {
//       finalObj[str[i]]++;
//     }
//   }
//   return console.log(finalObj);
// }

multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}


function arrayManipulation(arr, comm, place, num) {
  if (comm == "remove") {
    if (place == "end") {
      return console.log(arr.pop());
    }
    return console.log(arr.shift());

  } else if (comm == "add") {
    if (place == "end") {
      arr.push(num);
      return console.log(arr);
    }
    arr.unshift(num);
    return console.log(arr);
  }
}


arrayManipulation([1,2,3], "remove", "end"); // 3
arrayManipulation([1,2,3], "remove", "beginning"); // 1
arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]

function isPalindrome(str) {
    var revstr = str.split("").reverse().join("");
    return console.log(revstr == str);
}

isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome('hannah'); // true
isPalindrome('robert'); // false

function stonePaperSissor(val) {
  var val = val.toLowerCase();
  var choices = ["scissor", "paper", "stone"];
  var choice = choices[Math.floor(Math.random()*(2 - 0 + 1))];
  //var choice = "scissor";
  console.log("choice : " + choice);
  if ( val == choice) {
    return console.log(" NO Winner !  ");
  }
  if (val === "paper" && choice === "scissor") {
    return console.log("you LOOSE !!  ");
  }
  if (val === "stone" && choice === "paper") {
    return console.log("you LOOSE !!  ");
  }
  if (val === "scissor" && choice === "stone") {
    return console.log("you LOOSE !!  ");
  } else {
    return console.log("you WIIINNNNN !!  ");
  }
}
stonePaperSissor("scissor");
