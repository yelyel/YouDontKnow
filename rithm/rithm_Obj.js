/// Objects BAsics

var firstObj = {
    firstName: "Tim",
    lastName: "Garcia",
    isInstructor: true
};

console.log(firstObj.lastName);


var obj = {};
var person = "Tom";

obj[person] = "This is a person";
obj[1+1+1] = "Three";

obj;

console.log(obj[3]);
console.log(obj.Tom);

var idToName = {
    t754: "Tim",
    843: "Matt",
    921: "Janey",
    192: "Elie"
};

console.log(idToName.t754);  /// "Tim"
//console.log(idToName.843);  /// ERROR  !!

console.log(idToName["843"]);    // "Matt"


//  Exercises

var obj = {
  firstName: "Yel",
  lastName: "Koch",
  occupation: false
};

console.log(obj);

console.log(obj["occupation"]);
console.log(obj.lastName);

obj.hobby = true;

console.log(obj.hobby);

// dot notation only works with fixed denotations -- > when we know the key
// Bracket notation also works with variables --> the key might be a variable and not a simple string


// Object iteration

var obj = {
    firstName: "Elie",
    lastName: "Schoppik",
    favoriteColor: "purple",
    job: "instructor",
    isDeveloper: true
};

if ("firstName" in obj) {
  console.log("YEAH !!");
} else {
  console.log("NOPE !!!");
}

if ("Schoppik" in obj) {
  console.log("YEAH !!");
} else {
  console.log("NOPE !!!");
}

console.log("===============================");

for ( var whatKey in obj) {
  console.log(obj[whatKey]);
}

console.log("===============================");


// Exercisese

var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

namesAndHobbies.yel = "irgendwas";
var objKeys = Object.keys(namesAndHobbies);


console.log(objKeys);

for (var i = 0; i < objKeys.length; i++) {
  console.log(objKeys[i] + " => " + namesAndHobbies[objKeys[i]]);

}

if ("yel" in namesAndHobbies ) {
  console.log("it is in !!!");
}

// Object Exercisese

console.log("===============================");
console.log(" ");
var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");
console.log(programming.languages);

programming.difficulty = 7;

console.log(programming.difficulty);

delete programming.jokes;



programming.isFun = true;

console.log(programming);

for ( var i = 0; i < programming.languages.length; i++) {
  console.log(programming.languages[i]);
}
console.log("===============================");
console.log(" ");
for (var whatever in programming) {

  console.log(whatever);
}
console.log("===============================");
console.log(" ");
var progKeys = Object.keys(programming);

for ( var i = 0; i < progKeys.length; i++) {
  console.log(progKeys[i]);
}

for ( var i = 0; i < progKeys.length; i++) {
  console.log(programming[progKeys[i]]);
}
