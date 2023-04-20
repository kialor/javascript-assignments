let hands = ["rock", "paper", "scissors"];

function getHand(hands) {
 return hands [parseInt(Math.random(hands) * 10) % 3];
}

let playerOne = {
  name: "First player",
  play: getHand(hands)}

let playerTwo = {
  name: "Second player",
  play: getHand(hands),
};

function playRound(playerOne, playerTwo) {
  
  if (
    (playerOne.play == hands[0] && playerTwo.play == hands[2]) ||
    (playerOne.play == hands[2] && playerTwo.play == hands[1]) ||
    (playerOne.play == hands[1] && playerTwo.play == hands[0])
  ) {
   return playerOne.name+ " wins with " + playerOne.play;

  } else if (
    (playerTwo.play == hands[0] && playerOne.play == hands[2]) ||
    (playerTwo.play == hands[2] && playerOne.play == hands[1]) ||
    (playerTwo.play == hands[1] && playerOne.play  == hands[0])
  ) {
    return playerTwo.name + " wins with " + playerTwo.play;

  } else if (
    (playerTwo.play == hands[0] && playerOne.play == hands[0]) ||
    (playerTwo.play == hands[1] && playerOne.play == hands[1]) ||
    (playerTwo.play == hands[2] && playerOne.play == hands[2])) {
   return "it's a tie";
    } else {
    return null
  }
}

//code before works and gives a win for one round

console.log (playRound(playerOne,playerTwo));

//Part 2....I tried

// let playUntil='';
// function playGame(playerOne, playerTwo, playUntil) {
//  let playerOneWins = 0;
//  let playerTwoWins = 0;

// while (playerOneWins < playUntil && playerTwoWins < playUntil) {  
//  let winner = playRound(playerOne, playerTwo);

//  if (winner == playerOne)  {
//   return playerOneWins++;
//  } else if (winner == playerTwo) {
//   return playerTwoWins++;
//  } 
// }

// if (playerOneWins === playUntil){
//   return playerOne.name + " wins ";
// } else if (playerTwoWins === playUntil) {
//   return playerTwo.name + " wins ";
// }
// }


// console.log(playGame(playerOne,playerTwo,playUntil));


// let playerThree = {
//   name: "Third player",
//   play: getHand(hands)}

// let playerFour = {
//   name: "Fourth player",
//   play: getHand(hands),
// };

// function playTournament (playerOne ,playerTwo,playerThree,playerFour, playUntil) {
//   let groupA =playGame(playerOne,playerTwo,playUntil);
//   let groupB= playGame(playerThree,playerFour, playUntil);
//   let winner = playGame(groupA,groupB,playUntil)
//  return winner
// }

// console.log(playTournament(playerOne ,playerTwo,playerThree,playerFour,) + " is the champion");


