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

// Prompt player for input
function getPlayerInput() {
  let playerChoice = prompt("Please enter your choice (rock|paper|scissors): ");
  playerChoice = playerChoice.toLowerCase();
  while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    playerChoice = prompt("Invalid choice - please try again (rock|paper|scissors): ");
    playerChoice = playerChoice.toLowerCase();
  }
  return playerChoice;
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
  if (playerSelection === computerSelection) {
    return `It's a draw! ${capitalizeWord(playerSelection)} ties with ${computerSelection}.`;
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return `You lose! ${capitalizeWord(computerSelection)} beats ${playerSelection}.`;
    }
    else if (computerSelection === "scissors") {
      return `You win! ${capitalizeWord(playerSelection)} beats ${computerSelection}.`;
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return `You win! ${capitalizeWord(playerSelection)} beats ${computerSelection}.`;
    }
    else if (computerSelection === "scissors") {
      return `You lose! ${capitalizeWord(computerSelection)} beats ${playerSelection}.`;
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return `You lose! ${capitalizeWord(computerSelection)} beats ${playerSelection}.`;
    }
    else if (computerSelection === "paper") {
      return `You win! ${capitalizeWord(playerSelection)} beats ${computerSelection}.`;
    }
  }
}

// Play 5 rounds
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerInput(), computerPlay()));
  }
}

game();