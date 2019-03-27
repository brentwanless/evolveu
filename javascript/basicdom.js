// Output comment to console plus the document structure
console.log("Hello world from basicdom.js\n");
console.log(document);

// console.log("\nI have an undefined variable xyz. Give me some input.\n");
// let xyz = prompt("Give me some input ");
// console.log("Your value of xyz is ", xyz, "\n\n");

// On eventListener click of PshBtn button output comment to console,
// comment is overwritten and click count accumulated

function onButtonPushed() {
	console.log("output from inside onButtonPushed function");
}
const idBtnPush = document.getElementById("idBtnPush");
idBtnPush.addEventListener("click", onButtonPushed);
console.log(idBtnPush);		// print idBtnPush type definition

// On eventListener click of h1Btn button output comment to console,
// the h1 header text is switched from world to universe and back

function onHeader1Pushed() {
	console.log("output from inside onHeader1Pushed function");
	if(idH1.textContent=="Hello world") {
		console.log("h1 was world, changd to universe");
		idH1.textContent="Hello universe";
	}
	else {
		idH1.textContent="Hello world";
		console.log("h1 was universe, changed to world");
	}
}
const idBtnh1 = document.getElementById("idBtnh1");
idBtnh1.addEventListener("click", onHeader1Pushed);


const idH2 = document.getElementById("idH2");
console.log("idH2", idH2);
idH2.addEventListener("click", logPlacehd2 );

// idH1 was defined at start BUT was already defined in HTML

console.log(idBtnh1);		// print idBtnh1 type definition
const idH1 = document.getElementById("idH1");
idH1.addEventListener("click",changeidH1 );



function logPlacehd2(){
	let attribute = idH2.getAttribute("place");
	console.log("idH2 place inside logPlacehd2 ", attribute);
}

//Change header 3 from Hello Alberta to Hello Saskatchewan on mouse over

function changeidH3() {
	idH3.textContent="Hello Saskatchewan"
}
idH3.addEventListener("mouseover",changeidH3 );


//Change header 4 from Hello Calgary to Hello Saskatoon on mouse leave in loop

function changeidH4() {
	if(idH4.textContent=="Hello Saskatoon") {
		idH4.textContent="Hello Calgary";
	}
	else {	
		idH4.textContent="Hello Saskatoon";
	}
}
idH4.addEventListener("mouseleave",changeidH4 );
document.body.addEventListener("click",onBodyClick );

// On mouse click in header 1 switch between world and universe


function changeidH1() {
	if(idH1.textContent=="Hello world") {
		idH1.textContent="Hello universe";
	}
	else {	
		idH1.textContent="Hello world";
	}
}

// COPIED and MODIFIED code to retreive cursor coordinates on
// mouse click in body text block

function showCoords(event) {
	let x = event.clientX;     // Get the horizontal coordinate
	let y = event.clientY;     // Get the vertical coordinate
	let coor = "X coords: " + x + ", Y coords: " + y;
	console.log("X coordinate = ", x, "Y coordinate = ", y);
}

//Add new h1 headers

console.log("\nPress Add new h1 Header button in body");

let icount = 0;
function buttonFun() {
	icount++;
	let btn = document.createElement("h1Button");
	let t = document.createTextNode("New h1 body Header #"+icount);

 // WHAT shows the link between createElement and createTextnode
 // IS IT the appendChild statement?
 // HOW do I insert a breakline in the createTextnode for body output

	console.log("New h1 in console Header # ", icount);
	btn.appendChild(t);
 	document.body.appendChild(btn);
}


// Add new function onBodyClick

let bodVal = 1;
function onBodyClick(onBodyClickE) {
	console.log("in onBodyClick function bodVal = ", bodVal);
	// console.log("event passed in onBodyClick", onBodyClickE)
	console.log("in onBodyClick function onBodyClickE.target",onBodyClickE.target );
	bodVal++;
}


// define me with an object
const me ={firstname:"Brent", lastname:"Wanless", state:"confusion"};
console.log( "My ID from an object definition:", me.firstname, me.lastname, "in a state of", me.state);
