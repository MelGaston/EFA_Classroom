let exampleObj = {
    color:'green',
    smashes:true,
    name:'Hulk'
}

let otherObj = {
    name:'Mel',
    age:25
}

function objectChecker(obj) {

    let colorValue = obj.color;

    if(colorValue=='green') {
        return true;
    } else {
        return false;
    }
}

console.log(objectChecker(exampleObj));
console.log(objectChecker(otherObj));

// EFA Method

function colorIsGreen(obj) {
    if(obj['color'] === 'green') {
        return true;
    } else {
        return false;
    }
}


console.log(colorIsGreen(exampleObj));

/*********** Extended Challenge Sesh ***********/

let cat = {
    breed: 'tabby',
    name: 'Snowball',
    age: 3
};

let newObject = {};

function objectFlipper(preFlippedObject) {

    let keys = Object.keys(preFlippedObject);
    let values = Object.values(preFlippedObject);
    
    for(i=0;i<keys.length;i++) {
        newObject[values[i]] = keys[i];
    }
    
    return newObject;
}

console.log(cat);
console.log(objectFlipper(cat));