/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function doSomething( a ) {
  
  function doSomethingElse( a ) {
    
    return a - 1;
  }
  
  var b;
  b = a + doSomethingElse( a * 2 );
  console.log( b * 3 );
}


//doSomething( 2 );

function foo2() {
  
  function bar( a ) {
    var i = 3;
    console.log( a + i);
    
  }
  for (var i = 0; i < 10; i++) {
    bar(i * 2 );
  }
  
}

//foo2();


var a = 2;
(function foo(){ // <-- insert this
var a = 3;
console.log( a ); // 3
})(); // <-- and this
console.log( a ); // 2

undefined = true; // setting a land-mine for other code! avoid!
(function IIFE( undefined ){
  var a;
  if (a === undefined) {
      console.log( "Undefined is safe here!" );
  }
})();


var a = 10;

function fooo() {
  var b = 15;
}

console.log( a, b );

/*
Exception: ReferenceError: b is not defined
@Scratchpad/2:63:1
*/