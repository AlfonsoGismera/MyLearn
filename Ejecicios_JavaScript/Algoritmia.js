// Ejercios de Practica Básicos

// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit 
// already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
// Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

const celsiusTemperature = 30;
const fahrenheitTemperature = convertCtoF(celsiusTemperature);

console.log(`${celsiusTemperature} grados Celsius son equivalentes a ${fahrenheitTemperature} grados Fahrenheit.`);

// ---------------------------------------------------------------------------------------------------------------------------

// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".

function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString('hello');
console.log(reverseString('hello')); // Output: olleh

// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorialize(5)); // Output: 120
  console.log(factorialize(0)); // Output: 10
  console.log(factorialize(10)); // Output: 3628800