var fortunesList = [
	"You will be stranded on an island",
	"You will decide to hunt down a white whale",
	"You will be invited to a school to study magic",
	"You will meet Cthulu",
	"You will wake up one day and realize you have become a cockroach",
	"You will be imprisoned for a crime you didn't commit",
	"You will build a tower to heaven",
	"You will start a farm in California",
	"Your city will have to deal with a plague",
	"You will go on a journey to find treasure",
	"You will live in a dystopian society",
	"You will walk around in wonderland",
	"You will discover a secret garden",
	"You will pilot a WW2 bomber plane",
	"You will have a conversation with Socrates",
	"You will travel around the world",
	"You will discover that you are the child of a Greek god",
	"You will search for work because of the great depression",
	"You will fight the dark side in a war for the galaxy",
	"You will fight monsters alongside your magical dog",
	"You will go into people's dreams to steal their secrets",
	"You will work in a cloning facility",
	"You will realize that the world you  live in is a simulation",
	"You will become a first class chef in Frane",
	"You will team up with superheroes to save the planet from villains"
];


function generateFortuneCookie() {
	var randomFortune = Math.floor(Math.random()*fortunesList.length);

	var fortune = fortunesList[randomFortune]

    document.getElementById("fortuneCookieText").innerHTML = fortune;

    var node = document.createElement("LI");

    var textnode = document.createTextNode(fortune);

    node.appendChild(textnode);

    document.getElementById("pFortunes").appendChild(node);

    fortunesList.splice(randomFortune, 1);

    if (fortunesList.length == 0 ) {
    	fortunesList.push(	
	"You will be stranded on an island",
	"You will decide to hunt down a white whale",
	"You will be invited to a school to study magic",
	"You will meet Cthulu",
	"You will wake up one day and realize you have become a cockroach",
	"You will be imprisoned for a crime you didn't commit",
	"You will build a tower to heaven",
	"You will start a farm in California",
	"Your city will have to deal with a plague",
	"You will go on a journey to find treasure",
	"You will live in a dystopian society",
	"You will walk around in wonderland",
	"You will discover a secret garden",
	"You will pilot a WW2 bomber plane",
	"You will have a conversation with Socrates",
	"You will travel around the world",
	"You will discover that you are the child of a Greek god",
	"You will search for work because of the great depression",
	"You will fight the dark side in a war for the galaxy",
	"You will fight monsters alongside your magical dog",
	"You will go into people's dreams to steal their secrets",
	"You will work in a cloning facility",
	"You will realize that the world you  live in is a simulation",
	"You will become a first class chef in Frane",
	"You will team up with superheroes to save the planet from villains")
    }

}




