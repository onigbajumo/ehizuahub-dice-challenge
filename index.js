var diceNumber = Math.random() * 6
diceNumber = Math.floor(diceNumber) + 1

var diceImage = "images/dice" + diceNumber + ".png"


var myImage1 = document.querySelectorAll("img")[0]

myImage1.setAttribute("src", diceImage)

console.log(myImage1)



var diceNumber2 = Math.random() * 6
diceNumber2 = Math.floor(diceNumber2) + 1

var diceImage2 = "images/dice" + diceNumber2 + ".png"

var myImage2 = document.querySelectorAll("img")[1]

myImage2.setAttribute("src", diceImage2)

console.log(diceImage2)
console.log(diceNumber2)


if(diceNumber > diceNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won!!!"
} else if(diceNumber < diceNumber2){
    document.querySelector("h1").innerHTML = "Player 2 won!!!"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}


