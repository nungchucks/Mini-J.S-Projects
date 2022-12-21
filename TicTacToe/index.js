const cell = document.querySelectorAll('.cell');

let playerFactory = (name, character) => {
    return {name, character}
}

let playerOne = playerFactory('Player One', 'X');
let playerTwo = playerFactory('Player Two', 'O');

document.addEventListener('click', function(e) {
    console.log(e.target);
})

const playGame = () => {
    let currentPlayer = playerOne;
    cell.forEach(cell => {
        cell.addEventListener('click', function(e) {
            e.target.innerHTMl = currentPlayer.character;
            currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
        })
    })
}