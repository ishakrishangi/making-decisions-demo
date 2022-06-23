/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

//create an empty array called backpack that Jon snow can start to fill
let backpack = [];


//lets add some stuff to the backpack; add 3 strings
backpack.push('sword', 'shield', 'food');
console.log(backpack);


//Jon is taking the sword out and putting it on his belt as there isn't enough space in his backpack
let belt = backpack.splice(0,1);
console.log(belt);


// Now Jon decides he wants to add his fur coat to his backpack. Create a variable called furCoat and give it a string value of "fur coat". Then add that variable to the backpack.
let furCoat = 'furcoat'
backpack.unshift(furCoat)
console.log(backpack);


// Realizing it is freezing outside, Jon decides to take the fur coat back out and put it on. Without using splice, remove the fur coat from the array.
backpack.shift();
console.log(backpack);


//Let's check how much stuff we have in our backpack. Create a variable called itemCount and set it equal to the number of items in the backpack
let itemCount = backpack.length;
console.log(itemCount);

// There is currently no where near enough supplies to make the journey to Winterfell. Let's add some other essentials. Add the strings: flint, blanket, knife, and toothbrush.

backpack.push("flint", "blanket", "knife", "toothbrush");
console.log(backpack);

//backpack is overflowing, split contents into two bags

let duffleBag = backpack.splice(backpack.length - 4, 4);
console.log(duffleBag);

// Using bracket syntax, console.log the first item in duffleBag
console.log(duffleBag[0]);

// LOOPS

//Let's see the contents of Jon's backpack and duffle bag. Use a for loop on bag to console.log each item.
for (let i = 0; i < backpack.length; i++){
    console.log(backpack[i]);
}
for (let i = 0; i < duffleBag.length; i++){
    console.log(duffleBag[i]);
}

//only the first 3 elements in the dufflebag
for (let i = 0; i < 3; i++){
    console.log(i, '---------', duffleBag[i]);
}

