// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
var firstName = 'Victor';
console.log(firstName);
// 2 - Create a second variable called `lastName` and assign it the value of your last name
var LastName ='Lees';
console.log(LastName);
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
var fullName = firstName + ' ' + LastName;

// 4 - Console log the value of `fullName`
console.log(fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 2;
// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
console.log('My name is', fullName + ', and I think', luckyNumber + ' is a winner!');
// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;
console.log(adventurous);
// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food ='Thai';
console.log(food);
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 0;
console.log(pets);
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
var friendsPets = 4;
console.log(friendsPets);
// 11 - Add two pets to your `pets` variable
pets = pets + 2;
console.log(pets);
// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 4;
console.log(allowedPets);
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
console.log('Adventures are great!');

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber == 2 && adventurous == true){
  console.log("Roll the dice!");
}
// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if (pets < allowedPets){
  console.log("I can have more pets!")
}
if (pets == allowedPets){
  console.log("I have enought pets!")
}
if (pets > allowedPets){
  console.log("Oh no, I have too many pets!")
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.
var mostPets;

if (pets > friendsPets) {
    console.log('You have', pets + ' pets ' + 'than your freinds', friendsPets + ' pets');
    mostPets = pets;
    console.log('Congraulations!! you have the most pets', mostPets);
} else if (friendsPets > pets) {
    console.log('Your freind has', friendsPets + ' pets' + ' you have only', pets);
    mostPets = friendsPets;
    console.log('You freind has the most pets', mostPets);
}
console.log('The value of mostPets is', mostPets);
// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!
switch(mostPets) {
  case pets:
    mostPets = pets;
    console.log('You have', pets + ' pets ' + 'than your freinds', friendsPets + ' pets');
    console.log('Congraulations!! you have the most pets', mostPets);
    break;
  case friendsPets:
    mostPets = friendsPets;
    console.log('Your freind has', friendsPets + ' pets' + ' you have only', pets);
    console.log('You freind has the most pets', mostPets);
    break;
  }
console.log('The value of mostPets is', mostPets);


// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
