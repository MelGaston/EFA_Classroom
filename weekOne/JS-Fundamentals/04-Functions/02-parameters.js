// Parameters are like empty storage boxes we can name whatever we want.
// They need to use the same name inside of the function.
// We can also have multiple different parameters for a single function.
// We provide the parameter when we call our function.

function pet(animal) {
    console.log(`I have a ${animal} for a pet.`);
}

pet("tiger");

function pet2(animal, owner) {
    console.log(`${owner} has a ${animal} for a pet.`);
}

pet2("kitty", "Sam");

function namer(firstName, lastName) {
    let wholeName = firstName + " " + lastName;
    console.log(`Hello, my name is ${wholeName}.`);
}

namer("Tom", "McClellan");