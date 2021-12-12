const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const results = document.getElementById("results");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

playerScore.innerText = "0";
computerScore.innerText = "0";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", btnClick.bind(this, button.value));
});

function btnClick(btnValue) {
  playRound(btnValue, computerPlay());
}

// Randomly generate computer's play
function computerPlay() {
  let computerChoice;
  switch (Math.floor((Math.random() * 3) + 1)) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

// Capitalize a word
function capitalizeWord(word) {
  word = word.toLowerCase();
  let firstLetter = word.slice(0, 1);
  firstLetter = firstLetter.toUpperCase();
  let capitalizedWord = firstLetter + word.slice(1);
  return capitalizedWord;
}

// Determine the winner and the loser of the round
function playRound(playerSelection, computerSelection) {
  let result = "";
  let userScore = Number(playerScore.innerText);
  let pcScore = Number(computerScore.innerText);
  
  if (playerSelection === computerSelection) {
    result = `It's a draw! 😐 ${capitalizeWord(playerSelection)} ties with ${computerSelection}.`;
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      result = `You lose! 🙁 ${capitalizeWord(computerSelection)} beats ${playerSelection}.`;
      pcScore++;
    }
    else if (computerSelection === "scissors") {
      result = `You win! 🙂 ${capitalizeWord(playerSelection)} beats ${computerSelection}.`;
      userScore++;
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = `You win! 🙂 ${capitalizeWord(playerSelection)} beats ${computerSelection}.`;
      userScore++;
    }
    else if (computerSelection === "scissors") {
      result = `You lose! 🙁 ${capitalizeWord(computerSelection)} beats ${playerSelection}.`;
      pcScore++;
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = `You lose! 🙁 ${capitalizeWord(computerSelection)} beats ${playerSelection}.`;
      pcScore++;
    }
    else if (computerSelection === "paper") {
      result = `You win! 🙂 ${capitalizeWord(playerSelection)} beats ${computerSelection}.`;
      userScore++;
    }
  }
  
  updateResults(userScore, pcScore, result);
}

// Update page with results of the round
function updateResults(userScore, pcScore, result) {
  playerScore.innerText = userScore.toString();
  computerScore.innerText = pcScore.toString();
  
  // Check to see if the player or computer has scored 5 points yet
  if (userScore === 5) {
    displayWin(true);
  }
  else if (pcScore === 5) {
    displayWin(false);
  }
  else {
    let outcome = document.createElement("p");
    outcome.textContent = result;
    results.appendChild(outcome);
  }
}

// Disable the buttons and display a win or loss message to the player
function displayWin(playerWon) {
  buttons.forEach((button) => {
    button.disabled = true;
  });
  
  results.textContent = playerWon ? "Congratulations! 🥳 You won this game!" : "Too bad! 🤖 The computer won this game!";
  results.style.fontSize = "25px";
}
