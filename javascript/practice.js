// New practice function March 11 to receive 2 parameters and compare
/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/
// Write the function after this comment ---

console.log("\n\nPractice function March 11 to receive 2 parameters and compare");
function assertEquals(var1, var2) {
	if (var1 === var2) {
		console.log("ok-> ", var1);
		return true;
	}
	// else {  Don't need else since if true returns
	console.log("*** the two values are not the same:");
	console.log("    p1-->",var1, "\n    p2-->", var2);
	return false;
	// }
}
// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");

/* Practice March 13 - assertEquals

	Write the function to format an email based on an array
	Write the function after this comment ---
*/
console.log("\n\nPractice March 13 assertEquals create email");
function makeEmailArr(inputArray) {

	// console.log("array 0 and 1  ", inputArray[0], inputArray[1]);

	return inputArray[0] + "." + inputArray[1] + "@evolveu.ca";
// try a string literal to concat elemnets
}
// FUNCTION needs name, input, output
// and before this comment ---

console.log("\nat arrayLarry\n");

const arrayLarry1 = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry1));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));

/*	Practice March 14 - receive object/map and create email
	Write the function to format an email based on an object / map

	Write the function after this comment ---
*/
console.log("\nAt makeEmailObj\n");

function makeEmailObj(inputObject) {

// NOTE the two different ways to access the object 

	return inputObject.fname + "." + inputObject["lname"] + "@evolveu.ca";
}
/*	and before this comment
	Note that all given input data pass the test in assertEquals EXCEPT
	I changed the last by adding BW
*/

const objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jonesBW@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));


/*	Practice March 18 - Write a function that will take an array and
	return an array of emails. The new function you are writing today
	will call makeEmailObj that you written in a previous exercise.
*/
console.log("\n\nPractice function March 18 to create emails from array input");

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

// Write the function after this comment ---

function loopStaff(staffList) {
	console.log("In functionloopstaff");

	let emailArray = [];
	console.log("staffList in loopstaff", staffList[0]); //show first

	for (value of staffList){

		emailArray = makeEmailObj(staffList);
	}
	console.log("in loopstaff for loop emailArray = ", emailArray);
	return emailArray;
}
console.log('-----loopStaff');
const staffEmail = loopStaff(data.staff);
console.log("staffEmail after loopstaff call\n",staffEmail);



// and before this comment ---

assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);

/*	Extra Practice March 18 - create a "people" array with name and age,
	write a function to total the ages, and a second function
	to average the ages
*/

console.log("\nExtra Practice March 18 - create a 'people' array with name and age");

const people = [
			{name: "him", age: 20},
			{name: "her", age: 30},
			{name: "whosOnFirst", age: 15},
			{name: "whatsOnSecond", age: 25},
			{name: "whysOnThird", age: 10},
			]
let ageSum = 0;

console.log("the people array ", people);
console.log("the people array 1 element ", people[0].age);

// function to total ages in peopleArray

function totalAge(thePeople) {
	arrayLength = thePeople.length;
	console.log("in totalAge: length ", arrayLength);
	console.log("\nin totalAge people array", thePeople);

	for( i=0; i<arrayLength; i++) {

		// console.log("in totalAge for loop thePeople.age = ",thePeople[i].age);
		ageSum = ageSum + thePeople[i].age;
	}
	console.log("ageSum = ", ageSum);
	return ageSum;
}
console.log("\nReturn SUM of AGES from totalAge", totalAge(people));

// function to average ages in peopleArray

function averageAge (ageSum, arrayLength) {

	// console.log("in averageAge function ageSum and arrayLength =  ", ageSum, arrayLength);
	ageAverage = ageSum / arrayLength;
	return ageAverage;
}
ageAverage = averageAge(ageSum, arrayLength);

console.log("after averageAge call average = ", ageAverage);

/*	
Practice March 19 Noon Exercise - same assignment create emails
using two forms of 'for'
*/

