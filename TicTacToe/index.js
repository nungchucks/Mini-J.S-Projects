const cell = document.querySelectorAll('.cell');
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
const restartButton = document.querySelector('.restartButton');
let movesMade = 0; 

let playerFactory = (name, character) => {
    return {name, character}
}

let playerOne = playerFactory('Player One', 'X');
let playerTwo = playerFactory('Player Two', 'O');

const playGame = () => {
    let currentPlayer = playerOne;
    cell.forEach(cell => {
        cell.addEventListener('click', function(e) {
            e.target.textContent = currentPlayer.character;
            currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
            checkWinner(); 
        })
    })
}

const checkWinner = () => {
  movesMade++;
  if (movesMade < 5) {
    return;
  }
  let winner = null;
  winningCombinations.forEach(combination => {
    const cell1 = cell[combination[0]];
    const cell2 = cell[combination[1]];
    const cell3 = cell[combination[2]];
    if (cell1.textContent === cell2.textContent && cell2.textContent === cell3.textContent) {
      winner = cell1.textContent;
    }
  });
  if (winner) {
    alert(`${winner} has won!`);
  } else if (movesMade === 9) {
    alert('The game is a tie!');
    restartGame();
  }
};

const restartGame = () => {
    cell.forEach(cell => {
        cell.textContent = '';
    })
    movesMade = 0;
    currentPlayer = playerOne; 
}

restartButton.addEventListener('click', function(e) {
    restartGame();
})

playGame();
