
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

function yel() {
  var some = "Yel !!!!!";
  console.log(some);
}

yel();

function foo3() {
  var something = "cool";
  var another = [1, 2, 3];
  function doSomething() {
    console.log( something );
  }
  //doSomething();

  //doAnother();
  return {
      doSomething: doSomething,
      doAnother: function doAnother() {
        console.log( another.join( " ! " ) );
      }
  };
}
//foo3();
var foo4 = foo3();
foo3().doSomething();  //beide Varianten funktionieren !!!
foo4.doAnother();




var fooMod = (function CoolModule(id) {
  function change() {
    // modifying the public API
    publicAPI.identify = identify2;
  }
  function unChange() {
    // modifying the public API
    publicAPI.identify = identify1;
  }
  function identify1() {
    console.log( id );
  }
  function identify2() {
    console.log( id.toUpperCase() );
  }
  var publicAPI = {
    change: change,
    unChange: unChange,
    identify: identify1
  };
  return publicAPI;
})( "Yel ist gut !!!" );
fooMod.identify();
fooMod.unChange(); // foo module
fooMod.change();
fooMod.identify(); // FOO MODULE
fooMod.unChange();
fooMod.identify(); // foo module
