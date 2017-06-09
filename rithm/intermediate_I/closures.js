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


var laterAdd = outer(10);

// we can now call that inner function


console.log(laterAdd(15));
