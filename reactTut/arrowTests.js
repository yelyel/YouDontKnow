
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

const numbers = [1, 2, 3, 4, 5];
//const doubled = numbers.map((number) => number * 2);
const doubled = numbers.map(function(number) {
  return number * 2;
  });

console.log(doubled);

//createObject.call({foo:21}).bar();


// function createObject() {
//   console.log('Inside "creatObject" :',  this.foo);
//   return {
//     foo: 42,
//     bar: () => console.log('Inside "bar" :',  this.foo),
//   };
// }
// createObject.call({foo:21}).bar();
