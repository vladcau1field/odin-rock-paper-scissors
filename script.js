// score variables
let humanScore = 0;
let computerScore = 0;

// div for results
const divResult = document.createElement("div");
document.body.appendChild(divResult);

// div for

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
  document.body.setAttribute("style", "background-image: white");
  let humanChoice = event.target.textContent;
  let computerChoice = getComputerChoice();
  divResult.textContent = `you chose: ${humanChoice} | computer chose: ${computerChoice}`;

  winnerCheck(humanChoice, computerChoice);
}

// playgame function
function playGame() {
  playRound();
}

// winner check
function winnerCheck(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    divResult.innerHTML += "<p>it's a tie!</p>";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    divResult.innerHTML += `<p>you win! ${humanChoice} beats ${computerChoice}</p>`;
    humanScore++;
  } else {
    divResult.innerHTML += `<p>you lose! ${computerChoice} beats ${humanChoice}</p>`;
    computerScore++;
  }

  divResult.innerHTML += `<p>you: ${humanScore}, computer ${computerScore}</p>`;

  if (humanScore === 5 || computerScore === 5) {
    winnerDeclaration();
  }
}

// winner declaration!
function winnerDeclaration() {
  if (humanScore > computerScore) {
    divResult.innerHTML += "<p>YEY! you won!!!</p>";
    document.body.setAttribute(
      "style",
      "background-image: linear-gradient(90deg, hsl(14deg 100% 78%) 0%, hsl(17deg 100% 77%) 8%, hsl(21deg 100% 75%) 17%, hsl(25deg 100% 74%) 25%, hsl(28deg 100% 73%) 33%, hsl(32deg 100% 71%) 42%, hsl(35deg 100% 70%) 50%, hsl(39deg 100% 69%) 58%, hsl(42deg 100% 67%) 67%, hsl(45deg 100% 66%) 75%, hsl(48deg 100% 65%) 83%, hsl(50deg 99% 64%) 92%, hsl(55deg 92% 62%) 100%);"
    );
  } else {
    divResult.innerHTML += "<p>damn it! computer wins the game</p>";
    document.body.setAttribute(
      "style",
      "background-image: linear-gradient(90deg, hsl(14deg 100% 78%) 0%, hsl(14deg 79% 74%) 8%, hsl(14deg 63% 71%) 17%, hsl(14deg 50% 67%) 25%, hsl(14deg 40% 64%) 33%, hsl(14deg 32% 60%) 42%, hsl(14deg 25% 57%) 50%, hsl(14deg 20% 53%) 58%, hsl(14deg 15% 50%) 67%, hsl(14deg 12% 47%) 75%, hsl(14deg 8% 43%) 83%, hsl(14deg 5% 40%) 92%, hsl(0deg 0% 37%) 100%);"
    );
  }

  humanScore = 0;
  computerScore = 0;
}
