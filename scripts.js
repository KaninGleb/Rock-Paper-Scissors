let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ['rock', 'scissors', 'paper'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerChoice) {
    const computerChoice = computerPlay();
    let result;

    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        result = `You Win!`;
    } else {
        computerScore++;
        result = `You Lose!`;
    }

    alert(`Computer chose: ${computerChoice}`);
    updateResult(result);
    checkWinner();
}

function updateResult(result) {
    let color;
    if (result === "You Win!") {
        color = "#28a745";
    } else if (result === "You Lose!") {
        color = "#dc3545";
    } else {
        color = "#6c757d";
    }

    document.getElementById('result').innerHTML = `
        <p style="color: ${color};">${result}</p>
        <p>Your score: ${playerScore}</p>
        <p>Computer's score: ${computerScore}</p>`;
}


function checkWinner() {
    if (playerScore === 3) {
        alert("Congratulations! You won! 🥇");
        resetGame();
    } else if (computerScore === 3) {
        alert("The computer won! 😭 Try again.");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateResult("");
}