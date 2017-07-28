
function createObject() {
  console.log('Inside "creatObject" :',  this.foo);
  return {
    foo: 42,
    bar: function() {
      console.log('Inside "bar" :',  this.foo)
    },
  };
}
createObject.call({foo:21});

//createObject.call({foo:21}).bar();


// function createObject() {
//   console.log('Inside "creatObject" :',  this.foo);
//   return {
//     foo: 42,
//     bar: () => console.log('Inside "bar" :',  this.foo),
//   };
// }
// createObject.call({foo:21}).bar();
