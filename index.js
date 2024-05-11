"use strict";
/*Assignment
Typescript Fundaments Practice Question

Submitted By: Muhammad Shahzaib Anwar
Roll No: PIAIC240606 */
//Question 1
console.log("--------------------------Question 1----------------------------");
console.log("Hello World");
//Question 2
console.log("--------------------------Question 2----------------------------");
let temperature;
temperature = 5;
if (temperature < 20) {
    console.log("it's cold!");
}
//Question 3
console.log("--------------------------Question 3----------------------------");
let applesYouHave = 10;
let applesGiveAway = 3;
let applesLeft = applesYouHave - applesGiveAway;
console.log(applesLeft);
//Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
console.log("--------------------------Question 4----------------------------");
let firstName = "Shahzaib";
let lastName = "Anwar";
let combinedName = `${firstName} ${lastName}`;
console.log(combinedName);
//Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
console.log("--------------------------Question 5----------------------------");
if (5 > 3) {
    console.log("Yes");
}
//Question 6
//Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
console.log("--------------------------Question 6----------------------------");
function calculateArea(radius) {
    return 3.1416 * radius;
}
let areaOfCirculeOfRadius2 = calculateArea(2);
console.log(areaOfCirculeOfRadius2);
//Question 7
//Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
console.log("--------------------------Question 7----------------------------");
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
console.log("--------------------------Question 8----------------------------");
let temperatures = [5, 10, 15, 20, 25];
temperatures.forEach(element => {
    let IsGreatest = false;
    for (let i = 0; i < temperatures.length; i++) {
        if (element == temperatures[i]) {
            continue;
        }
        if (element > temperatures[i]) {
            IsGreatest = true;
        }
        else {
            IsGreatest = false;
            break;
        }
    }
    if (IsGreatest) {
        console.log(element);
        return;
    }
});
//Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
console.log("--------------------------Question 9----------------------------");
const minorOrAdult = (Age) => {
    if (Age <= 18) {
        console.log("You are a minor");
    }
    else {
        console.log("You are an adult");
    }
};
minorOrAdult(14);
//Write a function that takes an array of numbers and returns the count of positive numbers in the array.
console.log("--------------------------Question 10----------------------------");
const positiveNumberCount = (inputArray) => {
    let count = 0;
    inputArray.forEach(element => {
        if (element > 0) {
            count++;
        }
    });
    return count;
};
let positiveNumbersInArray = positiveNumberCount([-2, -1, 0, 1, 2, 3, 4, 5]);
console.log(positiveNumbersInArray);
//Arrays and Array Methods
//Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
console.log("--------------------------Question 11----------------------------");
function newArrayOfWordsStartingWithA(inputArray) {
    return inputArray.filter(function (value, index, array) {
        return value.toLowerCase().startsWith('a');
    });
}
const words = ["apple", "banana", "apricot", "orange", "grape"];
const wordsWithA = newArrayOfWordsStartingWithA(words);
console.log(words);
console.log(wordsWithA);
//Create a script that logs the second to last element of an array named fruits.
console.log("--------------------------Question 12----------------------------");
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
if (fruits.length >= 2) {
    console.log("Second to last element:", fruits[fruits.length - 2]);
}
else {
    console.log("Array has fewer than two elements.");
}
//Develop a function that takes an array of numbers and returns a new array with each number squared.
console.log("--------------------------Question 13----------------------------");
function squareNumbers(numbers) {
    return numbers.map(number => number * number);
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers);
//Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
console.log("--------------------------Question 14----------------------------");
function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);
//Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
console.log("--------------------------Question 15----------------------------");
function countExceedsAndFalls(scores) {
    if (scores.length === 0) {
        console.log("No scores provided.");
        return;
    }
    let maxScore = scores[0];
    let minScore = scores[0];
    let exceedsCount = 0;
    let fallsCount = 0;
    for (const score of scores) {
        if (score > maxScore) {
            exceedsCount++;
            maxScore = score;
        }
        else if (score < minScore) {
            fallsCount++;
            minScore = score;
        }
    }
    console.log(`Number of times score exceeded maximum score: ${exceedsCount}`);
    console.log(`Number of times score fell below minimum score: ${fallsCount}`);
}
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countExceedsAndFalls(scores);
//Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
console.log("--------------------------Question 16----------------------------");
function removeFalsyValues(arr) {
    return arr.filter(value => Boolean(value));
}
const givenArray = [false, null, 0, "", undefined, NaN, "apple", 10, true];
const filteredArray = removeFalsyValues(givenArray);
console.log(filteredArray); // Output: ["apple", 10, true]
//Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
console.log("--------------------------Question 17----------------------------");
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2]; //The spread operator ...
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
//Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
console.log("--------------------------Question 18----------------------------");
function sumOfElements(arr, isEven) {
    return arr.reduce((sum, current) => {
        if (isEven && current % 2 === 0) {
            return sum + current; // Add even numbers
        }
        else if (!isEven && current % 2 !== 0) {
            return sum + current; // Add odd numbers
        }
        else {
            return sum; // Otherwise, do not add
        }
    }, 0);
}
const numbers_1 = [1, 2, 3, 4, 5, 6];
const sumOfEvenNumbers = sumOfElements(numbers_1, true);
const sumOfOddNumbers = sumOfElements(numbers_1, false);
console.log("Sum of even numbers:", sumOfEvenNumbers); // Output: 12 (2 + 4 + 6)
console.log("Sum of odd numbers:", sumOfOddNumbers); // Output: 9 (1 + 3 + 5)
//Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
console.log("--------------------------Question 19----------------------------");
function findIndexInArray(arr, element) {
    const index = arr.indexOf(element);
    return index !== -1 ? index : -1;
}
// Example usage:
const numbers_2 = [1, 2, 3, 4, 5];
const index1 = findIndexInArray(numbers_2, 3); // Element 3 exists at index 2
const index2 = findIndexInArray(numbers_2, 6); // Element 6 doesn't exist in the array
console.log("Index of element 3:", index1); // Output: 2
console.log("Index of element 6:", index2); // Output: -1
//Write a function to find and return the smallest number in an array of integers.
console.log("--------------------------Question 20----------------------------");
function findSmallestNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty.");
    }
    let smallestElement = numbers[0]; // Initialize with the first element
    let isSmallest = false;
    for (let i = 1; i < numbers.length; i++) { // Start loop from the second element
        const currentNumber = numbers[i];
        isSmallest = true; // Assume current number is smallest initially
        numbers.forEach(element => {
            if (element < currentNumber) { // Compare with other elements
                isSmallest = false;
            }
        });
        if (isSmallest) {
            smallestElement = currentNumber; // Update smallestElement if currentNumber is smaller
            break; // Exit loop if smallest number found
        }
    }
    return smallestElement;
}
// Example usage:
const numbers_3 = [4, 7, 2, 9, 1, 5];
const smallestNumber = findSmallestNumber(numbers_3);
console.log("Smallest number:", smallestNumber); // Output: 1
//Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
console.log("--------------------------Question 21----------------------------");
function calculateProduct(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty.");
    }
    return numbers.reduce((product, current) => product * current, 1);
}
// Example usage:
const numbers_4 = [1, 2, 3, 4, 5];
const product = calculateProduct(numbers_4);
console.log("Product:", product); // Output: 120 (1 * 2 * 3 * 4 * 5)
//Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
console.log("--------------------------Question 22----------------------------");
function filterByLength(strings, n) {
    return strings.filter(str => str.length > n);
}
// Example usage:
const words_1 = ["apple", "banana", "orange", "grape", "kiwi"];
const filteredWords = filterByLength(words_1, 5);
console.log(filteredWords); // Output: ["banana", "orange"]
//Create a function findDuplicates that finds and logs all duplicates in an array.
console.log("--------------------------Question 23----------------------------");
function findDuplicates(arr) {
    const duplicatesMap = new Map();
    // Count occurrences of each element
    arr.forEach(element => {
        if (duplicatesMap.has(element)) {
            duplicatesMap.set(element, duplicatesMap.get(element) + 1);
        }
        else {
            duplicatesMap.set(element, 1);
        }
    });
    // Log duplicates
    duplicatesMap.forEach((count, element) => {
        if (count > 1) {
            console.log(`${element} appears ${count} times.`);
        }
    });
}
// Example usage:
const array = [1, 2, 3, 2, 4, 5, 4, 6, 7, 8, 7];
findDuplicates(array);
//Write a function incrementAll that takes an array of integers and increments each element by one.
console.log("--------------------------Question 24----------------------------");
function incrementAll(numbers) {
    return numbers.map(number => number + 1);
}
// Example usage:
const array_1 = [1, 2, 3, 4, 5];
const incrementedArray = incrementAll(array_1);
console.log(incrementedArray); // Output: [2, 3, 4, 5, 6]
//Develop a function countOccurrences that counts how many times a specific element appears in an array.
console.log("--------------------------Question 25----------------------------");
function countOccurrences(arr, element) {
    return arr.reduce((count, current) => (current === element ? count + 1 : count), 0);
}
// Example usage:
const array_2 = [1, 2, 3, 2, 4, 5, 2, 6, 7, 8, 2];
const count = countOccurrences(array_2, 2);
console.log("Number of occurrences of 2:", count); // Output: 4
//Create a function isSorted that checks if an array is sorted in ascending order.
console.log("--------------------------Question 26----------------------------");
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
const array_3 = [1, 2, 3, 4, 5];
const array_4 = [1, 3, 2, 4, 5];
console.log("Is array1 sorted?", isSorted(array_3)); // Output: true
console.log("Is array2 sorted?", isSorted(array_4)); // Output: false
//Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
console.log("--------------------------Question 27----------------------------");
function formatNames(names) {
    if (names.length === 0) {
        return "";
    }
    else if (names.length === 1) {
        return names[0];
    }
    else if (names.length === 2) {
        return `${names[0]} and ${names[1]}`;
    }
    else {
        const commaSeparatedNames = names.slice(0, -2).join(", ");
        const lastTwoNames = names.slice(-2).join(" and ");
        return `${commaSeparatedNames}, ${lastTwoNames}`;
    }
}
const names1 = ["Alice", "Bob", "Charlie", "David"];
console.log(formatNames(names1)); // Output: "Alice, Bob, Charlie and David"
const names2 = ["Alice", "Bob"];
console.log(formatNames(names2)); // Output: "Alice and Bob"
const names3 = ["Alice"];
console.log(formatNames(names3)); // Output: "Alice"
const names4 = [];
console.log(formatNames(names4)); // Output: ""
//Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
console.log("--------------------------Question 28----------------------------");
function convertFahrenheitToCelsius(temperaturesFahrenheit) {
    const temperaturesCelsius = temperaturesFahrenheit.map(fahrenheit => (fahrenheit - 32) * 5 / 9);
    console.log("Temperatures in Celsius:", temperaturesCelsius);
}
// Example usage:
const fahrenheitTemperatures = [32, 68, 86, 104];
convertFahrenheitToCelsius(fahrenheitTemperatures);
//Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
console.log("--------------------------Question 29----------------------------");
function minMaxAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty.");
    }
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    return { min, max, average };
}
// Example usage:
const numbers_5 = [1, 2, 3, 4, 5];
const result = minMaxAverage(numbers_5);
console.log("Minimum:", result.min); // Output: 1
console.log("Maximum:", result.max); // Output: 5
console.log("Average:", result.average); // Output: 3
//Create a function swapElements that swaps two specified indices in an array.
console.log("--------------------------Question 30----------------------------");
function swapElements(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Indices are out of range.");
    }
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
// Example usage:
const array_5 = [1, 2, 3, 4, 5];
swapElements(array_5, 1, 3);
console.log(array); // Output: [1, 4, 3, 2, 5]
//Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
console.log("--------------------------Question 31----------------------------");
function countCharacterOccurrences(inputString, character) {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charAt(i) === character) {
            count++;
        }
    }
    return count;
}
// Example usage:
const inputString = "hello world";
const characterToCount = "o";
const occurrences = countCharacterOccurrences(inputString, characterToCount);
console.log(`The character "${characterToCount}" appears ${occurrences} times in the string.`);
//Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
console.log("--------------------------Question 32----------------------------");
const todoList = [
    { task: "Buy groceries", completed: false },
    { task: "Do laundry", completed: true },
    { task: "Clean the house", completed: false }
];
function logIncompleteTasks(todoList) {
    todoList.forEach(item => {
        if (!item.completed) {
            console.log(item.task);
        }
    });
}
// Example usage:
logIncompleteTasks(todoList);
//Write a function that takes an array of integers and sorts them from smallest to largest.
console.log("--------------------------Question 33----------------------------");
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
// Example usage:
const numbers_6 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const sortedNumbers = sortArray(numbers_6);
console.log("Sorted array:", sortedNumbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]
//Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
console.log("--------------------------Question 34----------------------------");
function logArrayInReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
// Example usage:
const array_6 = [1, 2, 3, 4, 5];
logArrayInReverse(array_6);
//Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
console.log("--------------------------Question 35----------------------------");
function calculate(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return operand1 / operand2;
        default:
            throw new Error("Invalid operator.");
    }
}
// Example usage:
const operand1 = 5;
const operand2 = 10;
const operator = "*";
try {
    const result = calculate(operator, operand1, operand2);
    console.log("Result:", result);
}
catch (error) {
    console.log("Error:");
}
