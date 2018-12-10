// Booleans
// What is a boolean?
var on = true;
console.log(on); // true

let off = false;
console.log(off); // false

// Boolean can represent: true/false, yes/no, on/off

// Null = Empty value (not 0, and not undefined)

var empty = null;
console.log(empty); // Null

var undef = undefined;
console.log(undef); // Undefined

let grass;
console.log(grass); // Undefined

/*
    We've talked before about how every variable is basically a storage container in Javascript
    Think of variables with null and defined as packages coming out of UPS
    Null packages are packages that were intentionally packed up with nothing, but have been assmbled
    Undefined packages are packages that have nothing in them, but have not yet been assembled to leave UPS
*/

// Numbers
var degrees = 90;
console.log(degrees);

var precise = 999999999999999; // 15 9s
console.log(precise);

var rounded = 9999999999999999; // 16 9s
console.log(rounded); // JS only takes 15 numerical places

var notQuite = 0.2 + 0.1;
console.log(notQuite); // JS doesn't like decimals

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); // 0.3

let stringOne = "Double quotes."
let stringTwo = 'Single quotes.'
console.log(stringOne, stringTwo);

// Numbers vs. Strings
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first, second); // 1150 '1050100'
console.log(first+second); // 11501050100
console.log(typeof first); // Number
console.log(typeof second); // String

/*
    Addition Vs. Concatenation

    When JS sees combining two or more numbers, it adds the values together using the built-in 
    math functionality; when it sees adding together one or more strings, it changes and the plus 
    sign becomes an assignment operator -- it smashes the values together without trying to 
    synthesize the values
*/

let third = 1050 + '100';

console.log(third); //1050100
console.log(typeof third); // String

var firstName = "Mel";
var lastName = "Gaston";
var houseNumber = 12636;
var street = "Windham Pass";
var city = "Carmel";
var homeState = "Indiana";
var zip = 46032;

console.log(firstName,lastName);
console.log(houseNumber + " " + street);
console.log(city + ", " + homeState, zip);

console.log(`${firstName} ${lastName}`);

// Objects
/*
    What is an object?

    A container that can hold multiple datatypes

    Denoted by {}
    Has keys and values (color(key): 'blue' (value)), separated with a colon
    Each key separated with a comma
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
};
console.log(burritosNow);
console.log(burritosNow.quantity); // 4
console.log(typeof burritosNow); // Object

/*
    Arrays are great for lists

    Denoted by []
    Has values ('blue', 'green', 'yellow'), separated with commas
*/

var burritos = ['large', 4, true];
console.log(burritos); //['large', 4, true]

console.log(typeof burritos);