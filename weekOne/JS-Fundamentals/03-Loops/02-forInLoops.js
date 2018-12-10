var student = {
    name: "Jaime",
    awesome: true,
    course: "JavaScript"
};

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'burmese', 'ragdoll', 'tortie'];

for(cat in catArray) {
    console.log(cat);
}

let name = "mElAnIe";
let firstUppercase;

for(var letter in name) {
    if(letter==0){
        firstUppercase = name[letter].toUpperCase();
    } else {
        firstUppercase += name[letter].toLowerCase();
    }
}

console.log(firstUppercase);