function loopWithForOf(staffList) {
	console.log("in loopWithForOf function stafflist = ", staffList);

	let emailArray = [];
	for (let i of staffList) {
	
		emailArray.push(makeEmailObj(i));

		// console.log("\nIn for loop i = ", i);
	}
	// console.log("\nemailArray at return = ", emailArray,"\n\n");
	return emailArray;
}

console.log('\n\n-----emailForOf\n\n')
const emailForOf = loopWithForOf(data.staff);

console.log("GOOD - after loopWithForOf stafflist = ", emailForOf);

assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

console.log('\n\n-----emailForIn');

function loopWithForIn(staffList) {
	// console.log("in loopWithForIn function stafflist = ", staffList);

	let emailArray = [];
	for ( i in staffList) {
	
		// console.log("in for loop staffList[i] = ", staffList[i]);
		emailArray.push((makeEmailObj(staffList[i]) ));

	}
	// console.log("\nemailArray at return = ", emailArray,"\n\n");
	return emailArray;
}

const emailForIn = loopWithForIn(data.staff);
console.log("\nGOOD - emailArray after return loopWithForIn = ", emailForIn,"\n");

assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6])

/*	
	Practice March 20 - repeat the "data.staff" array to create emails 
	using CALLBACK FUNCTIONS
*/

console.log("\n\nPractice March 20 - loopWithEach and loopWithMap callbacks\n");

console.log('-----emailWithEach');

function loopWithEach (staffList) {

	let localArray = [];
	console.log("in loopWithEach  ", i, staffList);

	// staffList.forEach( localArray.push(makeEmailObj(staffList ) ));

	staffList.forEach(function(item) {  // CREATE A FUNCTION TO REPLACE ANONYMOUS function
		localArray.push(makeEmailObj(item))
		});

	console.log("in function loopWithEach  localArray = ", localArray);
	return localArray;
} 

const emailWithEach = loopWithEach(data.staff); // Larrys

console.log("emailWithEach after function loopWithEach", emailWithEach);

assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);



console.log('\n\n-----emailWithMap');

function loopWithMap (staffList) {
	let newEmailArray = [];

	newEmailArray = staffList.map(makeEmailObj); //MAKEEMAILOBJ IS THE CALLBACK
	return newEmailArray;
}
const emailWithMap = loopWithMap(data.staff);

console.log("emailWithMap = ", emailWithMap);

assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);

/*	Practice March 21 - More array excercises
Do not use JavaScript functions like total, sum.

write a function to receive the same array (staff) and return the total of balances
create a table of objects of people having name and age
write a function to receive the above array and return the total of the ages
write a function to receive the above array and return the average the ages
*/

console.log('\n-----sumBalance\n\n');

function sumBalance (staffListBalance) {
	let sum = 0;
	let i = 0;
	length = staffListBalance.length;
	console.log("in sumBalance staffListBalance  ", length, staffListBalance);

	for (i=0; i<length; i++) {

		// console.log("staffListBalance  ", staffListBalance[i].balance);

		sum = sum + staffListBalance[i].balance;
	}
	// console.log("sum  ", sum);
return sum;
}
console.log( sum = sumBalance(data.staff));


console.log('\n-----create table of objects with people name and age\n\n');
console.log("Created in practice.htm to display in Body\n");


console.log('\n-----function to receive array and total ages\n');

function sumTableAges (table) {

	let totalAge = 0;
	for ( i = 0; i < table.rows.length; i++ ) {

		totalAge = totalAge + Number(table.rows[i].cells[1].innerHTML);

		console.log("\ntable ", i, 1, table.rows[i].cells[1]);
	}
	return totalAge;
}
console.log("totalAge = ", total = sumTableAges(bwTable));


console.log('\n-----function to receive array and average the ages\n');

function avgTableAges (table) {

	let avgAge = 0;
	for ( i = 0; i < table.rows.length; i++ ) {

		avgAge = avgAge + Number(table.rows[i].cells[1].innerHTML);
	}
	avgAge = avgAge / table.rows.length;
	return avgAge;
}
console.log("avgAge = ", average =avgTableAges(bwTable));
console.log("avgAge rounded = ", average = Math.round(avgTableAges(bwTable)));
