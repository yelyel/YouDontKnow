


var jane = {
     name: "Jane",

     logHello: function (friends) {
         friends.forEach(function (friend) {
             console.log(this.name + " says hello to " + friend)
         }.bind(this));
     }
 }

//number = 17;
let yelyel = {
  name: "yelyel",

  logHello: function (friends, number) {
    friends.forEach(friend => {
      console.log(this.name + " says hello to " + friend + " " + number++);
    });
  }
}

function shoutOut(){
  return "louder !!!!!!!!!";
}
yelyel.logHello(["yelyelPeter", "Yelyel"], 17);
jane.logHello([shoutOut(), "Yel"]);
// function square(x) {
//   return x * x;
// }

// x => { return x * x };
//
//
// console.log(x: 5);
