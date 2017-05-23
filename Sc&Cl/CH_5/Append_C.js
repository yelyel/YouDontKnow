var foo = a => {
console.log( a );
};

foo( 2 ); // 2

var foo2 = function( a ) {
  	console.log( a );

}
foo2( 4 ); // 2


var obj = {
	id: "awesome",
	cool: function coolFn() {
		console.log( this.id );
	}
};

var id = "not awesome";

obj.cool(); // awesome

setTimeout( obj.cool, 100 );
