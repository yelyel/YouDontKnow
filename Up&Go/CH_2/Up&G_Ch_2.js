"use strict";
a = [];
console.log(typeof(a));


a = { b: "c", d: "ich" };   // object



console.log(a.d, a.b);      // ich c

var obj = {
a: "hello world",
b: 42,
c: true,
count: 6  
};
obj.a; // "hello world"
obj.b; // 42
obj.c; // true
obj["a"]; // "hello world"
obj["b"]; // 42
obj["c"]; // true

console.log(obj.b * obj["count"]);    // 252

var obj2 =["hello world ! ", 42, true, 6 ];

console.log(obj2[1] * obj2[3]);       // 252


function foo() {
  return 42;
}

console.log(foo());                  // 42


var a = "hali halo " + 42;

console.log(a.toUpperCase());                // HALI HALO 42

a = "",
b = 0;
c = null;
var d = false;

console.log(Boolean(a), Boolean(b), Boolean(c), Boolean(d));    // false false false false

var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
a == c; // true
b == c; // true
a == b; // false

console.log(a, b, c);



var y = "azz";
var z = "bba";

console.log(y < z);         // true


a = 2;
foo(); // works because `foo()` declaration is "hoisted"

function foo() {
  var a = 3;
  console.log( a ); // 3
  //var a; // declaration is "hoisted" to the top of `foo()`
}

console.log( a ); // 2


(function IIFE() {
  console.log("instantly invoked function expression"); // "instanly"   --> wird ohne Aufruf ausgeführt !
})();                               



function foo() {
	console.log( this );
}

var bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};
var obj2 = {
	bar: "obj2"
};

// --------
foo(); // "global"
obj1.foo(); // "obj1"
foo.call( obj2 ); // "obj2"
new foo(); // undefined// JavaScript Document
foo.call( obj1 );





























