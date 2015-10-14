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
  this.score = 0;
  this.buttonTop = function()	{
  	var stuff = 
  	'<p>' + '<h3>' + this.name + '</h3>' + '</p>' +	
  	'<p>' + 'Votes: ' + this.score + '</p>' +
  	'<p>' + '<img src="' + this.image + '" />' + '</p>' + 
  	'<p>' + this.description + '</p>';
  	return stuff;
  }	// end buttonTop builder function
}


// array of all candidates, list description format
var allCandidates = [
	new candidates('Dick Cheney','Dick_Cheney.jpg', 
		'Lifelong politician, defended rectal feeding of prisoners, grew wealthy off government-influenced Halliburton contracts ... basically a Ferengi in human-skin.'),
	new candidates('Donald Trump','Donald_Trump.jpg',
		'He\'s like a cartoon: the wealth, the hair, the racist overtones, the light-hearted eminent domain abuse ... '),
	new candidates('Kanye West','Kanye_West.jpg',
		'You know how 2 year olds cannot understand that life is not all about them ... '),
	new candidates('Michael Vick','Michael_Vick.jpg',
		'Some may see a world class quarterback, I see a guy who admitted to killing dogs who wouldn\'t fight.'),
	new candidates('Nancy Brinker','Nancy_Brinker.jpg',	
		'Founded an organization to end breast cancer ... takes home around $600,000/yr from donations'),
	new candidates('The T.S.A.','TSA-Agent.jpg',
		'Thousands Standing Around ... individually typical Americans, and collectively an expensive security joke.'),
	new candidates('Westboro Baptist Church','westboro-2.jpg',
		'Protesting at funerals to mock the mourners? Cheering at the news of fallen servicemen? I think they\'ve earned a little hate.'),




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
		var randomNumber = Math.floor(Math.random()*(allCandidates.length + 0));
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

function drawChoices()	{
	first.innerHTML = choices[0].buttonTop();
	second.innerHTML = choices[1].buttonTop();
}

drawChoices();

var clickFirst = document.getElementById("first");
clickFirst.addEventListener('click', function()	{
	console.log('Option Two Old Score: ' + choices[0].score);
	choices[1].score = choices[0].score +=1;
	console.log('Option Two New Score: ' + choices[0].score);
	getChoices();
	drawChoices();
});
var clickSecond = document.getElementById("second");
clickSecond.addEventListener('click', function() {
	console.log('Option Two Old Score: ' + choices[1].score);
	choices[1].score = choices[1].score +=1;
	console.log('Option Two New Score: ' + choices[1].score);
	getChoices();
	drawChoices();
});



// So Natalie added an element to each selection
// it just builds the coding for what you want the button to say
// eliminates need for additional text nodes and elements on a table
// Fuck that is a lot simpler than the bullshit i've been trying



