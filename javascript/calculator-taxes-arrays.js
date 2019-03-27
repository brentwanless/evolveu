/*
	New Section for Calculator
*/
console.log("Start of calculator section\n\n");

//  Code for add function

function myAddFunc() {
	console.log("In myAddFunc function");
	let input1 = Number(document.getElementById("input1").value);	// Inputs from body box
	let input2 = Number(document.getElementById("input2").value);

	// Output to body the operation and result

	document.getElementById("operand").textContent = "The operand is Addition.";
	document.getElementById("values").textContent = "The values are " + input1 +" and " + input2;
	document.getElementById("result").textContent = "The result = " + (input1 + input2);

	console.log("Inputs 1 and 2 are ", input1," and ", input2);
	console.log("The sum is = ", input1 + input2, "\n\n");
}
const addBtnPush = document.getElementById("addBtn");
addBtnPush.addEventListener("click", myAddFunc);	// on button click call function

console.log("Start of myAddFunc input1 = ", input1);

//  Code for subtract function

function mySubtractFunc() {
	console.log("In mySubtractFunc function");
	let input1 = Number(document.getElementById("input1").value);	// Inputs from body box
	let input2 = Number(document.getElementById("input2").value);

	// Output to body the operation and result

	document.getElementById("operand").textContent = "The operand is Subtraction.";
	document.getElementById("values").textContent = "The values are " + input1 +" and " + input2;
	document.getElementById("result").textContent = "The result = " + (input1 - input2);

	console.log("Inputs 1 and 2 are ", input1," and ", input2);
	console.log("The subtratcion is = ", input1 - input2, "\n\n");
}
const subtractBtnPush = document.getElementById("subtractBtn");
subtractBtnPush.addEventListener("click", mySubtractFunc);	// on button click call function

//  Code for multiply function

function myMultiplyFunc() {
	console.log("In myMultiplyFunc function");
	let input1 = Number(document.getElementById("input1").value);	// Inputs from body box
	let input2 = Number(document.getElementById("input2").value);

	// Output to body the operation and result

	document.getElementById("operand").textContent = "The operand is Multiply.";
	document.getElementById("values").textContent = "The values are " + input1 +" and " + input2;
	document.getElementById("result").textContent = "The result = " + (input1 * input2);

	console.log("Inputs 1 and 2 are ", input1," and ", input2);
	console.log("The multiplication is = ", input1 * input2, "\n\n");
}
const multiplyBtnPush = document.getElementById("multiplyBtn");
multiplyBtnPush.addEventListener("click", myMultiplyFunc);	// on button click call function

//  Code for divide function

function myDivideFunc() {
	console.log("In myDivideFunc function");
	let input1 = Number(document.getElementById("input1").value);	// Inputs from body box
	let input2 = Number(document.getElementById("input2").value);

	// Output to body the operation and result

	document.getElementById("operand").textContent = "The operand is myDivideFunc.";
	document.getElementById("values").textContent = "The values are " + input1 +" and " + input2;
	document.getElementById("result").textContent = "The result = " + (input1 / input2);

	console.log("Inputs 1 and 2 are ", input1," and ", input2);
	console.log("The division is = ", input1 / input2, "\n\n");
}
const divideBtnPush = document.getElementById("divideBtn");
divideBtnPush.addEventListener("click", myDivideFunc);	// on button click call function

/*
	New Section for Canadian Taxes
*/
console.log("\n\nStart of Taxes section\n\n");

function myTaxFunc() {
	let taxIncome = Number(document.getElementById("taxIncome").value);
	console.log("In myTaxFunc taxincome = ", taxIncome);

	// Test which tax bracket taxIncome is within

	if (taxIncome <= 47630) {
		taxDue = taxIncome * 0.15;
		console.log("taxDue = ", taxDue);

	}	else if (taxIncome > 47630 && taxIncome <= 95259) {
		taxDue = (taxIncome - 47630) * 0.205 + 7145;
		console.log("taxDue = ", taxDue);

	}	else if	(taxIncome > 95259 && taxIncome <= 147667) {
		taxDue = (taxIncome - 95259) * 0.26 + 16908;
		console.log("taxDue = ", taxDue);

	}	else if	(taxIncome > 147667 && taxIncome <=210371) {
		taxDue = (taxIncome - 147667) * 0.29 + 30535;
		console.log("taxDue = ", taxDue);

	}	else {
		taxDue = (taxIncome - 210371) * 0.33 + 48719;
		console.log("taxDue = ", taxDue);1000000
	}

}
const taxBtnPush = document.getElementById("taxBtn"); //button id
taxBtnPush.addEventListener("click", myTaxFunc);

console.log("taxIncome definition in js = ", taxIncome);

/*
	New Section - Working with Arrays
*/
console.log("\n\nWorking with Arrays\n\n");

// TRY DIV TAG TO GROUP ARRAY ELEMENTS FOR CSS STYLE

// set up the array


let definedArray = [2,4,6,8,10];
definedArrayLength = definedArray.length;
console.log("defined Array and Length ", definedArray, definedArrayLength);

// Function to process arrayAddBtn

function inputAddFunc() {

	let inputVal = document.getElementById("arrayIptValue").value;

	// console.log((document.getElementById("arrayIptValue").value));
	console.log("inputVal = ", inputVal);

	if(isNaN(inputVal)) {
		console.log("inputVal is NaN", inputVal);
		document.getElementById("output").value = "Input is NaN = " + inputVal;

// CAN'T print string value?

	} else {
		console.log("Add to the array");

		definedArray[definedArray.length] = Number(inputVal);	// add input value to array
		definedArrayLength = definedArray.length;	//update the array length

		document.getElementById("output").value = "New array input = " + inputVal;
		console.log("New array = ", definedArray);
	}
}
// Function to process arrayShowBtn

function inputShowFunc() {

	console.log("The array contents are:\n", definedArray);
	document.getElementById("output").value = "Array: " + definedArray;
}
// Function to process arrayTotalBtn

function inputTotalFunc() {
	let total = 0;
	for (i=0; i<definedArrayLength; i++) {
		total = total + definedArray[i];
	}
	document.getElementById("output").value = "Array total = " + total;
	console.log("The array contents are:\n", definedArray);
	console.log("The sum = ", total);
}
// Function to process arrayClearBtn

function inputClearFunc() {
	definedArray = [];
	definedArrayLength = definedArray.length;
	document.getElementById("output").value = "";
	console.log("cleared definedArray and length ", definedArray, definedArrayLength);

}
// EventListener for arrayAddBtn

arrayBtnPush = document.getElementById("arrayAddBtn");
arrayBtnPush.addEventListener("click", inputAddFunc);

// EventListener for arrayShowBtn

arrayBtnPush = document.getElementById("arrayShowBtn");
arrayBtnPush.addEventListener("click", inputShowFunc);

// EventListener for arrayTotalBtn22

arrayBtnPush = document.getElementById("arrayTotalBtn");
arrayBtnPush.addEventListener("click", inputTotalFunc);

// EventListener for arrayClearBtn

arrayBtnPush = document.getElementById("arrayClearBtn");
arrayBtnPush.addEventListener("click", inputClearFunc);

console.log("arrayIptValue = ", Number(document.getElementById("arrayIptValue").value));
console.log("const arrayBtnPush = ", arrayBtnPush, "\n\n");

// </div>
