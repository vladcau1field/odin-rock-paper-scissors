let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let value = Math.floor(Math.random() * 100) + 1;
  if (value <= 30) {
    value = "rock";
  } else if (value > 30 && value <= 60) {
    value = "paper";
  } else {
    value = "scissors";
  }

  return value;
}

function getHumanChoice() {
  let choice = prompt("paper? rock? scissors?");
  if (choice === "paper") {
    choice = "paper";
  } else if (choice === "rock") {
    choice = "rock";
  } else if (choice === "scissors") {
    choice = "scissors";
  } else if (choice === null) {
    getHumanChoice();
  } else {
    let wrongChoice = choice;
    alert(`${wrongChoice} is NOT what i need. 
      CHOOSE YOUR FIGHTER`);
    choice = null;
  }
  return choice != null ? choice : getHumanChoice();
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  // player wins
  if (humanChoice === `paper` && computerChoice === `rock`) {
    console.log(`player win! ${humanChoice} beat ${computerChoice}! `);
    return humanChoice;
  } else if (humanChoice === `rock` && computerChoice === `scissors`) {
    console.log(`player win! ${humanChoice} beat ${computerChoice}! `);
    return humanChoice;
  } else if (humanChoice === `scissors` && computerChoice === `paper`) {
    console.log(`player win! ${humanChoice} beat ${computerChoice}! `);
    return humanChoice;
  }
}
