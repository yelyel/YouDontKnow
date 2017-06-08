//var nestedArr = [[1,2], [3,4]];
var nestedArr = [[1,2,3], [4,5,6], [7,8,9,10,11,12]];
for (var i=0; i<nestedArr.length; i++){
  for (var j = 0; j < nestedArr[i].length; j++ ) {
    console.log(nestedArr[i][j]);
  }
}

console.log("  ");
console.log("====== printEvens();  ======= ");
console.log(" ");

var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function printEvens() {
  for (var i=0; i<nestedArr.length; i++){
    for (var j = 0; j < nestedArr[i].length; j++ ) {
      if (nestedArr[i][j] % 2 == 0) {
        console.log(nestedArr[i][j]);
      }
    }
  }
}

printEvens();

console.log("  ");
console.log("====== sumTotal()  ======= ");
console.log(" ");

var nestedArr = [[[1,2],[3,4]],[[5,6]]];

function sumTotal() {
  var total = 0;
  for (var i=0; i<nestedArr.length; i++){
    for (var j = 0; j < nestedArr[i].length; j++ ) {
      for (var y = 0; y < nestedArr[i][j].length; y++) {
        total = total + nestedArr[i][j][y];
      }
    }
  }
  console.log("totale Summe = " + total);
}

sumTotal(); // 21

console.log("  ");
console.log("====== countVowels()  GELÖST !!!! ======= ");
console.log(" ");

var arr = []
Array.isArray(arr) // true
Array.isArray('Hello') // false

var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

function countVowels(nest) {
  var vowels = 0;
  var vowelString = [];
  for (var i = 0; i < nest.length; i++) {
      var nestString = nest[i].toString().toLowerCase();
      //console.log(nestString);
      for (var j = 0; j < nestString.length; j++) {

        if (nestString[j] == "a" || nestString[j] == "e" ||  nestString[j] == "i" || nestString[j] == "o" || nestString[j] == "u") {
          //console.log(nestString[j]);
          vowelString.push(nestString[j]);
          vowels++;
        }
    }
  }
  console.log(vowels);
  console.log(vowelString);
}

// console.log(nestedArr[1][1][0]);  // TIM
// console.log(nestedArr[2][0]);       // Colt
// console.log(nestedArr[2][1][0]);  // Whisky
// console.log(nestedArr[2][1][1][0]);  //JAney
// console.log(nestedArr[2][1][2]);    //Tom
// console.log(nestedArr[3]);    // Lorien


countVowels(nestedArr); // 13



console.log("  ");
console.log("====== Nested Arrays Exercises.  ======= ");
console.log(" ");

function rotate(arr, spaces) {
  var amount = spaces % arr.length;
  for (var i = 0; i < amount; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr);
}

rotate([1,2,3], 1); // [3,1,2]
rotate([1,2,3], 2); // [2,3,1]
rotate([1,2,3], 3); // [1,2,3]

console.log("  ");
console.log("====== makeXOGrid() ======= ");
console.log(" ");

// function makeXOGrid(x, y) {
//   var arr = [];
//   var row = [];
//   for (var i = 0; i < x; i++) {
//     for (var j = 0; j < y; j++) {
//       if (j % 2 == 0) {
//         row[j] = "X";
//       } else {
//         row[j] = "O";
//       }
//     }
//     arr.push(row);
//   }
//   console.log(arr);
// }


function makeXOGrid(x, y) {
  var arr = [[]];
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      if (j % 2 == 0) {
        arr[i][j] = "X";
      } else {
        arr[i][j] = "O";
      }
    }
    arr.push(arr[i]);
  }
  console.log(arr);
}


makeXOGrid(1,4)

/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3,2)

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeXOGrid(3,3)
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/


console.log();
var twoDee = [[]];
twoDee[0] = [1,2,3];
console.log(twoDee);

var test = "test";
console.log(test.toString());
