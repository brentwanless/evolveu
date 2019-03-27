/*
	New Section for Dictionary
*/
console.log("Start of Dictionary Section\n\n");

//  Create province object codes and names

const provinces = {
	"BC" : "British Columbia",
	"AB" : "Alberta",
	"ab" : "Alberta",
	"SK" : "Saskatchewan",
	"MB" : "Manitoba",
	"ON" : "Ontario"
};

console.log("provinces = ", provinces);
console.log("SASK", provinces["SK"]);
// console.log("SASK", provinces.SK);

// Function to id Province name from Code

function idProvNameFunc() {
	const provIptValue = document.getElementById("provIptValue");

	console.log("In idProvNameFunc = ", provIptValue.value);

	console.log("province ", provinces[provIptValue.value]);
	document.getElementById("output").value = "Province name: " + provinces[provIptValue.value];

}

// EventListener for provIptValue

const provBtnPush = document.getElementById("provIptBtn"); //button id
provBtnPush.addEventListener("click", idProvNameFunc);


