function isOdd(num) {
  return num % 2 !== 0;
}


function numberFact(num, fn){
  return fn(num);
}

console.log(numberFact(49, isOdd));
