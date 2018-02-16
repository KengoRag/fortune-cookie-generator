var fortunes = [
	"Slip off a cliff and die",
	"Get zapped by lightning and die",
	"Trip into an open man hole and die",
	"Get kicked by a horse and die",
	"Accidentally walk into the lion enclosure and die",
	"Win the lottery then immediately have a heart attack and die",
	"Discover the secret to immortality but die before being able to use it",
	"A random flying baseball hits you in the head and you die",
	"Find a dollar bill on the floor"
];

var randomFortune = Math.floor(Math.random()*fortunes.length);

function generateFortuneCookie() {
    document.getElementById("demo").innerHTML = fortunes[randomFortune];
}
