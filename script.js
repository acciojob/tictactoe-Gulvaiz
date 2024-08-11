let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let player1 = '';
let player2 = '';

function gameStart() {
    player1 = document.querySelector("#player1").value;
    player2 = document.querySelector("#player2").value;

    let playersName = document.querySelector(".players_name");
    let game = document.querySelector(".game");

    playersName.classList.add("hide");
    game.classList.remove("hide");

    let message = document.querySelector(".message");
    message.innerText = `${player1}, you're up`;

    let boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box, index) => {
        box.addEventListener("click", () => handleBoxClick(index));
    });
}

function handleBoxClick(index) {
    if (gameState[index] !== '') return;

    gameState[index] = currentPlayer;
    document.getElementById(index).innerText = currentPlayer;

    if (checkWin()) {
        document.querySelector(".message").innerText = `${currentPlayer === 'X' ? player1 : player2} wins!`;
    } else if (gameState.every(cell => cell !== '')) {
        document.querySelector(".message").innerText = "It's a draw!";
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.querySelector(".message").innerText = `${currentPlayer === 'X' ? player1 : player2}, you're up`;
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
    });
}
