// What is an array?

let students = ['Tony', 'Marshall', 'Randy', 'Ray', 23, true, ['Ryan', 'Iesha']]
console.log(typeof students);
console.log(students instanceof Array);
console.log(students[2]);
console.log(students[6][0]);

let girlName = students[6][1];

console.log(`Hello, ${girlName}, you look nice today.`);

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hot Dog'];

/*

// Adds to additional to the end
food.push('Pizza'); 

// Cuts out item in #1 spot and places it into spot with 1 deletion
food.splice(1, 1, 'Banana Cream Pie');

// Deletes last item

food.pop();

for (item in food) {
    console.log(food[item]);
}

*/

/***************** For Each: The (Allegedly) Better Method *****************/

food.forEach(f => {console.log(f)});

let movieList = ['Silence of the Lambs', 'Spy', 'The Shawshank Redemption', 'Hidden Figures'];

movieList.push('Blackfish');

movieList.splice(2,0, '13 Going On 30');

movieList.forEach(movie => {console.log(movie)});

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let colors = ['blue','green','yellow','red','orange','purple'];
console.log(colors.length);
console.log(typeof colors);
console.log(colors.toString());

for (i = 0; i <= 5; i++) {
    console.log("The number is " + i);
}