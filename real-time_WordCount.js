var Firebase = require("firebase");
var myRef  = new Firebase("https://csc591-006.firebaseio.com/");
var trackWord;
var hadoopCount = 0;
var stormCount = 0;


document.addEventListener("DOMContentLoaded", function(event) {
Initialize();
});

function Initialize()
{
    console.log('Initializing control with event..');
    var btnGetWordCount = document.getElementById("btnGetWordCount");
    if(btnGetWordCount)
    {
        btnGetWordCount.addEventListener('click', getWordCount);
    }
}

function getWordCount()
{	
	//TODO
	//to validate the input text value as only word..
	document.getElementById("wordCount_Storm").innerHTML = 0;
	document.getElementById("wordCount_Hadoop").innerHTML = 0;
	document.getElementById("totalCount").innerHTML = 0;
	hadoopCount = 0;
	stormCount = 0;
	// alert("buttonc clicked..");

	trackWord = document.getElementById("trackWord").value;
	console.log("getting word count for : " + trackWord);

	myRef.child("HadoopResults").ref().on("child_changed", function(snapshot){
		// alert(snapshot.key());
		console.log(snapshot.key());
		if(snapshot.key() == trackWord)
		{
			console.log("value changed to : " + snapshot.val());
			document.getElementById("wordCount_Hadoop").innerHTML = snapshot.val();
			hadoopCount = parseInt(snapshot.val());
			document.getElementById("totalCount").innerHTML = hadoopCount + stormCount;
		}
	});

	myRef.child("HadoopResults").ref().on("child_added", function(snapshot){
		// alert(snapshot.key());
		console.log(snapshot.key());
		if(snapshot.key() == trackWord)
		{
			console.log("value added as : " + snapshot.val());
			document.getElementById("wordCount_Hadoop").innerHTML = snapshot.val();
			hadoopCount = parseInt(snapshot.val());
			document.getElementById("totalCount").innerHTML = hadoopCount + stormCount;
		}
	});


	myRef.child("StormResults").ref().on("child_changed", function(snapshot){
		// alert(snapshot.key());
		console.log(snapshot.key());
		if(snapshot.key() == trackWord)
		{
			console.log("value changed to : " + snapshot.val());
			document.getElementById("wordCount_Storm").innerHTML = snapshot.val();
			stormCount = parseInt(snapshot.val());
			document.getElementById("totalCount").innerHTML = hadoopCount + stormCount;
		}
	});

	myRef.child("StormResults").ref().on("child_added", function(snapshot){
		// alert(snapshot.key());
		console.log(snapshot.key());
		if(snapshot.key() == trackWord)
		{
			console.log("value added as : " + snapshot.val());
			document.getElementById("wordCount_Storm").innerHTML = snapshot.val();
			stormCount = parseInt(snapshot.val());
			document.getElementById("totalCount").innerHTML = hadoopCount + stormCount;
		}
	});

	myRef.child("FirebaseConnection").set("SUCCESS");
}

