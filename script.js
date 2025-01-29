// score variables
let humanScore = 0;
let computerScore = 0;

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

// event listener for 3 buttons

buttonPaper.addEventListener("click", playRound);
buttonRock.addEventListener("click", playRound);
buttonScissors.addEventListener("click", playRound);

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

//logic of round

function playRound(event) {
  let humanChoice = event.target.textContent;
  let computerChoice = getComputerChoice();
  console.log(`you chose: ${humanChoice}`);
  console.log(`computer chose: ${computerChoice}`);
}

// playgame function
function playGame() {
  playRound();
  winnerDeclaraion();
}

// winner check
const winnerCheck = () => {
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
};

// winner declaration!
const winnerDeclaraion = () => {
  if (humanScore > computerScore) {
    alert("YEY! you won!!!");
  } else if (computerScore > humanScore) {
    alert("damn it! computer wins the game");
  } else {
    alert("it's a tie! ");
  }
};
