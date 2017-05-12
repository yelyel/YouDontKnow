/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 
 const ACCESSORY_PRICE = 9.99;

var TAX_RATE = 0.15 // 15 %
var balance = 225; // Bankkonto
var baseprice; //
var total; // gesamtkaufpreis

baseprice = Number(prompt("Grundpreis: "));

console.log(baseprice);

total = baseprice + (baseprice * TAX_RATE);

console.log(total);

total = Number(total + ACCESSORY_PRICE);

console.log(total);
if (total < balance) {
  console.log("Können wir uns leisten !!");
} else {
  console.log("NIX DA !!!");
}
 
 
 

const ACCESSORY_PRICE = 9.99;

var TAX_RATE = 0.15 // 15 %
var balance = 225; // Bankkonto
var baseprice; //
var total; // gesamtkaufpreis

baseprice = Number(prompt("Grundpreis: "));

console.log(baseprice);

total = baseprice + (baseprice * TAX_RATE);

//console.log(total);

total = total + ACCESSORY_PRICE;

console.log(total);
if (total < balance) {
  console.log("Können wir uns leisten !!");
} else {
  console.log("NIX DA !!!");
}

*/



/*  WHILE LOOP


var numOfCust = 10;
// 1
while (numOfCust > 0) {
  console.log(numOfCust + 1);
  numOfCust = numOfCust -1;
}

// 2
do {
  numOfCust--; 
  console.log(numOfCust);
}
  while (numOfCust > 0);

  
*/

/*  FUNCTIONS

var betrag = 10.991;

function formatAmount() {
  return "£ " + betrag.toFixed( 2 );
}

betrag = formatAmount();
console.log( betrag ); // "$99.99"

*/


//   SCOPE 

function outer() {
  var a = 5;
  
  function inner()  {
    
    var b = 4;
    console.log(a + b);
  }
  inner();
  console.log(a);
  console.log(a*b);
}

outer();
/*
Exception: ReferenceError: outer is not defined
@Scratchpad/1:2:1
*/

/******* FRAGEN

var a = 10;

console["log(a)"];     // wieso gibt das nix aus auch keinen Fehler (Seite 5 Objects)

console.log(a);

*/




/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:87
*/
/*
Exception: ReferenceError: inner is not defined
@Scratchpad/1:113:1
*/
/*
Exception: ReferenceError: inner is not defined
@Scratchpad/1:113:1
*/
/*
Exception: ReferenceError: b is not defined
outer@Scratchpad/1:110:3
@Scratchpad/1:113:1
*/