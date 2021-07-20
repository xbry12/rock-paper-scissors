// alert("Pick your weapon!");

let playerSelection = ["rock", "paper", "scissors"];
let computerSelection = computerPlay();

// testing the function
let myHand = selectMine();

/////////////////////////////////////////////

// Random generated hand:
function selectMine() {
  let myPick =
    playerSelection[Math.floor(Math.random() * playerSelection.length)];
  return myPick;
}

//////////////////////////////////////////////

function computerPlay() {
  let myTurn =
    playerSelection[Math.floor(Math.random() * playerSelection.length)];
  return myTurn;
  // return playerSelection;
}

// function playerRound(myHand, computerPlay) {
//   return ` You lose ${myHand} beats ${computerPlay}!`;
// }

function game(myHand, computerSelection) {
  // use array.map, or a filter, or reduce instead of a for loop
  // first check array for what player picks
  // check array for what the computer picks (randomized result)
  // compare both results and see
  console.log("start game");

  // checking for tie
  if (myHand === computerSelection) {
    return "It is a tie";
  }
  // check for rock
  if (myHand === "rock") {
    if (computerSelection === "scissors") {
      return "You Win";
    } else {
      return "Computer Wins";
    }
  }

  // check for paper
  if (myHand === "paper") {
    if (computerSelection === "scissors") {
      return "Computer Wins";
    } else {
      return "You Win";
    }
  }

  // check for scissors
  if (myHand === "scissors") {
    if (computerSelection === "rock") {
      return "Computer Wins";
    } else {
      return "You Wins";
    }
  }
}

// console.log(playerRound(playerSelection, computerSelection));
console.log(game(myHand, computerSelection));
console.log("I pick " + myHand);
console.log("Computer Picks " + computerPlay());

//   switch (myHand + computerSelection) {
//     case ("rock","scissors"):
//         console.log("comparing")
//     case ("paper", "rock"):
//     case ("scissors", "paper"):
//       console.log("You Win");
//       break;
//     case ("rock", "paper"):
//     case ("paper", "scissors"):
//     case ("scissors", "rock"):
//       console.log("You Lose");
//       break;
//     case (myHand === computerSelection):
//     // case ("scissors", "scissors"):
//     // case ("rock", "rock"):
//       console.log("It's a draw");
//       break;
//   }
//   return `${myHand} vs ${computerSelection}`;
