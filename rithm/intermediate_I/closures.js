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

// we can now call that inner function


console.log(laterAdd(15));

function newAge(){
   var age = 21;
    return function growUp(){
        return ++age;
    }
}
var agePlus = newAge();
console.log(agePlus());
console.log(agePlus());
console.log(agePlus());
console.log(agePlus);
console.log(agePlus());
console.log(agePlus.age);


function defineAge(){
    var age = 28;
    return function growUp(){
        return ++age;
    }
}
