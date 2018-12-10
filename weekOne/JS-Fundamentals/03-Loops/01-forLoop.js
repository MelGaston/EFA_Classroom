for(var i=0;i<10;i++) {
    console.log(i);
}

// FN + F9 to kill an infinite loop

for(var i=0;i<=20;i+=2) {
    console.log(i);
}

for(var i=10;i>=0;i--) {
    console.log(i);
}

for(var i=0;i>=-24;i-=2) {
    console.log(i);
}

let myName = "Mel Gaston";
let nameLength = myName.length;

for(i=0;i<nameLength;i++) {
    console.log(myName.charAt(i));
}

let sumNumber = 0;

for(i=1;i<=50;i++) {
    sumNumber += i;
}

console.log(sumNumber);

for(i=0;i<=100;i++) {
    if((i%3)==0 && (i%5)==0) {
        console.log("FizzBuzz");
    } else if((i%3)==0) {
        console.log("Fizz");
    } else if((i%5)==0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}