function add(x, y) {
  return parseInt(x + y);
}

function divide(x, y) {
  if (y === 0) {
    alert("Nie można dzielić przez 0!");
    return;
  }
  return x / y;
}

var sum = add(4, 5);
alert("Suma wynosi: " + sum);

var quotient = divide(20, 5);
alert("Iloraz wynosi: " + quotient);

//anonymous function
/*
var f = function () { 
  alert("test");
};

f();
*/

function test(f, y)
{
    f(y*2);
}

test(
  //anonymous function
  function(x){
   alert("test " + x);
  },
  17
);
