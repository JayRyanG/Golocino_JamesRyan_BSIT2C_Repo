//declaring variable
var randomLoc = Math.floor(Math.random() *5);
var shipLocations = [randomLoc, randomLoc + 1, randomLoc + 2];

var guess
var hits = 0;
var guesses = 0;

var isSunk = false;

//Game Logic
while (isSunk == false) {
    guess = prompt("Ready!. Aim!. Fire! (Enter Number 0-6)");

    if (guess == null) {
        alert ("Thank You for Playing!");
        break;
    }
    guess = parseInt(guess, 10);
    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert ("Please Enter a valid number Between 0 and 6!");
        continue;
    }
    
    guesses ++;
    
    const HitIndex = shipLocations.indexOf (guess);
    if (HitIndex !== -1) {
        alert ("Hits!❤️");
        shipLocations.splice(HitIndex, 1);
        hits ++;
        if (shipLocations.length == 0) {
            isSunk = true;
        }
    }else {
        alert ("Miss!😓");
    }
}

var accuracy = (guess > 0 ? (hits / guesses)* 100 : 0). toFixed(3);
var stats = "You took " + guesses + " guesses to sink the battleship!" + "\n" + "Accuracy: " + accuracy + "%";
var stats = "You sank my batteship at: " + guesses + "guesses" + " and your accuracy is: " + (3/guesses);
alert(stats);