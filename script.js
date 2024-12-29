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
