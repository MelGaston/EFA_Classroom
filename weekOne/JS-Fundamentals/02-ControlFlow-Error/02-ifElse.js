let weather = 65;

if(weather < 70) {
    console.log("Wear a jacket.");
} else {
    console.log("No jacket necessary!");
}

let firstName = "Mel";

if(firstName == "Mel") {
    console.log("Hello, my name is " + firstName);
} else {
    console.log("Hello, what's your name?");
}

let name = "tyleR";

if(name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("melanie"));

let age = 25;

if(age>=25) {
    console.log("Yay! You can rent a car!");
} else if(age>=21) {
    console.log("Yay! You can drink!");
} else if(age>=18) {
    console.log("Yay! You can vote!");
} else {
    console.log("Sorry, you're too young to do anything.");
}