// Print the name and value of each property of o. Return undefined.
function printprops(o) {
	for(var p in o)
	console.log(p + ": " + o[p] + "\n");
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	return Math.sqrt(dx*dx + dy*dy);
}
// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
	if (x <= 1) return 1;
	var result = x * factorial(x-1);
	console.log('result for ' + x + ' is ' + result);
	return result;
}



// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
var square = function(x) { return x*x; };

// Function expressions are sometimes defined and immediately invoked:
var tensquared = (function(x) {return x*x;}(10));

// Nested function
function hypotenuse(a, b) {
	function square(x) { return x*x; }
	return Math.sqrt(square(a) + square(b));
}

// Function invocation
printprops({x:1});
var total = distance(0,0,2,1) + distance(2,1,3,5);
var probability = factorial(5)/factorial(13);

// Method
var calculator = { // An object literal
	operand1: 1,
	operand2: 1,
	add: function() {
		// Note the use of the this keyword to refer to this object.
		this.result = this.operand1 + this.operand2;
	}
};

// this keyword
var o = { // An object o.
	m: function() { // Method m of the object.
		var self = this; // Save the this value in a variable.
		console.log(this === o); // Prints "true": this is the object o.

		f(); // Now call the helper function f().

		function f() { // A nested function f
			console.log(this === o); // "false": this is global or undefined
			console.log(self === o); // "true": self is the outer this value.
		}
	}
};
//o.m();


// Closure
var scope = "global scope"; // A global variable
function checkscope() {
	var scope = "local scope"; // A local variable
	function f() { return scope; } // Return the value in scope here
	return f();
}
//checkscope() // => "local scope"

var scope = "global scope"; // A global variable
function checkscope() {
	var scope = "local scope"; // A local variable
	function f() { return scope; } // Return the value in scope here
	return f;
}
//checkscope()() // What does this return?


// This function returns a function that always returns v
function constfunc(v) { return function() { return v; }; }
var funcs = [];
for(var i = 0; i < 10; i++) funcs[i] = constfunc(i);
// The function at array element 5 returns the value 5.
//funcs[5]() // => 5

// Return an array of functions that return the values 0-9
function constfuncs() {
	var funcs = [];
	for(var i = 0; i < 10; i++)
		funcs[i] = function(i) {
			return i;
		};
	return funcs;
}
var funcs = constfuncs();
funcs[5]() // What does this return?

