//amazing; // ReferenceError - does not exist in the global scope

var def = (function defineSomething(){
    var secret = "I'll never tell";
    return secret;
})();

//console.log(defineSomething());
console.log(def);

//console.log(secret); // ReferenceError - only exists in the scope of the defineSomething function

var obj = {
  name : function() {
          return "Yel";
        }
}

console.log(obj.name());

try {
  console.log(obj.name);
} catch(e) {
    console.log("The error is ", e);
}

try {
    if(Math.random() >= .5) {
        throw "Let's make an error!";
    }
    console.log("Whew...we made it.");
    console.log("We can only get here if the random number is less than .5.");
} catch(e){
    console.log("The error is ", e);
    console.log("We can only get here if an error was thrown. (Random number is greater than .5).");
}

finally {
   console.log("aber DAS HIER führen wir in jedem Fall aus");
}

console.log("Moving on.....");


/*
- throw returns the message connected with if a condition is not met !
- finally allows to execute code, even if an error has occured !

*/

for(var i=0; i < 5; i++){
    console.log(i);
}

function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}


console.log(displayEvenNumbers()); // should return [2,4,6,8]
