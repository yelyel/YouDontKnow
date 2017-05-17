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
  console.log( a + " Zeile 13");
  if (a == 15) {

    var a = 13;
    }

  console.log( "nach if & in yel : " + a );
}

yel();
console.log( a );
//  wieso funktioniert das bis hier nicht ????

function foo() {
  var a;
  var b;
  a = 2;
  console.log( a ); // 2
  console.log( b ); // undefined
  b = 2;
}
foo(); // "undefined"

// wieso funktioniert die if Schlaufe hier nicht ?? ????
var c = true;
console.log( c );
if ( c ) {
  function foox() { console.log( c ); }

}
else {
  function foox() { console.log( "d" ); }
}
