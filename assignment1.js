//Ques 1 . Write a program to print Hello world in the console 
console.log("Hello world");

//Ques 2. Write a program to check prime numbers . Complete the task and give 
// program to check if a number is prime or not

const number = parseInt(prompt("Enetr any Number"));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is not prime.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
