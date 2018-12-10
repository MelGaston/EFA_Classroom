let c = "i like learning at eleven fifty";

function pascalCase(str) {
    // Splits string into separate ones in an array, separates between spaces, and lowercases them all
    let split = str.toLowerCase().split(' ');
    // Loops through and changes first letter of each small string to be capitalized
    // substring prints out the rest of the string after/between a certain point
    for (var i = 0; i < split.length; i++) {
       split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
   }
   // Joins small strings back together into one, with each string separated by spaces
   let pascal = split.join(' '); 
   return pascal;
}

console.log(pascalCase(c));