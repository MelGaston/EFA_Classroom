// Always have a plan
// - Making a plan gives you structure, helps to give you a path to take.
// - Even if it quickly becomes clear it is not the right path, it's a way to start

// Restate the problem
// - This is a great way to make the problem clear and concise.
// - A great way to figure out what is being asked and what is needed
// - Rubber Ducking

// Divide the problem
// - Break the problem into smaller sections
// - This can help with the mental block that may come from how large a problem may seem
// - You may not know how to get from A to C, but you can walk from A to B, then from B to C

// Start with what you know
// - Once the problem is in smaller pieces, you might be able to solve one of those smaller problems
// - Starting with what you know might be helpful in getting monentum to solve a problem
// - Can help build confidence to take on more problems

// Reduce the problem
// - If you're finding the constraints of the question too difficult to navigate, try taking one away.
// - If you can't get a reversed string back, can you get an array of strings back first?

// Look for analogies
// - If you can't find a way to a solution, try creating an analogy solution
// - What would give you a similar result that you've already done before?

// Experiment
// - Sometimes there's only so much prep we can do with a problem, and we have to just dive in.
// - Trying a solution and finding out it's wrong gives you good clues as to what works and what doesn't

// Don't get frustrated
// - Being incorrect is a large part of development.
// - Getting better means that you have tried many ways to do something
// - If you've started to get frustrated, that means you've started deviating from plan and techniques
// - Step away, take a break and make a better plan when you come back
// - Getting frustrated just demotivates you and makes you feel like you're not making progress

let catArray = ['Beans', 'Gravy'];
let roommateArray = ['Sam', 'Phil'];

// Method 1

function allRoommates() {
    let everyone = catArray.concat(roommateArray);
    for(roommate in everyone) {
        console.log(everyone[roommate]);
    }
}

allRoommates();

// Method 2

function alternativeRoommates() {
    for (i=0;i<catArray.length;i++) {
        roommateArray.push(catArray[i]);
    }

    for (individual in roommateArray) {
        console.log(roommateArray[individual]);
    }
}

alternativeRoommates();