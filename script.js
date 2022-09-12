const gameScreen = document.querySelector('#gameBoard');
const playButton = document.querySelector('#playButton');
const playerHeader = document.querySelector('#playerTurn');
const playScreen = document.querySelector('#playScreen');

const gameGrid = [];
var turn = 1;
const player = (name, symbol) => {
  const printOutput = () => console.log(`${name},${symbol}`);
  return { name, symbol, printOutput };
};
const playerX = player("Player X's", 'X');
const playerO = player("Player O's", 'O');

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const playerInputs = ['', '', '', '', '', '', '', '', ''];
const gameBoard = (() => {
  const gameBlocks = () => {
    for (i = 1; i <= 9; i++) {
      let gameBlock = document.createElement('div');
      gameBlock.className = 'gameBlock';
      gameGrid.push(gameBlock);
    }
    for (const block of gameGrid) {
      const blockIndex = gameGrid.indexOf(block);
      gameScreen.appendChild(block);
      block.addEventListener('click', () => {
        if (block.innerText !== '') {
          return alert('Choose Another Box');
        }
        if (turn % 2 !== 0) {
          playerHeader.innerText = `${playerO.name} turn.`;
          playerInputs[blockIndex] = 'X';
          block.innerText = playerX.symbol;
        } else if (turn % 2 === 0) {
          playerHeader.innerText = `${playerX.name} turn.`;
          playerInputs[blockIndex] = 'O';
          block.innerText = playerO.symbol;
        }
        checkWinner();
        turn += 1;
      });
    }
  };
  return { gameBlocks };
})();

playButton.addEventListener('click', () => {
  playerHeader.style.display = 'block';
  gameScreen.removeChild(playScreen);
  gameBoard.gameBlocks();
});
let to = 150;

const checkWinner = () => {
  let roundWond = false;
  for (i = 0; i < winConditions.length; i++) {
    const newArr = winConditions[i];
    const a = playerInputs[newArr[0]];
    const b = playerInputs[newArr[1]];
    const c = playerInputs[newArr[2]];

    if (a == '' || b == '' || c == '') {
      continue;
    }
    if (a == b && b == c) {
      if (a == 'X' && b == 'X') {
        setTimeout(() => winScreen(playerX.name), to);
        roundWond = true;
        break;
      } else if (a == 'O' && b == 'O') {
        setTimeout(() => winScreen(playerO.name), to);
        roundWond = true;
        break;
      }
    }
  }
  if (roundWond) {
    return;
  } else if (!playerInputs.includes('')) {
    setTimeout(() => drawScreen(), to);
  }
};

function winScreen(name) {
  const gameBlockClass = document.querySelectorAll('.gameBlock');
  playerHeader.style.display = 'none';
  for (let blck of gameBlockClass) {
    gameScreen.removeChild(blck);
  }
  let winner = document.createElement('div');
  let Pbuton = document.createElement('button');
  let winHeader = document.createElement('h1');
  winHeader.innerText = `${name} win!👑`;
  Pbuton.innerText = 'Play Again';
  Pbuton.setAttribute('id', 'playAgainButton');
  Pbuton.addEventListener('click', () => {
    gameScreen.removeChild(winner);
    window.location.reload();
  });
  winHeader.setAttribute('id', 'winnerHeader');
  winner.className = 'winScreen';
  gameScreen.appendChild(winner);
  winner.appendChild(winHeader);
  winner.appendChild(Pbuton);
}
function drawScreen() {
  const gameBlockClass = document.querySelectorAll('.gameBlock');
  playerHeader.style.display = 'none';
  for (let blck of gameBlockClass) {
    setTimeout(gameScreen.removeChild(blck), 5000);
  }
  let winner = document.createElement('div');
  let Pbuton = document.createElement('button');
  let winHeader = document.createElement('h1');
  winHeader.innerText = `Draw`;
  Pbuton.innerText = 'Play Again';
  Pbuton.setAttribute('id', 'playAgainButton');
  Pbuton.addEventListener('click', () => {
    gameScreen.removeChild(winner);
    window.location.reload();
  });
  winHeader.setAttribute('id', 'winnerHeader');
  winner.className = 'winScreen';
  gameScreen.appendChild(winner);
  winner.appendChild(winHeader);
  winner.appendChild(Pbuton);
}
