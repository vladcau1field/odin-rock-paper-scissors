let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  let choice = prompt("rock, paper, or scissors?");
  choice = choice.toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("invalid choice. CHOOSE YOUR FIGHTER");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  // player wins
  if (humanChoice === `paper` && computerChoice === `rock`) {
    console.log(`player win! ${humanChoice} beat ${computerChoice}! `);
    increaseScore("player");
    return "player";
  } else if (humanChoice === `rock` && computerChoice === `scissors`) {
    console.log(`player win! ${humanChoice} beat ${computerChoice}! `);
    increaseScore("player");
    return "player";
  } else if (humanChoice === `scissors` && computerChoice === `paper`) {
    console.log(`player win! ${humanChoice} beat ${computerChoice}! `);
    increaseScore("player");
    return "player";
  }

  // computer wins
  else if (computerChoice === `paper` && humanChoice === `rock`) {
    console.log(`computer win! ${computerChoice} beat ${humanChoice}! `);
    increaseScore("computer");
    return "computer";
  } else if (computerChoice === `rock` && humanChoice === `scissors`) {
    console.log(`computer win! ${computerChoice} beat ${humanChoice}! `);
    increaseScore("computer");
    return "computer";
  } else if (computerChoice === `scissors` && humanChoice === `paper`) {
    console.log(`computer win! ${computerChoice} beat ${humanChoice}! `);
    increaseScore("computer");
    return "computer";
  } else {
    console.log("damn it! how you did it?");
  }
}

function increaseScore(winner) {
  if (winner === "player") {
    ++humanScore;
    return console.log(humanScore);
  } else if (winner === "computer") {
    ++computerScore;
    return console.log(computerScore);
  } else {
    return;
  }
}
