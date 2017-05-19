var b = 10;


function foo(d) {
  var a = 2;
  function bar() {
    console.log( a * d ); // 2
  }
  return bar;
}
//foo();

var baz = foo(5);

baz();

///////////////////////////////////////////////////////

var fn;
function foo2() {
  var a = 2;
  function baz() {
    console.log( a ); // 2
  }
  fn = baz;
  console.log( a + " foo2");
}
function bar2() {
  fn(); // look ma, I saw closure!
}

foo2();
bar2();

function turnaround(t) {
  var i = 0;
  for ( i=1; i<=5; i++) {
    (function(){
      var j = i;
      setTimeout( function timer(){
        console.log( j );
      }, j*t );
    })();
  }
}

turnaround(100);
