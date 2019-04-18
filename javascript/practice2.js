
// Practice March 21 - several exercises

// Array filter - filter array elements

let wordArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = wordArray.filter(word => word.length > 6);

console.log("Filtered array words over 6 characters = ", result);
// expected output: Array ["exuberant", "destruction", "present"]

// Array map - map array elements to a new array
var array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);  // pass a function to map
									// example doubles each array value
console.log("\narray mapped to doubled values = ", map1);					// expected output: Array [2, 8, 18, 32]

// Sort an array based on UTF-16 code values

let months = ['March', 'Jan', 'Feb', 'Dec'];
console.log("Original month list = ", months);

months.sort();
console.log("Sorted month list in place = ", months);	// expected output: Array ["Dec", "Feb", "Jan", "March"]

let array2 = [1, 30, 4, 21, 100000];
array2.sort();
console.log("Sorted number list in place = ", array2);	// expected output: Array [1, 100000, 21, 30, 4]

// Array reducer - reduce array to single value

const array3 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log("\nreducer with array3 => ", array3, "\n")
console.log(array3.reduce(reducer));	//passes call to arrow function
										// expected output: 10

// 5 + 1 + 2 + 3 + 4 => passes value 5 plus array1 to reducer
console.log("reducer with value 5 plus array3\n")
console.log(array3.reduce(reducer, 5)); // expected output: 15

// array "every" function, test elements against a function

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}
let currentValue = 40;
let array4 = [1, 30, 39, 29, 10, 13];

console.log("\nBelow threshold test - return TRUE if all pass\n");
console.log("array4 = ", array4, "\nthreshold = ", currentValue);

console.log(array4.every(isBelowThreshold));	// expected output: true

// Array "some" function - test if ONE array element passes test from function

let array5 = [1, 2, 3, 4, 5];

let even = function(element) {
  // checks whether an element is even
  console.log("array element value = ", element);
  return element % 2 === 0;			// % is modulus operator
  									// return st FIRST pass of test
};
console.log(array5.some(even));	// expected output: true

// array find function - return FIRST element that satisfies test function

let array6 = [5, 12, 8, 130, 44];
let threshold = 40;
console.log("\nArray find function: array6 = ", array6, "\nthreshold = ", threshold);

let found = array6.find(function(element) {
  return element > threshold;
});
console.log("the first element above threshold = ", found);		// expected output: 12


// Array function "findIndex" returns index of first that satifies test function

let array7 = [5, 12, 8, 130, 44];
threshold = 13;

console.log("\nArray 'isLargeNumber' function: array7 = ", array7, "\nthreshold = ", threshold);

function isLargeNumber(element) {
  return element > threshold;
}
// expected output is the INDEX of the first element passing test
console.log("The index of elemnt passing test = ", array7.findIndex(isLargeNumber));

/*
	Practice March 28 - More Array Exercises
*/
const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};
function assertEquals(var1, var2) {
	if (var1 === var2) {
		console.log("ok-> ", var1);
		return true;
	}
	console.log("*** the two values are not the same:");
	console.log("    p1-->",var1, "\n    p2-->", var2);
	return false;
}

let largeBalances = data.staff;
console.log("largeBalances" , largeBalances);

largeBalances = data.staff.filter(word => Number(word) >= 1000);

console.log("data.staff" , data.staff);
console.log("largeBalances" , largeBalances);

assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");


// let wordArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = wordArray.filter(word => word.length > 6);

