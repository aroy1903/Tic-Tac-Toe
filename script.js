const gameScreen = document.querySelector("#gameBoard");
const playButton = document.querySelector("#playButton");
const playerHeader = document.querySelector("#playerTurn");
const playScreen = document.querySelector("#playScreen");

const gameGrid = [];
var turn = 1;
const player = (name, symbol) => {
  const printOutput = () => console.log(`${name},${symbol}`);
  return { name, symbol, printOutput };
};
const playerX = player("Player X's", "X");
const playerO = player("Player O's", "O");

const gameBoard = (() => {
  const gameBlocks = () => {
    for (i = 1; i <= 9; i++) {
      let gameBlock = document.createElement("div");
      gameBlock.className = "gameBlock";
      gameGrid.push(gameBlock);
    }
    for (const block of gameGrid) {
      gameScreen.appendChild(block);
      block.addEventListener("click", () => {
        if (block.innerText !== "") {
          return alert("Choose Another Box");
        }
        if (turn % 2 !== 0) {
          playerHeader.innerText = `${playerO.name} turn.`;
          block.innerText = playerX.symbol;
        } else if (turn % 2 === 0) {
          playerHeader.innerText = `${playerX.name} turn.`;
          block.innerText = playerO.symbol;
        }
        checkWin();

        turn += 1;
      });
    }
  };
  return { gameBlocks };
})();

playButton.addEventListener("click", () => {
  playerHeader.style.display = "block";
  gameScreen.removeChild(playScreen);
  gameBoard.gameBlocks();
});
let to = 150;
function checkWin() {
  if (
    gameGrid[0].innerText === "X" &&
    gameGrid[1].innerText === "X" &&
    gameGrid[2].innerText === "X"
  ) {
    setTimeout(() => winScreen(playerX.name), to);
    console.log("win");
  } else if (
    gameGrid[0].innerText === "O" &&
    gameGrid[1].innerText === "O" &&
    gameGrid[2].innerText === "O"
  ) {
    setTimeout(() => winScreen(playerO.name), to);
    console.log("win");
  } else if (
    gameGrid[3].innerText === "X" &&
    gameGrid[4].innerText === "X" &&
    gameGrid[5].innerText === "X"
  ) {
    setTimeout(() => winScreen(playerX.name), to);
    console.log("win");
  } else if (
    gameGrid[3].innerText === "O" &&
    gameGrid[4].innerText === "O" &&
    gameGrid[5].innerText === "O"
  ) {
    setTimeout(() => winScreen(playerO.name), to);
    console.log("win");
  } else if (
    gameGrid[6].innerText === "X" &&
    gameGrid[7].innerText === "X" &&
    gameGrid[8].innerText === "X"
  ) {
    setTimeout(() => winScreen(playerX.name), to);
    console.log("win");
  } else if (
    gameGrid[6].innerText === "O" &&
    gameGrid[7].innerText === "O" &&
    gameGrid[8].innerText === "O"
  ) {
    setTimeout(() => winScreen(playerO.name), to);
    console.log("win");
  } else if (
    gameGrid[0].innerText === "X" &&
    gameGrid[3].innerText === "X" &&
    gameGrid[6].innerText === "X"
  ) {
    setTimeout(() => winScreen(playerX.name), to);
    console.log("win");
  } else if (
    gameGrid[0].innerText === "O" &&
    gameGrid[3].innerText === "O" &&
    gameGrid[6].innerText === "O"
  ) {
    setTimeout(() => winScreen(playerO.name), to);
    console.log("win");
  } else if (
    gameGrid[1].innerText === "X" &&
    gameGrid[4].innerText === "X" &&
    gameGrid[7].innerText === "X"
  ) {
    setTimeout(() => winScreen(playerX.name), to);
    console.log("win");
  } else if (
    gameGrid[1].innerText === "O" &&
    gameGrid[4].innerText === "O" &&
    gameGrid[7].innerText === "O"
  ) {
    setTimeout(() => winScreen(playerO.name), to);
    console.log("win");
  } else if (
    gameGrid[2].innerText === "X" &&
    gameGrid[5].innerText === "X" &&
    gameGrid[8].innerText === "X"
  ) {
    setTimeout(() => winScreen(playerX.name), to);
    console.log("win");
  } else if (
    gameGrid[2].innerText === "O" &&
    gameGrid[5].innerText === "O" &&
    gameGrid[8].innerText === "O"
  ) {
    setTimeout(() => winScreen(playerO.name), to);
    console.log("win");
  } else if (
    gameGrid[0].innerText === "X" &&
    gameGrid[4].innerText === "X" &&
    gameGrid[8].innerText === "X"
  ) {
    setTimeout(() => winScreen(playerX.name), to);
    console.log("win");
  } else if (
    gameGrid[0].innerText === "O" &&
    gameGrid[4].innerText === "O" &&
    gameGrid[8].innerText === "O"
  ) {
    setTimeout(() => winScreen(playerO.name), to);
    console.log("win");
  } else if (
    gameGrid[2].innerText === "X" &&
    gameGrid[4].innerText === "X" &&
    gameGrid[6].innerText === "X"
  ) {
    setTimeout(() => winScreen(playerX.name), to);
    console.log("win");
  } else if (
    gameGrid[2].innerText === "O" &&
    gameGrid[4].innerText === "O" &&
    gameGrid[6].innerText === "O"
  ) {
    setTimeout(() => winScreen(playerO.name), to);
    console.log("win");
  } else if (
    gameGrid[0].innerText !== "" &&
    gameGrid[1].innerText !== "" &&
    gameGrid[2].innerText !== "" &&
    gameGrid[3].innerText !== "" &&
    gameGrid[4].innerText !== "" &&
    gameGrid[5].innerText !== "" &&
    gameGrid[6].innerText !== "" &&
    gameGrid[7].innerText !== "" &&
    gameGrid[8].innerText !== ""
  ) {
    setTimeout(() => drawScreen(), 250);
    console.log("draw");
  }
}

function winScreen(name) {
  const gameBlockClass = document.querySelectorAll(".gameBlock");
  playerHeader.style.display = "none";
  for (let blck of gameBlockClass) {
    gameScreen.removeChild(blck);
  }
  let winner = document.createElement("div");
  let Pbuton = document.createElement("button");
  let winHeader = document.createElement("h1");
  winHeader.innerText = `${name} win!👑`;
  Pbuton.innerText = "Play Again";
  Pbuton.setAttribute("id", "playAgainButton");
  Pbuton.addEventListener("click", () => {
    gameScreen.removeChild(winner);
    window.location.reload();
  });
  winHeader.setAttribute("id", "winnerHeader");
  winner.className = "winScreen";
  gameScreen.appendChild(winner);
  winner.appendChild(winHeader);
  winner.appendChild(Pbuton);
}
function drawScreen() {
  const gameBlockClass = document.querySelectorAll(".gameBlock");
  playerHeader.style.display = "none";
  for (let blck of gameBlockClass) {
    setTimeout(gameScreen.removeChild(blck), 5000);
  }
  let winner = document.createElement("div");
  let Pbuton = document.createElement("button");
  let winHeader = document.createElement("h1");
  winHeader.innerText = `Draw`;
  Pbuton.innerText = "Play Again";
  Pbuton.setAttribute("id", "playAgainButton");
  Pbuton.addEventListener("click", () => {
    gameScreen.removeChild(winner);
    window.location.reload();
  });
  winHeader.setAttribute("id", "winnerHeader");
  winner.className = "winScreen";
  gameScreen.appendChild(winner);
  winner.appendChild(winHeader);
  winner.appendChild(Pbuton);
}
