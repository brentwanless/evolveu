console.log("Hello from basic.js");

// --- make me an email
// Write the function that will make this code work.

// console.log("Make me an Email");

// // ---- put function here ----

// function makeEmail( firstName, lastName) {
// 	console.log("In makeEmail");
// 	let larryEmail = firstName + "." + lastName + "@evolveu.ca";
// 	return larryEmail;
// }

// const larryEmail = makeEmail('larry', 'shumlich');
// const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

// if (larryEmail != shouldBeLarryEmail) {
// 	console.log("***** We have an error here *****",
// 		larryEmail,
// 		" is not = ",
// 		shouldBeLarryEmail,
// 		" and it should be."
// 	)
// }

// console.log("Larry:", larryEmail);

// console.log("Jane:", makeEmail("jane", "lee"));
// console.log("Bill:", makeEmail("bill", "lee"));
// console.log("Sam:", makeEmail("sam", "lee"));


// function to output to console on button click

function onButtonClicked() {

	// let idFirstName.value = 0;  // THIS DOESN'T WORK

	let total = 0;  // use this if want to sum the inputs

 	console.log("\nInside onButtonClicked function");
	console.log("The idBtnClick = ",idBtnClick);				//log the button element
	console.log("The button text = ", idBtnClick.childNodes[0]); //log button text node
   
 	total = total + parseInt(document.getElementById("inputField").value); 

	idFirstName = parseInt(document.getElementById("inputField").value);
        
	console.log("idFirstName.value plus 1 = ",idFirstName + 1);

	// if(isNaN(idFirstName)){
	// 	console.log("idFirstName is undefined = ",idFirstName);
	// }
	// else {
	// 	console.log("idFirstName is defined", idFirstName);
	// }
	console.log("total = ", total);
	document.getElementById("inputField").value="";  //reset input field

}
console.log("After button click function");

const idBtnClick = document.getElementById("idBtnClick");
idBtnClick.addEventListener("click", onButtonClicked); // call onButtonClicked function


// WHY Doesn't this call function and log to console
onButtonClicked();	// call function and console log from within


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


// Practice March 13 - assertEquals
/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---

function makeEmailArr(inputArray) {

	console.log("array 0 and 1  ", inputArray[0], inputArray[1]);

	return inputArray[0] + "." + inputArray[1] + "@evolveu.ca";
// try a string literal to concat elemnets
}

// FUNCTION needs name, input, output

// and before this comment ---

console.log("at arrayLarry");

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));
