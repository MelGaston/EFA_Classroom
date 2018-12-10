console.log("Hello world.");
// Command + ? when something is highlighted - comment out
/*
    This works for commenting out also
*/
// console.log is a great tool to debug later down the line. For now we're going to use it as alearning tool.

var a = 1;
var A = 2;

console.log(A);

var b = 1;
b = 2;
console.log(b); // 2

let c = 3;
c = 4;
console.log(c);

var firstName = 'Melanie';
const lastName = 'Gaston';
console.log(firstName,lastName);

/*
    Declarations are the LEFT SIDE of a variable
    It is simply the var x
    It is on the left side of the assignment operator (=)

    Initializations are the RIGHT SIDE of a variable
    It sets the value of the variable
    It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/

var x;
console.log('Declaration:', x); // Undefined

x = 10;
console.log("Initialization 1:", x); // 10

var y = "Hello";
console.log("Both:",x,y)