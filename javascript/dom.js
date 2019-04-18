
const divClick = document.getElementById("bwDiv");
const bwListClick = document.getElementById("bwList");

const button = document.getElementById("enter");
const input = document.getElementById("itemInput");
const ol = document.querySelector("ol");

divClick.addEventListener("click", myDivFunc);
bwListClick.addEventListener("click", mybwListFunc);

let clearBtnValue = false;
let listBtnValue = false;

function mybwListFunc() {
	listBtnValue = true;
	console.log("Clicked on the bwList body\nlistClick = ", bwListClick);
}

function myDivFunc() {
	if(clearBtnValue) {
		return;
	}	else if ( listBtnValue ) {
	console.log("Clicked on the div body\ndivClick = ", divClick);
	}
}
// Function to process showBtn

function showFunc() {

	let list = document.getElementsByTagName("ol")[0];

	console.log("The <ol> children list is ", list);
}
// Function to add a list element

function addFunc() {

	let node = document.createElement("li");
	let itemName = "";
	
	let textnode = document.createTextNode("Water " + icount);

	node.appendChild(textnode);
	document.getElementById("bwList").appendChild(node);
	console.log("in addFunc new list is ", bwList);

	icount++;
}

function insertFunc() {

	let node = document.createElement("li");
	let textnode = document.createTextNode("Clouds " + icount);

	node.appendChild(textnode);

	let sp1 = document.getElementById("bwList");

	sp1.insertBefore(node, sp1.childNodes[0]);

	console.log("in insertFunc new list is ", bwList);

	icount++;
}

function deleteFunc() {

	console.log("in delete button");

	let itemNumber = prompt("which item do you want to delete? ");
	itemNumber--;
	console.log("itemNumber = ", itemNumber);

	list = document.getElementsByTagName("li")[0];
	console.log("list in deleteFunc  ", list);

	deleteItem = document.getElementsByTagName("li")[itemNumber];
	console.log("deleteItem = ", deleteItem);
	bwList.removeChild(deleteItem);
}

function clearScreens() {
	clearBtnValue = true;
	console.clear();
	document.getElementsByTagName('BODY')[0].innerHTML = "";
	document.writeln("<h1>Working with Cards");
}

let icount = 1;	// counter for add list function

showBtnPush = document.getElementById("showBtn");
showBtnPush.addEventListener("click", showFunc);

addBtnPush = document.getElementById("addBtn");
addBtnPush.addEventListener("click", addFunc);

insertBtnPush = document.getElementById("insertBtn");
insertBtnPush.addEventListener("click", insertFunc);

deleteBtnPush = document.getElementById("deleteBtn");
deleteBtnPush.addEventListener("click", deleteFunc);

clearBtnPush = document.getElementById("clearBtn");
clearBtnPush.addEventListener("click", clearScreens);

function inputLength() {
	return itemInput.value.length
}

function createElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(itemInput.value));
	ol.appendChild(li);
	itemInput.value = "";
}

button.addEventListener("click", function() {
	if (inputLength() > 0) {
		createElement();
	}
});

input.addEventListener("keypress", function(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createElement();
	}
});
