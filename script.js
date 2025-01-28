function playGame() {
  // score variables
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
  }

  //logic of game: 5 rounds
  // for (let i = 0; i < 5; i++) {
  //   const humanSelection = getHumanChoice();
  //   const computerSelection = getComputerChoice();
  //   playRound(humanSelection, computerSelection);
  // }

  // winner declaration!

  //   if (humanScore > computerScore) {
  //     alert("YEY! you won!!!");
  //   } else if (computerScore > humanScore) {
  //     alert("damn it! computer wins the game");
  //   } else {
  //     alert("it's a tie! ");
  //   }
  // }

  // playGame();
}

// 3 buttons

const buttonPaper = document.createElement("button");
const buttonRock = document.createElement("button");
const buttonScissors = document.createElement("button");
buttonPaper.textContent = "paper";
buttonRock.textContent = "rock";
buttonScissors.textContent = "scissors";

document.body.appendChild(buttonPaper);
document.body.appendChild(buttonRock);
document.body.appendChild(buttonScissors);
