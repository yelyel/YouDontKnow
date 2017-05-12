/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)



var d = 5;
function foo( a ){
  
  d = 10;
  var b = 2 * a;
    function bar( c ) {
    console.log(a, b, c, d );
  }
  bar(b * 3 + d);

}


foo( 2 );

function foo2 ( str, a ) {
  //"use strict";
  eval( str );
  console.log(a, b );
}
var b = 2;

foo2("var b = 10;", 5);

 */
function foo(obj) {
  with (obj) {
   a = 2;
  }
}
var o1 = {
a: 3
};
var o2 = {
b: 3
};
foo( o1 );
console.log( o1.a ); // 2
foo( o2 );
console.log( o2.a ); // undefined
console.log( a ); // 2 -- Oops, leaked global!