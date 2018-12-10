var x = 12;

function scope() {
    var x = 33;
    if(true) {
        let x = 45;
        console.log(x); // 45
    }
    console.log(x);
}

scope(); // 33
console.log(x); // 12

/*
    variable grammar    obeys functional scope  obeys block scope   can be mutated (changed after initialization)
    var                 X                       -                   X
    let                 X                       X                   X
    const               X                       X                   -
*/