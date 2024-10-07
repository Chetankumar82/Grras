//question 1  Declare variables of all primitive datatypes (string, number, boolean, null,undefined) and log their types using the `typeof` operator.


// Declare variables
let str = "Hello, world!";    // string
let num = 42;                 // number
let bool = true;              // boolean
let undef;                    // undefined
let nul = null;               // null

// Log the types
console.log(typeof str);    // "string"
console.log(typeof num);    // "number"
console.log(typeof bool);   // "boolean"
console.log(typeof undef);  // "undefined"
console.log(typeof nul);    // "object" 


//question 2 Create an object with at least five properties of different types and a method that logs one of the properties.

let obj = {
    name: "Chetan",
    age: 20,
    isMarried: false,
    occupation: "Software Engineer",
    sayHello: function() {
        console.log("Hello, I am " + this.name);
    }
};
console.log(obj.name);    // "Chetan"
console.log(obj.age);     // 20
console.log(obj.isMarried);  // false
console.log(obj.occupation);  // "Software Engineer"
obj.sayHello();  // "Hello, I am Chetan"



//question 3  Write a program to check if a number is positive, negative, or zero using if else statements.

let num1 = 10;
if (num1 > 0) {
    console.log("The number is positive");
} else if (num1 < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}   


//question 4  Write a program that categorizes a person's age into groups: child (012),teenager (1319), adult (2059), and senior (60 and above).

let age = 20;
if (age >= 60) {
    console.log("Senior");
} else if (age >= 20) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}   


//question 5 Write a function that prints the first `n` Fibonacci numbers.

function fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
}
fibonacci(100);


//question 6 Create a program that prints the multiplication table of a given number using a for loop.

let num2 = 5;
for (let i = 1; i <= 10; i++) {
    console.log(num2 + " x " + i + " = " + (num2 * i));
}


//question 7 Write a function that takes an array and prints all its elements using a forof loop.

function printArray(arr) {
    for (let elem of arr) {
        console.log(elem);
    }
}
printArray([1, 2, 3, 4, 5]);


//question 8 Write a program that reverses a given string using a for loop.

let str1 = "Hello, world!";
let reversed = "";
for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
}
console.log(reversed);  // "!dlrow ,olleH"


//question 9 Create a function that checks if a given number is a prime number.

function isPrime(num) {
    // Check if num is less than 2, which is not prime
    if (num <= 1) {
        return false;
    }

    // Check if num is 2, which is prime
    if (num === 2) {
        return true;
    }

    // Check if num is even, which is not prime
    if (num % 2 === 0) {
        return false;
    }

    // Check for factors from 3 to the square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}


console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(4));   // false
console.log(isPrime(29));  // true
console.log(isPrime(100)); // false



/*question 10   Write a program to print the following pattern:
 *
 **
 ***
 ****
 *****
 */

 for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}


/* question 11 Write a program to print the following pattern:
 *****
 ****
 ***
 **
 *
*/
console.log("pattern 11")
for (let i = 5; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}


/* question 12 
Write a program to print the following pattern:
    *
   ***
  *****
 *******
 */
console.log("pattern 12")
function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let str = '';
        // Print spaces
        for (let j = 0; j < rows - i - 1; j++) {
            str += ' ';
        }
        // Print stars
        for (let k = 0; k < 2 * i + 1; k++) {
            str += '*';
        }
        console.log(str);
    }
}
printPattern(4);

//question 13 Write a function that takes two numbers and returns their sum.
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5, 10));  // 15
console.log(sum(10, 5));  // 15
console.log(sum(10, 10));  // 20
console.log(sum(5, 5));  // 10



//question 14 Create an IIFE (Immediately Invoked Function Expression) that logs "Hello,World!" to the console.
(function () {
    console.log("Hello, World!");
})();


//question 15 Write a function that takes an array of numbers and returns the maximum number.
function max(arr) {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}
let arr = [5, 10, 3, 8, 2];
console.log(max(arr));  // 10

//question 16 Write a function that returns the factorial of a number.
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(10));  // 3628800


//question 17 Write a higherorder function that takes a function and a number as arguments and calls the function that many times.
function callFunction(func, num) {
    for (let i = 0; i < num; i++) {
        func();
    }
}
let func = function () {
    console.log("Hello, World!");
};
callFunction(func, 5);

//question 18 Create a class `Person` with properties for `name` and `age`, and a method `introduce` that logs a greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person1 = new Person("Chetan", 20);
person1.introduce();  // "Hi, my name is Chetan and I am 20 years old."

//question 19 end the `Person` class to create a `Student` class with an additional property for `grade`, and override the `introduce` method to include the grade in the greeting.
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`);
    }
}
let student1 = new Student("Chetan", 18, 12);
student1.introduce();  // "Hi, my name is Chetan, I am 18 years old, and I am in grade 12."

//question 20 Write a class `Rectangle` with properties for width and height, and a method `getArea` that returns the area of the rectangle.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
let rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.getArea());  // 50


//question 21 Create a class `BankAccount` with properties for `balance` and methods for `deposit` and `withdraw`.
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
}
let account1 = new BankAccount(1000);
account1.deposit(500);
account1.withdraw(200);
console.log(account1.balance);  // 1300


//question 22 Write a function that uses the Fetch API to get data from a public API (e.g.,JSONPlaceholder) and logs the data to the console.
function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}
getData();

//question 23 Create a function that fetches data from an API and displays the data on a webpage.
/*function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => {
            let html = `<h1>Todo ${data.id}</h1>`;
            html += `<p>${data.title}</p>`;
            html += `<p>${data.body}</p>`;
            document.body.innerHTML = html;
        });
}
getData();
*/


//question 24  Write a function that posts data to an API and logs the response. 
function postData() {
    let data = {
        title: "Buy groceries",
        body: "Milk, bread, eggs, and fruit"
    };
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}
postData();


//question 25 .Write a program that changes the background color of a webpage when a button is clicked.
document.querySelector(".btn").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
}); 



//question 26  Create a function that adds a new list item to an unordered list when a button is clicked.
document.querySelector(".btn1").addEventListener("click", function () {
    let listItem = document.createElement("li");
    listItem.textContent = "New Item";
    document.querySelector("ul").appendChild(listItem);
}); 

//question 27 Write a script that counts the number of paragraphs in a webpage and displays the count in an alert box.
let paragraphs = document.querySelectorAll("p");
let count = paragraphs.length;
alert(count);




//question 28  Create a form that takes user input and displays the input on the webpage when the form is submitted.
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let input = document.querySelector("input");
    let message = document.querySelector("p");
    message.textContent = input.value;
}); 

//question 29 Write a script that toggles the visibility of an image when a button is clicked.
document.querySelector(".btn2").addEventListener("click", function () {
    let image = document.querySelector("img");
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}); 

//Question 30 
//Create a simple todo list application that allows users to add, mark as complete, and delete tasks. Use all the concepts covered: data types, ifelse, loops, functions, classes, fetch method (for storing/retrieving data from a mockAPI), and DOM manipulation.





