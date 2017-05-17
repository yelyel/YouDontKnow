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
