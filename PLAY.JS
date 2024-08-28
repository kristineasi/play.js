// **1. DECLARING AND ASSIGNMENT OF VARIABLES**

let userName = "Alice"; // 'let' is used for variables that can change
let userAge = 22;
let isStudent = false;

const constantValue = "This cannot change"; // 'const' is for values that should remain constant

// **2. CONDITIONAL STATEMENTS**

if (isStudent) { // if isStudent is true
    console.log("The user is a student.");
} else {
    console.log("The user is not a student.");
}

if (userAge >= 18 && userAge <= 25) {
    console.log("The user is a young adult.");
} else if (userAge < 18) {
    console.log("The user is a minor.");
} else {
    console.log("The user is an adult.");
}

// Using a switch statement
switch (userName) {
    case "Alice":
        console.log("Hello Alice!");
        break;
    case "Bob":
        console.log("Hello Bob!");
        break;
    default:
        console.log("Hello, unknown user!");
}

// **3. PRINTING TO THE CONSOLE**

console.log(userName); // Output: Alice
console.log(userAge); // Output: 22
console.log(isStudent); // Output: false
console.log(constantValue); // Output: This cannot change

console.log(`My name is ${userName} and I am ${userAge} years old.`); // Correct use of template literals

// **4. ARRAY DECLARATION AND MANIPULATION**

let favoriteBooks = ["1984", "Pride and Prejudice", "The Great Gatsby"];

console.log(favoriteBooks); // Output: ["1984", "Pride and Prejudice", "The Great Gatsby"]
console.log(favoriteBooks[1]); // Output: Pride and Prejudice

for (let book of favoriteBooks) {
    console.log(book); // Output: each book name
}

favoriteBooks.push("To Kill a Mockingbird");
console.log(favoriteBooks); // Output: ["1984", "Pride and Prejudice", "The Great Gatsby", "To Kill a Mockingbird"]

let updatedBooks = favoriteBooks.map((book) => {
    return book + " is a great read";
});
console.log(updatedBooks); // Output: ["1984 is a great read", "Pride and Prejudice is a great read", "The Great Gatsby is a great read", "To Kill a Mockingbird is a great read"]

// **5. OBJECT DECLARATION**

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2010,
    isElectric: false,
    displayInfo() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}, Electric: ${this.isElectric}`);
    }
};

console.log(car.brand); // Output: Toyota
console.log(car.model); // Output: Corolla
console.log(car.year); // Output: 2010

car.displayInfo(); // Output: Car: Toyota Corolla, Year: 2010, Electric: false

// **6. FUNCTION DECLARATION**

function greetUser() {
    console.log("Hello, welcome to the program!");
}

greetUser(); // Output: Hello, welcome to the program!

const farewellUser = () => {
    return "Goodbye, see you next time!";
};

console.log(farewellUser()); // Output: Goodbye, see you next time!

// **7. ADDING PARAMETERS/ARGUMENTS TO FUNCTIONS**

function calculateSum(num1, num2) {
    let sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}

calculateSum(15, 10); // Output: The sum of 15 and 10 is 25

// **8. ANOTHER WAY TO WRITE A FUNCTION USING ARROW FUNCTION**

const displayUserInfo = (name, age) => {
    return `User: ${name}, Age: ${age}`;
};

console.log(displayUserInfo("Alice", 22)); // Output: User: Alice, Age: 22
