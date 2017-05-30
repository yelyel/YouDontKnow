var arr = [5,4,3,2,1];
var poppedVal = arr.pop();
console.log(arr);
console.log(poppedVal);


function firstFunction(){
    console.log("I just wrote my first function!");
}

console.log(firstFunction());

console.log("====== Exercises ================");
console.log("  ");
function myName() {
  console.log("Yel Koch");
}

myName();  // Yel Koch

var favoriteFoods = ["pizza", "icecream"];

// function randomFood()  {
//   if (Math.random() > .5) {
//     return console.log(favoriteFoods[0]);
//   }
//   return console.log(favoriteFoods[1]);
// }

function randomFood()  {
  return Math.random() > .5 ?  console.log(favoriteFoods[0]) : console.log(favoriteFoods[1]);

}
randomFood();


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function displayOdds(num)  {
//   for (var i = 0; i < num.length; i++) {
//     if (i % 2 == 0) {
//       console.log(num[i]);
//     }
//   }
// }
//
// displayOdds(numbers);

// function displaySecondHalf(num)  {
//   for (var i = 0; i < num.length; i++) {
//     if ( i >= num.length / 2) {
//         console.log(num[i]);
//         }
//       }
// }

function displaySecondHalf(num)  {
  return num.slice(num.length / 2);
}

console.log(displaySecondHalf(numbers));
