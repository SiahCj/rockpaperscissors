const gameChoice = [`rock`, `paper`, `scissors`];

  function computerPlay(){
    return gameChoice[Math.floor(Math.random() * gameChoice.length)];   
}

  function playRound(playerSelection) {
      const computerSelection = computerPlay();
      let tie = document.getElementById("tie");
      let compScore = document.getElementById("compScore");
      let pScore = document.getElementById("pScore");

      if (playerSelection == computerSelection){
        document.getElementById("result").textContent = "It's a Tie";
        tie.innerHTML = parseInt(tie.innerHTML) + 1;
        return;
      } else if(playerSelection ==="rock" && computerSelection ==="paper"){
        document.getElementById("result").textContent = "Computer Wins !X_X!";
        compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
        return "computer";
      } else if(playerSelection ==="paper" && computerSelection ==="rock"){
        document.getElementById("result").textContent = "Player Wins !=)!";
        pScore.innerHTML = parseInt(pScore.innerHTML) + 1;
        return "player";
      } else if(playerSelection ==="paper" && computerSelection ==="scissors"){
        document.getElementById("result").textContent = "Computer Wins !X_X!";
        compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
        return "computer";
      } else if(playerSelection ==="scissors" && computerSelection ==="paper"){
        document.getElementById("result").textContent = "Player Wins !=)!";
        pScore.innerHTML = parseInt(pScore.innerHTML) + 1;
        return "player";
      } else if(playerSelection ==="rock" && computerSelection ==="scissors"){
        document.getElementById("result").textContent = "Player Wins !=)!";
        pScore.innerHTML = parseInt(pScore.innerHTML) + 1;
        return "player";
      } else if(playerSelection ==="scissors" && computerSelection ==="rock"){
        document.getElementById("result").textContent = "Computer Wins !X_X!";
        compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
        return "computer";
      }
    }

let playerScore = 0;
let computerScore = 0;
let draws = 0;

function playRoundWrapper(playerSelection) { // playRoundWrapper allows us to grow the playRound function with more conditions 
  const winner = playRound(playerSelection);

  // functions to add to either player's score if they won a round
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
    
  }

  function resetScores() {
    playerScore = 0;
    computerScore = 0;
    tie.innerHTML = 0;
  }

  // statement to react when either player gets to the winning total score
  if (playerScore === 5) {
    alert(document.getElementById("result").textContent = "You got to 5 first, YOU WIN!");
    resetScores();
  } else if (computerScore === 5) {
    alert(document.getElementById("result").textContent = "The computer got to 5 first, LOSER!");
    resetScores();
  }

  pScore.innerHTML = playerScore;
  compScore.innerHTML = computerScore;
}
// add images to the buttons instead of text
// display which selections were made in the previous round, ie "rock image " > "scissors image"
// lets see how the future assignments style the game