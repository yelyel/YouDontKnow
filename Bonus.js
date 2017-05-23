var adder = function (total) {

  // the following function is returned
  // and assigned to adder
  var inner_function = function (summand) {
    total += summand;
    console.log(total);
  }

  return inner_function;

}(0); // <- we call the annonymous function
      //    and assign the returned function to adder

adder(2); // -> 2
adder(3); // -> 5


var text = 'Look at me';

var parent_function = function () {

  var inner_function = function () {
    var scream = '!!!';
    console.log(text + ', ' + reason + scream);
  }

  var reason = "I'm an attention whore";
  var scream = '!';

  console.log(text + scream);
  inner_function();
};

parent_function();
