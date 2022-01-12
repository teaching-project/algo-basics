/**
 * Write a function that computes the GCD - greatest common divisor (fr: PGCD - Plus grand diviseur commun) between the two provided numbers.
 * 
 * The GCD of two numbers is the largest positive integer that divides both.
 * E.g :
 *  - GCD of 6 and 3 is 3
 *  - GCD of 15 and 25 is 5
 * 
 * You may want to use the remainder operator : "%" which returns the remainder left over when one operand is divided by a second.
 * E.g :
 *  - 5 % 2 = 1
 *  - 6 % 3 = 0
 *  - 8 % 3 = 2
 */
export function gcd(a, b) {
    if (b === 0) {
        return a
    }
    return gcd(b, a % b)
}

/**
 * Write a function that computes the LCM - least common multiple (fr: PPCM - Plus petit multiple commun) between the two provided numbers.
 *
 * The LCM of two numbers is the lowest positive integer that is multiple of both.
 *
 * E.g :
 *  - LCM of 8 and 12 is 24
 *  - LCM of 2 and 3 is 6
 */
export function lcm(a, b) {
    return a * b / gcd(a, b)
}
