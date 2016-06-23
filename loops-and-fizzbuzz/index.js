/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr){
  var sum = 0;

  for (var i=0; i < arr.length; i++ ) {
    sum = sum + arr[i];
  }

  return sum;
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);


/**
 * PART 1
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b){
  return a+b;
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);


/**
 * PART 2
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

// This is the iterative method of solving GCD
function GCD(a, b){

  // Use absolute values for this calculation 
  var a = Math.abs(a);
  var b = Math.abs(b);

  // The code below this block asumes a>b
  // If b is greater than a, swap the variables
  if (b > a) {
    var temp = a; 
    a = b; 
    b = temp;
  }

  // We need an infinite loop, can use for or while

  //while (true) {
  for(;;){

      // If we're down to zero, return
      if (b === 0) { return a; }

      // If we're not to zero, set a to the a's remainder when divided by b
      a = a % b;
      
      // If we're down to zero, return
      if (a === 0) { return b; }

      // If we're not to zero, set a to b's remainder when divided by a
      b = b % a;
  }
}

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

// Additional case if the arguments are reversed
console.assert(GCD(20,50) === 10);





/**
 * PART 3
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

function LCM(a, b){
  
  var arr = [a, b];
  
  arr = arr.sort();
  min = arr[0];
  max = arr[1];

  // var arr = new Array(2);
  // arr[0] = min;
  // arr[1] = max;
  // arr = arr.sort();

  var numbers = [];
  var count = 0;

  //Here push the range of values into an array
  for (var i = min; i <= max; i++) {
    numbers.push(i);
  }
  //Here freeze a multiple candidate starting from the biggest array value - call it j
  for (var j = max; j <= 1000000; j+=max) {

    //I increase the denominator from min to max
    for (var k = arr[0]; k <= arr[1]; k++) {

      if (j % k === 0) { // every time the modulus is 0 increase a counting 
        count++; // variable
      }
    }

    //If the counting variable equals the lenght of the range, this candidate is the least common value
    if (count === numbers.length) { 
      return j; 
    }
    else{
      count = 0; // set count to 0 in order to test another candidate
    }
  }
}

// console.assert(LCM([10,10]) === 10)
console.log(LCM(2,5) === 10)
console.assert(LCM(2,5) === 10)
// console.assert(LCM(3,6) === 6)
// console.assert(LCM(0,1) === 1)
