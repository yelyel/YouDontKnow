/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var a = 15;

function yel(a) {
  console.log( a );
  if (a == 15) {
    
    var a = 13;
    }
  
  console.log( "nach if & in yel : " + a );
}

yel();
console.log( a );

//  wieso funktioniert das oben  nicht ????

foo(); // "b"

var a = true;
if (a) {
  function foo() { console.log( "a" ); }

}
else {
  function foo() { console.log( "b" ); }
}


/*
Exception: TypeError: foo is not a function
@Scratchpad/1:27:1
*/