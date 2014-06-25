//My own expansion on the Dragon Slayer game in Codecademy :) 
//Added choices of what dragon to battle and different options of how much "life" each dragon has left.

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;
var choiceMade = false;
var dragonChoice = 0;
var life = 0;

//Prompt user for what level dragon they would like to play against.

do {
    dragonChoice = prompt("There are three dragons. The ice dragon is easy to defeat, the fire dragon is more difficult, and the dark dragon is the hardest of all. Which do you choose? Ice, Fire, or Dark?");
    if (dragonChoice === "Ice") {
        life = 5;
        choiceMade = true;
    } else if (dragonChoice === "Fire") {
        life = 10;
        choiceMade = true;
    } else if (dragonChoice === "Dark") {
        life = 20;
        choiceMade = true;
    } else {
        confirm("You didn't choose a real dragon. Let's try again.");
        choiceMade = false;
    }
} while (!choiceMade);


//Start the battle

console.log("The " + dragonChoice + " dragon has " + life + " points of health left.");

while (slaying) {
    if (youHit){ //If they hit the dragon, log how much damage is done.
        console.log("You hit the " + dragonChoice + " dragon and dealt him " + damageThisRound + " points of damage!");
        totalDamage += damageThisRound;
        if (totalDamage >= life) {
            console.log("You slew the dragon!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
            damageThisRound = Math.floor(Math.random()*5 + 1);
        }
    } else { //If they miss even once, they're dead!
        console.log("You missed and the " + dragonChoice + " dragon ate you, sorry...");
        slaying = false;
    } 
}
