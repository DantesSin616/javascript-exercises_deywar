const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((current, total) => current + total, 0);
};

const multiply = function(array) {
  return array.reduce((product, total) => product * total);
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x_factorial) {
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
