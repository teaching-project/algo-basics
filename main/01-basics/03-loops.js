/**
 * Write a function that returns the index of the first occurence of an element in the provided array
 */
export function find(array, element) {
    for(let i = 0; i < array.length; ++i) {
        if(array[i] === element) {
            return i
        }
    }
}

/**
 * Write a function that return the input word with reversed letters
 * 
 * string.split("") to obtain an array of each letter of a word
 * ["w", "o", "r", "d"].join("") to join the elements of an array
 */
export function reverseString(word) {
    let wordArray = word.split("")
    let response = []
    for(let i = 0; i < wordArray.length; ++i) {
        response[i] = wordArray[wordArray.length - 1 - i]
    }
    return response.join("")
}

/**
 * Write a function to check which number is nearest to 100 among the array of numbers.
 */
 export function closestTo100AmongArray(numbers) {
     
}

/**
 * A pandemic is propagating ! Every day, the number of infected persons doubles.
 * Write a function that forecasts the number of infected people at after a given
 * [dayCount], starting from the given [initialInfectedCount] on the 1st day.
 */
export function pandemicForecast(initialInfectedCount, dayCount) {
    
}

/**
 * FizzBuzz ....
 * 
 * Write a function that takes an array or numbers as an argument and return a concatenation string
 * of its values and replace every number divisible by 3 with "fizz", every number divisible by 7
 * with "buzz" and if the number is divisible by both 3 and 7, it is replaced by "fizzbuzz"
 */
export function fizzBuzz(numbers) {

}

/**
 * Write a function that takes an array of numbers as an argument and returns an array of the same size with its items sorted.
 */
 export function sort(numbers) {

}

/**
 * Write a function that computes the result of the factorial of the provided number.
 * 
 * Factorial of n is the product of all positive integers smaller or equal to n :
 * 4! = 4 x 3 x 2 x 1
 */
export function factorial(n) {
    
}

/** 
 * Similarly, write a function that computes the result of the fibonacci sequence for the provided n integer value.
 * 
 * note: Fibonacci suite is defined as a sequence such as each number is the sum of the two preceding ones, starting from 0 and 1.
 * 
 * fibonacci(0) = 0
 * fibonacci(1) = 1
 * fibonacci(2) = 1 + 0 = 1
 * fibonacci(3) = 1 + 1 = 2
 * fibonacci(4) = 2 + 1 = 3
 * fibonacci(5) = 3 + 2 = 5
 * 
 * 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
 * 
 */
 export function fibonacci(n) {
     
}
