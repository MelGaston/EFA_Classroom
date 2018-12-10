// Functions are a set of statements that perform a task or calculates a value

// Declaration

function hi() {
    console.log("Hi!");
}

// Expression

var hi = function hi() {
    console.log("I already said hi!");
}

// Declarations = Hoisted
// Expressions != Hoisted

// Function Calling

hi();
hi();

function numberCounter() {
    for(i=1;i<=10;i++) {
        console.log(i);
    }
}

numberCounter();

let arr = ["This", "Is", "Really", "Cool"];

function sentence() {
    for(word in arr) {
        console.log(arr[word]);
    }
}

sentence();