// zero-out JS document

// could also make a variable to hold the last few pictures chosen, neither random choice can be either of those ... 
// make variable equal to a couple less than max number of pictures so minimal repeating ...

// showChoices function ... 
// put all the pictures into an array
// randomly select a picture
// randomly select another picture, it can't be the same as the first
// put their pictures on the two big buttons (A and B)
// run showChoices

// Listen to button A, listen to button button
// On click function ...
// highlight the choice for two seconds (maybe play a ding noise)
// record the choice count in the record of that picture
// run showChoices

// may want to expand later, make number of choices flexible to window size in the future?

var candidates = function(name,image,description) {
  this.name = name;
  this.image = image;
  this.description = description;
  this.buttonTop = function()	{
  	var stuff = 
  	'<p>' + '<h2>' + this.name + '</h2>' + '</p>'
  	'<p>' + '<img src="' + this.image + '" width="275" height="400" alt="oops" />' + '</p>'
  	'<p>' + this.description + '</p>';
  	return stuff;
  }	// end buttonTop builder function
}


// array of all candidates, list description format
var allCandidates = [
	new candidates('Dick Cheney','Dick_Cheney.jpg','douchebag'),
	new candidates('Donald Trump','Donald_Trump.jpg','douchebag'),
	new candidates('Kanye West','Kanye_West.jpg','douchebag'),
	new candidates('Michael Vick','Michael_Vick.jpg','douchebag'),
	new candidates('Nancy Brinker','Nancy_Brinker.jpg',	'douchebag'),
];
console.log(allCandidates);

// this is the primary function--upon refresh this should run and grab two randoms and display them

// create a place to stick the candidates selected
var choices = [];

function getChoices()	{
	// empty the array
	choices = [];
	// get a random picture, do this twice, make sure they don't match
	while (choices.length < 2)		{
		// make a random number
		var randomNumber = Math.floor(Math.random()*(allCandidates.length - 1)) + 1;
		// lookup which spot in my candidates list that is
		var candidatesIndex = allCandidates[randomNumber];
		console.log(randomNumber);
		// if the
		if (candidatesIndex != choices[0])	{
			choices.push(candidatesIndex);
		}	// end of "if check"	
	} // end of for loop
} // end of getChoices function

// populate that array of choices
getChoices();
console.log(choices[0].name);
console.log(choices[1].name);

function drawChoice()	{
	first.innerHTML = choices[0].buttonTop();
	second.innerHTML = choices[1].buttonTop();
}

drawChoice();

// So Natalie did a final element, each final candidate element would
// be the product of an enormous write function, only 1 thing to
// attach to the table!  Jack fucking shit that is god damn slick ...

/*
var spot1 = document.getElementById("1");
	var cell1 = document.createElement('td');
	var nameContents = document.createTextNode(choices[0].name);
	var imageContents = document.createTextNode(choices[0].image);
	var descriptionContents = document.createTextNode(choices[0].description);
	cell1.appendChild(nameContents);
	cell1.appendChild(imageContents);
	cell1.appendChild(descriptionContents);
	// duplication, I know
	var spot2 = document.getElementById("2");
	var cell2 = document.createElement('td');
	var nameContents = document.createTextNode(choices[1].name);
	var imageContents = document.createTextNode(choices[1].image);
	var descriptionContents = document.createTextNode(choices[1].description);
	cell1.appendChild(nameContents);
	cell1.appendChild(imageContents);
	cell1.appendChild(descriptionContents);
}	// end of drawChoice

*/

