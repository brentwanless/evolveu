/*
	New Section for Comp 108
*/
console.log("Start of Comp 108\n\n");


function makeDiv(message) {
	const div = document.createElement("div");
	div.textContent = message;
	div.className = "clPanel";
	// console.log(div);
	return div;
}

console.log("testing makediv:", makeDiv("Make me a div"));

let i = 1

function onBodyClicked() {
	console.log("in onBodyClicked");
	// alert(event.target.nodeName);

	alert("Bang " + i);
	i++;
}
document.body.addEventListener("click", onBodyClicked);

document.body.addEventListener("click", onButtonPushed);
counter = 0;
function onButtonPushed(e) {
	console.log("onButtonPushed",e);
	e.target.appendChild(makeDiv("I fricking did it " + ++counter));
}
