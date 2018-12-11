let colorArray = ['Red','Orange','Yellow','Green','Blue','Indigo','Violet','Brown','Black','White'];
let catsArray = ['Beans','Gravy','Rupert','Loumi','Zola','Wilbur','Cosmo','OC','Peachy Pumpkin','Mrs. Murphy',]
let suffixArray = ['st','nd','rd','th','th','th','th','th','th','th'];
let finalArray = [];

function colorHolder(arrayType,places) {
    for (i=0;i<catsArray.length;i++) {
        finalArray.push(`${arrayType[i]} is ${i+1}${places[i]}`);
    }
    return finalArray;
}

console.log(colorHolder(catsArray,suffixArray));