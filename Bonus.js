var adder = function (total) {

  // the following function is returned
  // and assigned to adder
  var inner_function = function (summand) {
    total += summand;
    alert(total);
  }
 
  return inner_function;
 
}(0); // <- we call the annonymous function
      //    and assign the returned function to adder

adder(2); // -> 2
adder(3); // -> 5