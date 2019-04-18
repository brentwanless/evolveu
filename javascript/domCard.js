/*	CARDS EXERCISE */
// Initialize left div and card counter

const divLeft = document.getElementById("idLeft");
let icount = 1;

// WHY DOESN'T THIS CARDBREAK WORK
// let cardBreak = document.createElement("br");

// Function to add a Card

function addCardFunc() {
	divLeft.appendChild(createCard());
}
// Main Add Card button

addBtnPush = document.getElementById("addCardBtn");
addBtnPush.addEventListener("click", addCardFunc);

// Function to activate chosen button

function onCardBtnClick() {
	const targetID = event.target.id;

	if (targetID === "deleteBtn") {
		cardSelect = event.target.parentNode;
		divLeft.removeChild(cardSelect);

	} else if (targetID === "beforeBtn") {
		cardSelect = event.target.parentNode;
	 	newCard = createCard();
	 	divLeft.insertBefore(newCard, cardSelect);

	} else if (targetID === "afterBtn") {
		cardSelect = event.target.parentNode;
		newCard = createCard();
		nextSibling = cardSelect.nextSibling;
		divLeft.insertBefore(newCard, nextSibling);
	}
}
document.addEventListener("click", onCardBtnClick);

// Function to create new card

function createCard() {
	const newCard = document.createElement("div"); //New generic div

// Create Card and break line ("br");

	newCard.textContent = "Card Number " + icount ;
	newCard.className = "clCard";
	let cardBreak = document.createElement("br", "br");
	newCard.appendChild(cardBreak);

// Create "Add Before" button

	const beforeBtn = document.createElement("button");
	beforeBtn.id = "beforeBtn";
	beforeBtn.textContent = "Add Before";
	beforeBtn.className = "clButton";

// Create "Add After" button

	const afterBtn = document.createElement("button");
	afterBtn.id = "afterBtn";
	afterBtn.textContent = "Add After";
	afterBtn.className = "clButton";
	newCard.appendChild(cardBreak);

// Create "Delete" button

	const deleteBtn = document.createElement("button");
	deleteBtn.id = "deleteBtn";
	deleteBtn.textContent = "Delete";
	deleteBtn.className = "clButton";

// Create the child div's "Add Before", "Add After", and "Delete"
// then append them

	newCard.appendChild(beforeBtn);
	newCard.appendChild(afterBtn);
	newCard.appendChild(deleteBtn);

	const newDivParent = document.getElementById("newCard");

 	idLeft.appendChild(newCard);

	icount++; // Increment card counter
	return newCard;
}
