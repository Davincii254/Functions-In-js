function functionName(parameters) {
    // Function body: code to be executed
    // ...
    // ...
    return result; // Optional, returns a value
}

// Arrow functions syntax
const add = (a, b) => a + b;


// Arrow function as callback
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// Arrow function with multiple statements
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multiply(3, 6)); // Output: 18


// Arrow functions in array methods
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]


// Callback functions for async
function fetchData(url, callback) {
    // Simulate an asynchronous operation, e.g., making an HTTP request
    setTimeout(() => {
        const data = { id: 1, name: "John" };
        callback(data);
    }, 1000);
}

function processData(data) {
    console.log(`Received data: ${data.name}`);
}

// Using the callback to handle the fetched data
fetchData("https://example.com/api/data", processData);


// First class function
const add = (a, b) => a + b; // Assigning a function to a variable
const result = add(5, 3); // Calling the function
console.log(result); // Output: 8

function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

// Functions as parameters
function calculate(operation, a, b) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

const result1 = calculate(add, 5, 3);
const result2 = calculate(subtract, 8, 2);

console.log(result1); // Output: 8
console.log(result2); // Output: 6


// global scope
const globalVariable = "I'm in the global scope";

function exampleFunction() {
    console.log(globalVariable); // Accessible here
}

console.log(globalVariable); // Accessible here


// Local Scope
function localScopeExample() {
    const localVar = "I'm in a local scope";
    console.log(localVar); // Accessible here
}

localScopeExample();
console.log(localVar); // Error: localVar is not defined
