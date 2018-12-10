/* 
    Switch statements help us choose between several options for a variable and a default.
    Four main parts to a switch statement
    Switch - The argument being evaluated
    Case - One of the options for the variable to be
    Break - This breaks us out of the switch statement once we hit our case
    Default- The default if we don't his one of our cases, not necessary
*/

var friend = "Philip";

switch(friend) {
    case "Autumn":
        console.log("Hey Autumn, when are you going rock climbing?");
        break;
    case "Dave":
        console.log("Hey Dave, how's Cooper?");
        break;
    case "Alecx":
        console.log("Hey Alecz, when are we playing DnD?");
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

var cat = "Beans";

switch(cat) {
    case "Beans":
        console.log(`${cat}! Come inside!`);
        break;
    case "Gravy":
        console.log(`${cat}! Get outta the fireplace!`);
        break;
    default:
        console.log(`Ahh, finally peace and quiet.`);
}

var number = 8;

switch(true) {
    case(number >= 1):
        console.log(`This number is good.`);
        break;
    default:
        console.log(`This number is no good.`);
}

var yep = -8;

switch(true) {
    case(yep < 0 && yep > -10):
        console.log('worked');
        break;
    case(yep > 0):
        console.log('worked!');
        break;
    default:
        console.log("didn't work");
}

/******************* TERNARY ********************/

// What is a ternary? A great way to write a single line for an if or if/else statement

let x = 6;

(x>0) ? console.log("yes") : console.log("no");

if(x==0) {
    console.log("Hello");
} else if (x<0) {
    console.log("Hi");
} else {
    console.log("Goodbye");
}

(x==0) ? console.log("Hello") : (x<0) ? console.log("Hi") : console.log("Goodbye");

let age = 16;

(age>=25) ? console.log("Yay! You can rent a car.") : (age >= 21) ? console.log("Yay! You can drink.") : (age >= 18) ? console.log("Yay! You can vote.") : console.log("Sorry, you're too young to do anything fun.");