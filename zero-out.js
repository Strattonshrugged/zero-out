

// CONSTRUCTOR
var candidates = function(person,image,color,description) {
  this.person = person;
  this.image = image;
  this.color = color;
  this.description = description;
  this.score = 0;
  this.buttonTop = function()	{
  	var stuff = 
  	'<p>' + '<h3>' + this.person + '</h3>' + '</p>' +	
  	'<p>' + 'Votes: ' + this.score + '</p>' +
  	'<p>' + '<img src="images/' + this.image + '" />' + '</p>' + 
  	'<p>' + this.description + '</p>';
  	return stuff;
  }	// end buttonTop builder function
}

// THE DATA
var allCandidates = [
	new candidates('Dick Cheney','Dick_Cheney.jpg', '#CB4154', // brick red
		'Lifelong politician, defended rectal feeding of prisoners, grew wealthy off government-influenced Halliburton contracts ... basically a Ferengi in human-skin.'),
	new candidates('Donald Trump','Donald_Trump.jpg', '#1DF914', // electric lime
		'He\'s like a cartoon: the wealth, the hair, the racist overtones, the light-hearted eminent domain abuse ... '),
	new candidates('Kanye West','Kanye_West.jpg', '#FCD975', // yellow
		'You know how 2 year olds cannot understand they are not the center of the universe ... '),
	new candidates('Michael Vick','Michael_Vick.jpg', '#FFCFAB', // peach
		'Some may see a world class quarterback, I see a guy who admitted to killing dogs who wouldn\'t fight.'),
	new candidates('Nancy Brinker','Nancy_Brinker.jpg', '#FFAACC', // light pink
		'Founded an organization to end breast cancer ... takes home around $600,000/yr from donations'),
	new candidates('The T.S.A.','TSA-Agent.jpg', '#1F75FE', // plain blue
		'Thousands Standing Around ... individually typical Americans, and collectively an expensive security joke.'),
	new candidates('Westboro Baptist Church','westboro-2.jpg','#FF1DCE', // shocking pink
		'Protesting at funerals to mock the mourners? Cheering at the news of fallen servicemen? I think they\'ve earned a little hate.'),
	new candidates('Justin Bieber','Justin_Bieber.jpg', '#5D76CG', // indigo
		'I don\'t need to explain.'),
	new candidates('Warren Jeffs','Warren_Jeffs.jpg','#95918C', // grey
		'I don\'t want to explain.'),
	new candidates('Grover Norquist','Grover_Norquist.jpg','#FC2847', // bright red
		'Rallied Republicans against new taxes by bringing tax reform efforts to a halt and digging partisan politics a little deeper.'),
	new candidates('Ann Coulter','Ann_Coulter.jpg', '#FF7538', // orange
		'"... any growing interest in soccer can only be a sign of the nation\'s moral decay." ... who can take this vicious-crazy political Sam Kinison seriously?'),
];


// SCOREBOARD 
for (var i = 0; i < allCandidates.length; i++)	{
	// if nothing is there
	if (localStorage.getItem(allCandidates[i].person) == null)	{
		// put something there so all candidates have a score
		localStorage.setItem(allCandidates[i].person,'0');
	}	else 	{
		// make sure this instance of the program grabs the previous score
		allCandidates[i].score = JSON.parse(localStorage.getItem(allCandidates[i].person));	
	}
}

// THE MAIN EVENT
function Tracker()	{
	var randomCandidates = [];
	// generates random number in range
	function RandomNumberMaker()	{
		return Math.floor(Math.random()*allCandidates.length);
	} // populates randomCandidates
	function RandomSelector()	{
		while (randomCandidates.length < 2)	{
			var tempNumber = RandomNumberMaker();
			var choiceToVet = allCandidates[tempNumber];
			if (choiceToVet != randomCandidates[0])	{
				randomCandidates.push(choiceToVet);
			}
		}
	} // so randomCandidates should be populated
	RandomSelector();

	function PrepareButtons()	{
		var clickFirst = document.getElementById("first");
		var clickSecond = document.getElementById("second");
		first.innerHTML = randomCandidates[0].buttonTop();
		second.innerHTML = randomCandidates[1].buttonTop();
		clickFirst.addEventListener('click',addFirst);
		clickSecond.addEventListener('click',addSecond);

		function addFirst()	{
			console.log("Choice Selected: " + randomCandidates[0].person);
			clickFirst.removeEventListener('click',addFirst);
			clickSecond.removeEventListener('click',addSecond);
			randomCandidates[0].score = JSON.parse(localStorage.getItem(randomCandidates[0].person));	
			randomCandidates[0].score = randomCandidates[0].score + 1;
			localStorage.setItem(randomCandidates[0].person,JSON.stringify(randomCandidates[0].score));
			Tracker();
		}	// end addFirst
		function addSecond() {
			console.log("Choice Selected: " + randomCandidates[1].person);
			clickFirst.removeEventListener('click',addFirst);
			clickSecond.removeEventListener('click',addSecond);
			randomCandidates[1].score = JSON.parse(localStorage.getItem(randomCandidates[1].person));	
			randomCandidates[1].score = randomCandidates[1].score + 1;
			localStorage.setItem(randomCandidates[1].person,JSON.stringify(randomCandidates[1].score));
			Tracker();
		}	// end addSecond


	} // end of PrepareButtons
	PrepareButtons();

	function DrawChart()	{
		var data = [];
		for (i = 0; i < allCandidates.length; i++)	{
			data.push({
				'label':allCandidates[i].person,
				'value':allCandidates[i].score,
				'color':allCandidates[i].color
			}); // end of dictionary
		};
		var context = document.getElementById('results').getContext('2d');

		var skillsChart = new Chart(context).Doughnut(data, {
			label: 'Candidates',
			animationSteps: 30,
			animationEasing: "easeOutBounce",
			animateRotate: true,
			animateScale: true
		});
	} // end of DrawChart
	DrawChart();
} // end of Tracker function
Tracker();











