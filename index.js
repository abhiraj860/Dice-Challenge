var randomNum1 = Math.floor(6 * Math.random()) + 1;
var dice1 = "images/dice" + randomNum1 + ".png";
document.querySelector(".img1").setAttribute("src", dice1);

var randomNum2 = Math.floor(6 * Math.random()) + 1;
var dice2 = "images/dice" + randomNum2 + ".png";
document.querySelector(".img2").setAttribute("src", dice2);

if(randomNum1 === randomNum2) {
    document.querySelector(".container h1").textContent = "Draw!";
} else if(randomNum1 > randomNum2) {
    document.querySelector(".container h1").textContent = "Player 1 Wins!";
} else {
    document.querySelector(".container h1").textContent = "Player 2 Wins!";

}
