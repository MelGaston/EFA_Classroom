function coffee() {
    console.log("I always need coffee");
}

coffee();

// Fat Arrow Functions

let coffee1 = () => {
    console.log("Coffee is GREAT!");
}

coffee1();

// One-Line Fat Arrow Function / Concise Fat Arrow Function

let cats = () => console.log("I like cats.");

cats();

// You can add parameters to it

let name = (firstName) => console.log(`${firstName} is my name.`);

name("Mel");

// For concise fat arrow functions, returns are implied

/**************** Returns ****************/

function capitalizeName(name) {
    let capName = '';
    for (let h in name) {
        if(h==0) {
            capName += name[h].toUpperCase();
        } else {
            capName += name[h].toLowerCase();
        }
    }
    console.log(capName);
    return capName;
}

const newName = capitalizeName("trIXiE");

console.log(newName + ", how are you?");

// My Technique

function tipCalc(bill,quality) {
    var totalBill;
    var roundBill;
    
    if(quality=="excellent") {
        totalBill=(bill*0.25)+bill;
    } else if(quality=="good") {
        totalBill=(bill*0.2)+bill;
    } else {
        totalBill=(bill*0.15)+bill;
    }
    
    roundBill = totalBill.toFixed(2);
    return roundBill;
}

console.log(tipCalc(86.23,"poor"));

// EFA Example Technique

function tipCalculator(bill) {
    tip = (bill * 0.2)
    return tip.toFixed(2);
}

let totalTip = tipCalculator(20.00);
console.log(totalTip);