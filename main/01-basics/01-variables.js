/** First function : it must return "Hello, World!" */
export function helloWorld() {
    return "Hello, World!"
}

/** 
 * Write a function that returns the sum of the two numbers passed as arguments.
 */
export function sum(a, b) {
    return a + b
}

/**
 * Write a function that converts Celcius degrees into Fahrenheit.
 * 
 * °F = °C * 9/5 + 32
 * 
 * @returns the temperature converted to Fahrenheit
 */
export function celciusToFahrenheit(celciusTemperature) {
    return (celciusTemperature * 9/5 + 32)
}

/**
 * Write a function that returns true if the provided word's length is greater than 8, false otherwise.
 * 
 * string.length() to get the length of a string.
 */
export function isGreaterThan8(word) {
    return word.length > 8
}

/**
 * Write a XOR function, which is the exclusive version of the OR
 */
export function xor(a, b) {
    return a !== b
}

/**
 * Similarily, write a XNOR function, also called equivalence, which returns true only if both boolean arguments are true or false
 */
export function xnor(a, b) {
    return !xor(a, b)
}

/**
 * Write a function that returns a text that describes the result of a division, with the format :
 * Math.floor(number) to get the integer part of a decimal
 * 
 * "quotient = 7, remainder = 3"
 */
export function divide(a, b) {
    return "quotient = " + Math.floor(a / b) + ", remainder = " + a % b
}
