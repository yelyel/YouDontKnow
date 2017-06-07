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
console.log("====== countVowels()  NICHT GEMACHT !!!! ======= ");
console.log(" ");

//var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

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

function makeXOGrid(x, y) {
  var arr = [];
  var row = [];
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      if (j % 2 == 0) {
        row[j] = "X";
      } else {
        row[j] = "O";
      }
    }
    arr.push(row);
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

var twoDee = [[]];
twoDee[0] = [1,2,3];
console.log(twoDee);
