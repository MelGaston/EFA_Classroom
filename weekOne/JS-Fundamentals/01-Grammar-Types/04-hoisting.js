console.log(scissors);
scissors = 'blue';

console.log(scissors);
var scissors;

b();
console.log(a);

function b() {
    console.log('This is all hoisted!');
}

var a = 'This is not hoisted.'