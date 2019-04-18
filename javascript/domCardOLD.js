
/*
	CARDS EXERCISE */
// Function to add a Card


let cardType = "main";
let icount = 1;	// Initialize Card counter

addBtnPush = document.getElementById("addCardBtn");

const divLeft = document.getElementById("idLeft");

// Main Add Card button

addBtnPush.addEventListener("click", addCardFunc);

function addCardFunc() {

	console.log("in addCardFunc  type = ", cardType);
	buttonSelect = event.target.parentNode;
	createCard();
	}

function createCard() {
	const newDiv = document.createElement("div"); //New generic div

	console.log("in createCard: div = ", newDiv);
	console.log("\n\nin createCard type = ", cardType, "\n\n");

	if (cardType === "main") {					// Main Card
		console.log("if says type = ", cardType);
		}
		else if (cardType === "before") {		//Before Card
			console.log("if says type = ", cardType);
		}
		else if (cardType === "after"){			// After card							//After Card
			console.log("if says type = ", cardType);
		}
		else {									// Delete button
			console.log("if says type = ", cardType);
		}

// Create Card and break line ("br");

	newDiv.textContent = "Card Number " + icount ;
	newDiv.className = "clCard";
	const cardBreak = document.createElement("br");
	newDiv.appendChild(cardBreak);

	console.log("newDiv text = ", newDiv.textContent);

// Create "Add Before" button

	let addBeforeBtn = document.createElement("button");
	addBeforeBtn.textContent = "Add Before";
	addBeforeBtn.className = "clButton";

	console.log("addButtontext = ", addBeforeBtn.textContent);

// Create "Add After" button

	const addAfterBtn = document.createElement("button");
	addAfterBtn.textContent = "Add After";
	addAfterBtn.className = "clButton";
	// const cardBreak = document.createElement("br");
	newDiv.appendChild(cardBreak);

// Create "Delete" button

	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
	deleteBtn.className = "clButton";

// Create the child div's "Add Before", "Add After", and "Delete"
// then append them

	newDiv.appendChild(addBeforeBtn);
	newDiv.appendChild(addAfterBtn);
	newDiv.appendChild(deleteBtn);

	// const newDivParent = document.getElementById("newDiv").parentNode.nodeName;
	const newDivParent = document.getElementById("newDiv");

	console.log("newDiv at appendChild==> ", newDiv);
	console.log("newDiv parent at appendChild==> ", newDivParent);

	if( cardType === "main") {
		console.log("if says type = ", cardType);
		}
		else if (cardType === "after") {		//Before Card
		console.log("if says type = ", cardType);
		}

 	idLeft.appendChild(newDiv);

	icount++; // Increment card counter

// Add event handlers on Add Before After and Delete buttons

	addBeforeBtn.addEventListener ("click", function() {

		cardType = "before";
		console.log("in addBeforeBtn type = ", cardType);

		icount = icount ++;
		addCardFunc();  
	});

	addAfterBtn.addEventListener ("click", function() {

		cardType = "after";
		console.log("in addAfterBtn type = ", cardType);

buttonSelect = event.target.parentNode;
// buttonSelect.insertAfter(createCard());

		createCard();

	});

	deleteBtn.addEventListener ("click", function() {

		cardType = "delete";
		buttonSelect = event.target.parentNode;
		divLeft.removeChild(buttonSelect);
	});
}


