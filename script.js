let humanScore = 0;
let computerScore = 0;

// getting computer choice
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

// getting human choice
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

function playGame() {
  //logic of round
  function playRound(humanChoice, computerChoice) {
    console.log(`you chose:${humanChoice} `);
    console.log(`computer chose: ${computerChoice}`);

    // winner check
    if (humanChoice === computerChoice) {
      console.log("it's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`you win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
    console.log(
      `damn look at it!  you - ${humanScore}, computer ${computerScore}`
    );
  }

  //logic of game
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}
