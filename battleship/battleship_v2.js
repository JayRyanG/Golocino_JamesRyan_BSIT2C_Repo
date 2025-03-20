console.log = Math.floor(Math.random() * 5);

var randomLoc = Math.floor(Math.random() * 5);
//declaring variable
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 2;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

//game logic
while (isSunk == false){
    guess = prompt ("Ready!. Aim!. Fire! Enter number 0-6");

    if(guess == null){
        alert("Thank You for playing!")
    }
    if (guess <0 || guess> 6) {
        alert("Please enter a valide number!")
    } else {
        guesses = guesses + 1;
        if  (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert ("Hit!");
            if (hits == 3) {
                isSunk = true;
                alert ("Battleship is now Sunk!🙌")
            }
        } else alert("Miss!😢")
    }
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 :0). toFixed(2);
var strat = "You took" + guesses + "guesses to sink the battleship!" + "\n" + "Accuracy: " + accuracy + "%";
alert(stats);