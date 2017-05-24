var a ;
console.log(typeof( a ));


var favoriteFood = "pizza";
var fvo = favoriteFood;

if(fvo === "pizza") {
    console.log("Woah! My favorite food is pizza too!");
} else {
    console.log("That's cool. My favorite food is pizza.");
}


console.log(!!null);
console.log(false === 0);

console.log("-----------------");

console.log( 2 == "2" );       // true
console.log( 2 === 2 );       // true
console.log( 10 % 3 );         // 1
console.log( 10 % 3 === 1 );       // true
console.log( true && false  );       // false
console.log( true || false  );       // true
console.log( false || true  );       // true

console.log("-----------------");

var isLearning ;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}

console.log("-----------------");

var firstVariable;
var secondVariable = "";
var thirdVariable = 1;
var secretMessage = "Shh!";
console.log(firstVariable);  //  undefined
console.log(typeof (secondVariable ));  //  undefined


num = Math.random();

if (num > 0.5 ) {
  console.log("grösser als 0.5");
} else {
  console.log("kleiner als 0.5");
}
console.log(num);


console.log("-----------------");

if(firstVariable){
    console.log("first");
} else if(firstVariable || secondVariable){
    console.log("second");
} else if(firstVariable || thirdVariable){
    console.log("third");
} else {
    console.log("fourth");
}
console.log("-----------------");

// Array Basics

var arr =[1,2,3]
console.log(arr.push(10));  //    4
console.log(arr[3]);




// Array Basics ecxercices

var favoriteFoods = ["mango", "tartar", "tuna", "fish"];

console.log(favoriteFoods[1]);  // tartar

favoriteFoods.splice(3,1,"lemon");

console.log(favoriteFoods);  // "mango", "tartar", "tuna", "lemon"

var formerFavoriteFoods = favoriteFoods.splice(0,1);

console.log(formerFavoriteFoods);  // "mango"

favoriteFoods.push("whisky");

console.log(favoriteFoods);

favoriteFoods.unshift("negroni");

console.log(favoriteFoods);


var emptyArray =[];
console.log(emptyArray.pop());

var exArray = [10,-10,-5,-3,2,1];

console.log(exArray.splice(0,4,10,9,8,7,6,5,4,3));   // [ 10, -10, -5, -3 ]


console.log(exArray); //  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log("-----------------");

//Array Methods

// exercises

var arr = [];
arr.push("Yel");
arr.push("Cook");
arr.unshift("yellow")

console.log(arr);

arr.shift();

console.log(arr);

var arr2 = [];
arr2.push(13);
arr2.push("Javascript");

console.log(arr2);

console.log(arr2.indexOf(13));

var combinedArray = [arr, arr2];

console.log(combinedArray);

var arr_2 = ["JavaScript", "Python", "Ruby", "Java"];

console.log(arr_2.slice(1,3));

arr_3 = ["Haskell", "Clojure"];

arr_2 = arr_2.concat(arr_3);


console.log(arr_2);   // ["JavaScript", "Python", "Ruby", "Java", "Haskell", "Clojure"];

console.log(arr_2.slice(0,4));

console.log("-----------------");

// Array Iteration

for(var i = 0; i <= 5; i++){
    console.log(i);
}
console.log("----------");
var decimals = [1.1, 1.6, 2.8, 0.4, 3.5, 1.6];
/*
for (var i = 0; i < decimals.length; i++) {
  decimals[i] = Math.round(decimals[i]);
  console.log(decimals[i]);
}


var i = 0;
while (i < decimals.length) {
  decimals[i] = Math.round(decimals[i]);
  console.log(decimals[i]);
  i++;

}
*/
var i = 0;
do {
  decimals[i] = Math.round(decimals[i]);
  console.log(decimals[i]);
  i++;
} while (i < decimals.length )



for(var i = 0; i<5; i++){
    num = Math.random();
    if(num > 0.5){
        console.log(num);
        console.log("Breaking out of the loop when i is " + i);
        break;
    }
    else {
        console.log(num);
        console.log(i);
    }
}

var me = "me, myself and I";
meSplitLetter = me.split("");
console.log(meSplitLetter);
meWords = me.split(" ");
console.log(meWords);

console.log("---------");


////// exercises
var people = ["Greg", "Mary", "Devon", "James"];
for (var i = 0; i < people.length; i++) {
  console.log(people[i]);
}

people.shift();

console.log(people);

people.pop();

console.log(people);

people.unshift("Matt");

console.log(people);

people.push("Yel");

console.log(people);

for (var i = 0; i < 2; i++) {
  console.log(people[i]);
}

var lessPeople = people.slice(2);
console.log(lessPeople);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Flo"));

console.log(people);

people = ["Greg", "Mary", "Devon", "James"];

console.log(people);

people.splice(2, 1, "Liz", "Artie");

console.log(people);

var withBob = people.concat("Bob");

console.log(withBob);


console.log("-----------------");
