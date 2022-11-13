var rockButton = document.getElementById("rockButton"); 
var paperButton = document.getElementById("paperButton"); 
var scissorsButton = document.getElementById("scissorButton"); 
var winCounter = document.getElementById("winCounter"); 
var lossCounter = document.getElementById("lossCounter"); 
let winCount = 0; 
let lossCount = 0; 


const choices = ["Rock", "Paper", "Scissors"]; 
let computerGuess; 
let message; 
let getComputerCoice = () => {
    randomNum = Math.floor(Math.random() * 3)
    if (randomNum == 0) {
        computerGuess = choices[0]; 
    }
    else if (randomNum == 1) {
        computerGuess = choices[1]; 
    }
    else if (randomNum == 2) {
        computerGuess = choices[2]; 
    }
    return computerGuess
}

rockButton.addEventListener('click', () => {
    getComputerCoice(); 
    if (computerGuess == "Rock") {
        message = console.log('Tie!');
    }
    else if (computerGuess == "Paper") {
        lossCounter.innerHTML = lossCount++; 
        message = console.log(`The computer chose ${computerGuess}. You lose!`);
    }
    else {
        winCounter.innerHTML = winCount++; 
        message = console.log(`The computer chose ${computerGuess}. You win!`);
    }
    return message; 

})

paperButton.addEventListener('click', ()=> {
    getComputerCoice(); 
    if (computerGuess == "Paper") {
        message = console.log('Tie!');
    }
    else if (computerGuess == "Scissors") {
        message = console.log(`The computer chose ${computerGuess}. You lose!`);
        lossCounter.innerHTML = lossCount++; 
    }
    else {
        message = console.log(`The computer chose ${computerGuess}. You win!`);
        winCounter.innerHTML = winCount++; 
    }
    return message; 
})

scissorsButton.addEventListener('click', () => {
    getComputerCoice(); 
    if (computerGuess == "Scissors") {
        message = console.log('Tie!');
    }
    else if (computerGuess == "Rock") {
        message = console.log(`The computer chose ${computerGuess}. You lose!`);
        lossCounter.innerHTML = lossCount++; 
    }
    else {
        message = console.log(`The computer chose ${computerGuess}. You win!`);
        winCounter.innerHTML = winCount++; 
    }
    return message; 
})

