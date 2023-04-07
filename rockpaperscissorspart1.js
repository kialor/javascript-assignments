let hands = ["rock", "paper", "scissors"];

function getHand(hands) {
  let returnHand = parseInt(Math.random(hands) * 10) % 3;
  return hands;
}

let playerOne = {
  name: "First player",
  turn: getHand(hands),
};

let playerTwo = {
  name: "Second player",
  turn: getHand(hands),
};

function playRound(playerOne, playerTwo) {
    let firstplayer = getHand(hands);
    let secondplayer = getHand(hands);
  if (
    (firstplayer == hands[0] && secondplayer == hands[2]) ||
    (firstplayer == hands[2] && secondplayer == hands[1]) ||
    (firstplayer == hands[1] && secondplayer == hands[0])
  ) {
  console.log("player one wins using " + getHand(hands));
  } else if (
    (secondplayer == hands[0] && firstplayer == hands[2]) ||
    (secondplayer == hands[2] && firstplayer == hands[1]) ||
    (secondplayer == hands[1] && firstplayer == hands[0])
  ) {
    console.log("player two wins using " + getHand(hands));
  } else if (
    (secondplayer == hands[0] && firstplayer == hands[0]) ||
    (secondplayer == hands[1] && firstplayer == hands[1]) ||
    (secondplayer == hands[2] && firstplayer == hands[2])) {
   console.log("it's a tie");
    } else {
    return null
  }
}

playRound(playerOne,playerTwo);
