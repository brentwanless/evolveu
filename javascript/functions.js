
console.log("Hello from functions.js v2");

function myFunction(xx, yy) {
	console.log("Hello from myFunction v2", xx, yy);
	const value_to_return = xx + "-" + yy;
	return value_to_return;
}
	
const value1 = myFunction("Rocks","Rings");
const value2 = myFunction("Coding","Fun");

console.log("v1:", value1);
console.log("v2:", value2);

const func = myFunction;

console.log(func("Hello","World"));

/*
	---------- Adding numbers exercise ----------
*/
function my_add(v1, v2, v3) {
	console.log("\nHello from my_add", v1, v2, v3);
	const value_to_return = v1 + v2 + v3;
	return value_to_return;
}

const ans12 = my_add(1,2,3);
console.log('my_add answer 1:', ans12);

console.log('my_add answer 2:',my_add(2,22,222));

/*
	---------- Create Email Address ----------
*/
function my_email(first, last) {
	console.log("\nHello from my_email - input is ", first, last);
	const value_to_return = first + "." + last + "@evolveu.ca";
	return value_to_return;
}

const ans14 = my_email('jane','smith');
console.log('my_email answer 1:', ans14);

console.log('my_email answer 1:',my_email('bill','jones'));

/*
	---------- Array sum exercise ----------
*/
const numbers = [2,4,6,8,10,12];
console.log("\narray length = ", numbers.length);
let i = 0;
let sum = 0;

function summer(array) {

// THIS "while" LOOP WORKED FIRST TIME!!
	// while (i < numbers.length) {
	// 	sum = sum + numbers[i];
	// 	i++;
	// 	console.log("\nIN SUMMER the loop countr i is = ", i);
	// 	console.log("IN SUMMER the array sum is = ", sum);
	// }

// THIS "for" LOOP now works

	for (i = 0; i < numbers.length; i++) {
		sum = sum + numbers[i];
		console.log("i ", i, "  sum", sum)
	}

	const value_to_return = sum;
	return value_to_return;
}
const ans15 = summer(numbers);
console.log("the array sum AFTER summer CALL is = ", ans15, "\n\n");

/*
	---------- String Search ----------
*/
const string_array = [
	'this is a string',
	'that is also a string',
	'what about this',
	'what about that',
];

const search1 = "this";
const search2 = "is";

strArrayLength = string_array.length;
console.log("String array length", strArrayLength);

const ans1 = look_for_string(string_array, search1);
const ans2 = look_for_string(string_array, search2);

console.log("We found '", search1, "' in", ans1, "lines");
console.log("We found '", search2, "' in", ans2, "lines");

// LOOKS LIKE NEED TO COUNT OCCURENCES OF THE search VALUES

function look_for_string(string_array, searchVal) {
	console.log("inside look_for_string with string", searchVal);
	console.log("string_array[0] = ", string_array[0]);

	let count = 0;	// counter for # of searchVal occurences
					// MUST be initialized inside the function
	for ( i=0; i < strArrayLength; i++) {
		if( string_array[i].includes(searchVal)) {
			count ++;
		}
	}

	console.log("count ", count);
	const value_to_return = count;

	return [value_to_return];
}

