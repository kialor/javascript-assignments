let hands = ["rock", "paper", "scissors"];
let score = {
  playerOne: 0,
  playerTwo: 0,
};

function getHand(hands) {
  return hands[parseInt(Math.random(hands) * 10) % 3];
}

let playerOne = {
  name: "Sally",
  play: "",
};

let playerTwo = {
  name: "Susan",
  play: "",
};

function playRound(playerOne, playerTwo) {
  playerOne.play = getHand(hands);
  playerTwo.play = getHand(hands);

  if (
    (playerOne.play == hands[0] && playerTwo.play == hands[2]) ||
    (playerOne.play == hands[2] && playerTwo.play == hands[1]) ||
    (playerOne.play == hands[1] && playerTwo.play == hands[0])
  ) {
    score.playerOne++;
    return playerOne.name + " wins with " + playerOne.play;
  } else if (
    (playerTwo.play == hands[0] && playerOne.play == hands[2]) ||
    (playerTwo.play == hands[2] && playerOne.play == hands[1]) ||
    (playerTwo.play == hands[1] && playerOne.play == hands[0])
  ) {
    score.playerTwo++;
    return playerTwo.name + " wins with " + playerTwo.play;
  } else if (
    (playerTwo.play == hands[0] && playerOne.play == hands[0]) ||
    (playerTwo.play == hands[1] && playerOne.play == hands[1]) ||
    (playerTwo.play == hands[2] && playerOne.play == hands[2])
  ) {
    return "It's a tie";
  } else {
    return null;
  }
}

function playerInfo() {
  document.getElementById("playerOneName").innerHTML = playerOne.name;
  document.getElementById("playerTwoName").innerHTML = playerTwo.name;
  document.getElementById("playerOnePlay").innerHTML = playerOne.play;
  document.getElementById("playerTwoPlay").innerHTML = playerTwo.play;
}

function playerResult(result) {
  document.getElementById("result").innerHTML = result;
  document.getElementById("playerOneScore").innerHTML = score.playerOne;
  document.getElementById("playerTwoScore").innerHTML = score.playerTwo;
}

function playGame() {
  let result = playRound(playerOne, playerTwo);
  playerInfo();
  playerResult(result);
}

document.getElementById("playButton").addEventListener("click", playGame);