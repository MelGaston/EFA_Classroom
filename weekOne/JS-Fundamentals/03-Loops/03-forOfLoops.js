var student = {name:"Peter", awesome:true, degree:"JavaScript"};

for(item of student) {
    console.log(item);
}

// Objects are not iterable

var catArray = ['tabby', 'burmese', 'tortie'];

for(cat of catArray) {
    console.log(cat);
}

let superHeroes = ['Superman', 'Batman', 'Wonder Woman'];

for (hero of superHeroes) {
    console.log(hero + " is super cool");
}