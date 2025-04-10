
// Store personal information in variables
const firstName = "Ese";
const middleName = "Smith";
const lastName = "Echanomi";
const myAge = 38;
const myNationality = "Nigerian";

// Combine the variables into an introduction sentence
const introduction = "Hello! My name is " + firstName + " " + middleName + " " + lastName + ", I am " + myAge + " years old, and " + myNationality + ".";
const introduction2 = `Hello! My name is ${firstName} ${middleName} ${lastName}, I am ${myAge} years old, and I am ${myNationality}.`;

// Display the introduction
console.log(introduction);
console.log(introduction2);


// Store a favorite quote
let favoriteQuote = "The only limit to our realization of tomorrow is our doubts of today.";

// Convert the quote to uppercase
let uppercaseQuote = favoriteQuote.toUpperCase();
console.log("Uppercase: " + uppercaseQuote);

// Convert the quote to lowercase
let lowercaseQuote = favoriteQuote.toLowerCase();
console.log("Lowercase: " + lowercaseQuote);



// Original word
const normalWord = "programming";

// Reverse the word
// Convert string to array, reverse it, then join back to string
let reversedWord = normalWord.split("").reverse().join("");

// Display the reversed word
console.log("Original: " + normalWord);
console.log("Reversed: " + reversedWord);


// Store prices of three items
const item1Price = 25.99;
const item2Price = 14.50;
const item3Price = 9;

// Calculate the total
const totalPrice = item1Price + item2Price + item3Price;

// Display the total with a message
console.log("The total cost of your items is $" + totalPrice.toFixed(2));


// Store 5 test scores
const testOne = 85;
const testTwo = 92;
const testThree = 78;
const testFour = 90;
const testFive = 88;

// Calculate the average
const average = (testOne + testTwo + testThree + testFour + testFive) / 5;

// Display the average with a message
console.log("Your average test score is " + average.toFixed(2));



// Create an array of favorite foods
const favoriteFoods = ["pizza", "sushi", "pasta", "tacos", "ice cream"];

// Display the first and last items
console.log("My first favorite food is " + favoriteFoods[0]);
console.log("My last favorite food is " + favoriteFoods[favoriteFoods.length - 1]);


// Add an item at the beginning
favoriteFoods.unshift("burgers");

// Add an item at the end
favoriteFoods.push("chocolate");

// Display the new list
console.log("My updated list of favorite foods:");
console.log(favoriteFoods);


// First array of student names
const jssOne = [
    "Emma Johnson",
    "Noah Williams",
    "Olivia Smith",
    "Liam Brown",
    "Ava Jones",
    "William Davis",
    "Sophia Miller",
    "James Wilson",
    "Isabella Moore",
    "Benjamin Taylor"
];

// Second array of student names
const jssTwo = [
    "Charlotte Anderson",
    "Lucas Martinez",
    "Amelia Garcia",
    "Henry Rodriguez",
    "Mia Lee",
    "Alexander Hernandez",
    "Harper Clark",
    "Daniel Lewis",
    "Ella Young",
    "Matthew Walker"
];

// Third array of student names
const jssThree = [
    "Abigail Hall",
    "Joseph Allen",
    "Emily Scott",
    "Samuel King",
    "Elizabeth Wright",
    "David Lopez",
    "Sofia Green",
    "Michael Hill",
    "Avery Adams",
    "Scarlett Baker"
];

// Display each array to verify
console.log("JSS One Students:", jssOne);
console.log("JSS Two Students:", jssTwo);
console.log("JSS Three Students:", jssThree);