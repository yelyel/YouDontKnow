function isOdd(num) {
  return num % 2 !== 0;
}


function numberFact(num, fn){
  return fn(num);
}

console.log(numberFact(49, isOdd));
var player = {score: 1, name: "Yel"};

console.log("1 : " + player.name + " score : " + player.score);

//var newPlayer = {...player, score: 2};
var newPlayer = Object.assign({}, player, {score: 2});
console.log("2 : " + player.name + " score : " + player.score);
console.log("2 : " + newPlayer.name + " score : " + newPlayer.score);
const lines = [
  [1, 2, 3],
  [4, 5, 6]
];
const [a, b, c] = lines[1];
console.log("a : " + a);

console.log(" ");
console.log(2 % 2);
console.log(3 % 2);
