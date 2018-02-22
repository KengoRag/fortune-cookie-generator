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
	"You will go on a journey to find treasure"
];


function generateFortuneCookie() {
	var randomFortune = Math.floor(Math.random()*fortunesList.length);

    document.getElementById("fortuneCookieText").innerHTML = fortunesList[randomFortune];
};

function previousFortune() {
	document.getElementById("previousFortune".innerHTML = generateFortuneCookie)
}