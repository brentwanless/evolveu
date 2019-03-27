console.log("I'm in callback js file");

// example of foreach

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

function myCallBackFunction(ar, func) {

	console.log("in myCallBackFunction");
	console.log("	ar  --->", ar);
	console.log("	func --->", func);

	for(i=0; i<ar.length; i++) {
		// console.log("array element ", i, ar[i]);
		// console.log("array arrow ", )

		func(ar[i]);	//callback method Received func pointing to add5

		myWorkerFunction(i);  //call myWorkerFunction with index
	}

}
function myWorkerFunction(qqqq) {
    console.log('myWorkerFunction', qqqq);
}

function add5(qqqq) {
    console.log('add5', qqqq + 5);  //add5 called from  myCallBackFunction
    								//which received and called func
}
// OLD STUFF
// myCallBackFunction(data.staff, myWorkerFunction);
// myCallBackFunction(['abc','bcd','cde'], myWorkerFunction);

const mmmm = [11,22,33,44];

myCallBackFunction(mmmm, add5);

// myWorkerFunction('asdf');