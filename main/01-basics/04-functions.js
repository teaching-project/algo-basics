/**
 * Write a recursive function (not using loops) that computes the result of the factorial of the provided number.
 * 
 * Factorial of n is the product of all positive integers smaller or equal to n :
 * 4! = 4 x 3 x 2 x 1
 */
 export function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial (n - 1)
}

/** 
 * Similarly, Write a recursive function that computes the result of the fibonacci sequence for the provided n integer value.
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
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fibonacci(n - 2) + fibonacci(n - 1)
}

/**
 * Using recursivity, write a function that sorts the numbers in the array passed as an argument.
 * index represent the index of the current iteration. Starts at 0.
 */
export function bubbleSort(numbers, index) {
    if (index === numbers.length) {
        return numbers
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > numbers[i + 1]) {
            let swap = numbers[i]
            numbers[i] = numbers[i + 1]
            numbers[i + 1] = swap
        }
    }
    return bubbleSort(numbers, index + 1)
}
