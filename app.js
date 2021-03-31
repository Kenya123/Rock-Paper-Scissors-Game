
// stores user and computer scores
let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score"); //stores DOM element for user score
const compScore_span = document.getElementById("comp-score"); // stores DOM element for computer score
const scoreBoard_div = document.querySelector(".score-board"); //stores DOM class for score board
const result_p = document.querySelector(".result > p"); //stores result class.
//stores the rock paper and scissors icon elements
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
//get reset button
const reset_class = document.getElementById('reset-button');


//generate computer choice
function getCompChoice() {
  const choices = ['r', 'p', 's'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

//convert letters to words
function convertNormal(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  else return "Scissors";
}

//what happens if user wins the round
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = convertNormal(userChoice) + " beats " + convertNormal(computerChoice) + " [You Win!]";
  }

//what happens if user loses the round
function lose(userChoice, computerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = convertNormal(userChoice) + " loses to " + convertNormal(computerChoice) + " [You Lost!]";
}

//what happens if it is a draw
function draw(userChoice, computerChoice) {
  result_p.innerHTML = convertNormal(userChoice) + " equals " + convertNormal(computerChoice) + " [It's a draw!]";
}

//resets scores to zero
function reset() {
  userScore = 0;
  compScore = 0;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
}

//compares user choice and computer choice
function game(userChoice) {
  const computerChoice = getCompChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }


}

function main() {
//add event listeners to send user choice to game function
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })

  reset_class.addEventListener('click', function() {
    reset();
  })
}

main();
