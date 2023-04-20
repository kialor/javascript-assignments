let hands = ["rock", "paper", "scissors"];

function getHand(hands) {
  return hands[parseInt(Math.random() * 10) % 3];
}

let playerOne = {
  name: "First player",
  getHand: getHand(hands),
};
let playerTwo = {
  name: "Second player",
  getHand: getHand(hands),
};

function playRound(playerOne, playerTwo) {
  let playerOneHand = playerOne.getHand;
  let playerTwoHand = playerTwo.getHand;

  if (
    (playerOneHand === "rock" && playerTwoHand === "scissors") ||
    (playerOneHand === "paper" && playerTwoHand === "rock") ||
    (playerOneHand === "scissors" && playerTwoHand === "paper")
  ) {
    return (
      playerOne.name +
      " wins with " +
      playerOneHand +
      " over " +
      playerTwo.name +
      " playing " +
      playerTwoHand
    );
  } else if (
    (playerTwoHand === "rock" && playerOneHand === "scissors") ||
    (playerTwoHand === "paper" && playerOneHand === "rock") ||
    (playerTwoHand === "scissors" && playerOneHand === "paper")
  ) {
    return (
      playerTwo.name +
      " wins with " +
      playerTwoHand +
      " over " +
      playerOne.name +
      " playing " +
      playerOneHand
    );
  } else {
    return "it's a tie";
  }
}

console.log(playRound(playerOne, playerTwo));

//code before works and gives a win for one round

//Part 2....I tried

