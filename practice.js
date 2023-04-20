// let hands = ["rock", "paper", "scissors"];

// function getHand() {
//     return hands[parseInt(Math.random() * 10) % 3]; // Updated to directly access the hand using the generated index //OMG THIS WAS AWFUL I WANNA CRY I wish I'd known I made my code wrong right here yesterday :'( 

// }

// // info about the players who will play
// let playerObjectOne = {name: "Player 1", method: getHand};
// let playerObjectTwo = {name: "Player 2", method: getHand};
// let playerObjectThree = {name: "Player 3", method: getHand};
// let playerObjectFour = {name: "Player 4", method: getHand};

// function playRound(playerObjectOne, playerObjectTwo) {
//     //player1hand and player2hand keep track of the hands during the round throughout the function
//     let player1hand = playerObjectOne.method(); 
//     let player2hand = playerObjectTwo.method();


// //Logs what the hands are, moved to top of function from below if/else statement
//     console.log(playerObjectOne.name + "'s hand: " + player1hand);
//     console.log(playerObjectTwo.name + "'s hand: " + player2hand);

//     if (player1hand === player2hand) {
//         console.log("It's a tie!");
//         return null; // figured out null is supposed to go here
//     } else if (player1hand === "rock" && player2hand === "scissors") {
//         console.log(playerObjectOne.name + " wins.");
//         return playerObjectOne;//returns the object of player 1
//     } else if (player1hand === "scissors" && player2hand === "paper") {
//         console.log(playerObjectOne.name + " wins.");
//         return playerObjectOne;
//     } else if (player1hand === "paper" && player2hand === "rock") {
//         console.log(playerObjectOne.name + " wins.");
//         return playerObjectOne;
//     } else if (player1hand === "paper" && player2hand === "scissors") {
//         console.log(playerObjectTwo.name + " wins.");
//         return playerObjectTwo; //returns the object of player2
//     } else if (player1hand === "scissors" && player2hand === "rock") {
//         console.log(playerObjectTwo.name + " wins.");
//         return playerObjectTwo;
//     } else if (player1hand === "rock" && player2hand === "paper") {
//         console.log(playerObjectTwo.name + " wins.");
//         return playerObjectTwo;
//     }// took out else statement because it wasn't necessary and the return null I originally made it do should go at the top with tie so that function playGame actually can read a reason not to give a point
// }

// playRound(playerObjectOne, playerObjectTwo);

// function playGame(playerObjectOne, playerObjectTwo, playUntil) {
//     let player1Wins = 0;
//     let player2Wins = 0;



//     while (player1Wins < playUntil && player2Wins < playUntil) {
//         let resultWinner = playRound(playerObjectOne, playerObjectTwo); //resultWinner pulls the return from playRound. The return is the object of the winner's info of name and hand
//         if (resultWinner === null) {}
//         else if (resultWinner.name === playerObjectOne.name) {player1Wins += 1;} // gives the winner a point to be stored in a local variable
//         else if (resultWinner.name === playerObjectTwo.name) {player2Wins += 1;}
//     }


//     //anounces who wins
//     if (player1Wins === playUntil) {
//         return playerObjectOne;
//     } else {
//         return playerObjectTwo; 
//     }
// }


// //why is this hard
// function playTournament(playerObjectOne, playerObjectTwo, playerObjectThree, playerObjectFour, playUntil) {
//     let round1Winner = playGame(playerObjectOne, playerObjectTwo, playUntil); //round1Winner holds who wins round 1
//     let round2Winner = playGame(playerObjectThree, playerObjectFour, playUntil);//round2Winner holds who wins round 2
//     let tournamentWinner = playGame(round1Winner, round2Winner, playUntil); //takes the previous 2 winners and pits them in a game
//     return tournamentWinner;
// }

// let tournamentWinner = playTournament(playerObjectOne, playerObjectTwo, playerObjectThree, playerObjectFour, 3);  // 2. playUntil 3 wins per game
// console.log(tournamentWinner.name + " is the world champion!");

// let array = [];
// let n = 35231;

// function digitize(n) {
//   let string = n.toString();
//   for (let i = string.length -1 ; i >= 0; i --){
//     array.push(parseInt(string[i]));
//   }
//   return array;
// }

// console.log(digitize(n));

//ROCKPAPERSCISSORS ATTEMPT 2

// let hands = ["rock", "paper", "scissors"];

// function getHand(hands){
//     return hands[parseInt(Math.random()*10)%3];
// }

// let playerOne = {
//     name: "First player",
//     getHand: getHand(hands),
// }
// let playerTwo = {
//     name: "Second player",
//     getHand: getHand(hands),
// }

// function playRound (playerOne, playerTwo) {
//     let playerOneHand = playerOne.getHand;
//     let playerTwoHand = playerTwo.getHand;

//     if ((playerOneHand === "rock" && playerTwoHand === "scissors") ||
//         (playerOneHand === "paper" && playerTwoHand === "rock") ||
//         (playerOneHand === "scissors" && playerTwoHand === "paper")) {
//             return playerOne.name+ " wins with " + playerOneHand + " over " +playerTwo.name+" playing " +playerTwoHand;
//         } else if ((playerTwoHand === "rock" && playerOneHand === "scissors") ||
//             (playerTwoHand === "paper" && playerOneHand === "rock") ||
//             (playerTwoHand=== "scissors" && playerOneHand === "paper")) {
//                 return playerTwo.name+ " wins with " + playerTwoHand + " over " +playerOne.name +" playing " + playerOneHand;
//             } else {
//                 return "it's a tie";
//             }
// }



// function playGame(playerOne, playerTwo, playUntil) {
//     //let both[playerscores start with 0]
//     let player1Score = 0;
//     let player2Score = 0;

//     while (player1Score < playUntil && player2Score < playUntil) {
//         console.log(playerOne.name + " score " + player1Score + " and " +playerTwo.name + " score " + player2Score);

//         let winner = playRound(playerOne, playerTwo); 
//         if (winner === null) {
//          } else if (winner.name  === playerOne.name) {
//                 player1score++;
//         }else if (winner.name === playerTwo.name){
//             player2Score ++;

//         }
//     }
//     if (player1Score === playUntil){
//         return playerOne.name + " wins game" 
//     } else {
//         return playerTwo.name + " wins game"
//     }
// }


// console.log(playRound(playerOne, playerTwo));
// console.log(playGame(playerOne, playerTwo, 3));



// function reverseNumber(num){
//  let reverse= "";
//  num=num.toString();
//  for(let i = num.length-1; i>=0; i--){
//     reverse += num[i]
//  }
//  return reverse;
// }

// console.log(reverseNumber(349210));

// function alphabeticalOrder (string) {
//     let array = string.split("");
//     array.sort()
//     let sortString = array.join("");
//     return sortString;
// }

// console.log(alphabeticalOrder("webmaster"));

// function upperCase (string){
//     let words = string.split(" ");
//     for (let i=0; i < words.length; i++) {
//         let currentWord = words[i];
//         let capitalizedWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
//         words[i] = capitalizedWord;
//     }
//     let capitalizeString = words.join(" ");
//     return capitalizeString;
// }

// console.log(upperCase("the quick brown fox"));


//quizApp

// let quiz = [
//     {
//     question: "Who directed the Titanic?",
//     options:["Steven Spielerg", "James Cameron", "Alfred Hitchcock", "Quentin Tarantino"],
//     answer: "James Cameron",
//     },

//     {
//         question: "What year did Pearl Harbor happen?",
//         options:[1941, 1945, 1950, 1942],
//         answer: 1941,
//         },

//     {
//         question: "Which dog breed is the best",
//         options:["poodle", "shihtzu", "pitbull", "chihuahua"],
//         answer: "poodle",
//         },
// ]

// function askQuestion(question) {
//     console.log(quiz.question);
//     console.log(quiz.options);
//     console.log(quiz.answer);
// }

// const users = [
//     {name: 'Alberta Johnson', isActive: true, age: 33},
//     {name: 'Darnell Thompson', isActive: false, age: 25},
//     {name: 'Sally Seashell', isActive: false, age: 41},
//     {name: 'Inija Rosas', isActive: true, age: 56},
//   ];
  
//   const returnNameAndAge = users.map(user => user.name + " is " + user.age + 'years old.');
  
//   console.log(returnNameAndAge);

// let photoSlideShow = {
//     photoList: ["walking dog", "eating ice cream", "beach waves", "sunny field"],
//     currentPhotoIndex: 0,

//     nextPhoto: function () {
//         if (this.currentPhotoIndex < this.photoList.length -1 ){
//             this.currentPhotoIndex + 1;
//             console.log(this.photoList[this.currentPhotoIndex]);
//         } else {
//             console.log("End of slideshow");
//         }
//     },

//     prevPhoto: function () {
//         if (this.currentPhotoIndex > 0) {
//             this.currentPhotoIndex - 1;
//             console.log(this.photoList[this.currentPhotoIndex]);
//         } else {
//             console.log("Start of slideshow");
//         }
//     },

//     getCurrentPhoto: function () {
//        return this.photoList[this.currentPhotoIndex];
//        }
// };

// console.log(photoSlideShow.getCurrentPhoto());
// photoSlideShow.nextPhoto();
// photoSlideShow.prevPhoto();


// let photoSlideShow = {
//   photoList: ["walking dog", "eating ice cream", "beach waves", "sunny field"],
//   currentPhotoIndex: 1,

//   getCurrentPhoto: function () {
//     return this.photoList[this.currentPhotoIndex];
//   },

//   prevPhoto: function () {
//     let originalIndex = this.currentPhotoIndex;
//     for (let i = this.currentPhotoIndex - 1; i >= 0; i--) {
//       if (i === this.currentPhotoIndex - 1) {
//         this.currentPhotoIndex = i;
//         return this.photoList[this.currentPhotoIndex];
//       }
//     }
//     this.currentPhotoIndex = originalIndex;
//     return "Start of slideshow";
//   },
// }

// console.log(photoSlideShow.prevPhoto());
// console.log(photoSlideShow.getCurrentPhoto());


// const photoSlideShow ={
//     let photoSlideShow = {
//         photoList: ["walking dog", "eating ice cream", "beach waves", "sunny field"],
//         currentPhotoIndex: 3,
    
//         nextPhoto: function () {
//             for (let i = 0; i < this.photoList.length; i++) {
//               if (i === this.currentPhotoIndex + 1) {
//                 this.currentPhotoIndex = i;
//                 return this.photoList[this.currentPhotoIndex];
              
//               }
//             }
//             return "End of slideshow";
//         },
    
//         prevPhoto: function () {
//             for (let i = 0; i < this.photoList.length; i++) {
//                 if (i === this.currentPhotoIndex - 1) {
//                   this.currentPhotoIndex = i;
//                   return this.photoList[this.currentPhotoIndex];
//                 }
//             }
//             return "Start of slideshow";
//         },
    
//         getCurrentPhoto: function () {
//             return this.photoList[this.currentPhotoIndex];
//         }
//     };
    
//     console.log(photoSlideShow.nextPhoto());
//     console.log(photoSlideShow.prevPhoto());
//     console.log(photoSlideShow.getCurrentPhoto());
    
    

// let photoSlideShow = {
//     photoList: ["walking dog", "eating ice cream", "beach waves", "sunny field"],
//     currentPhotoIndex: 2,
  
//     nextPhoto: function () {
//       if (this.currentPhotoIndex < this.photoList.length - 1) {
//         this.currentPhotoIndex =this.currentPhotoIndex + 1;
//         console.log(this.photoList[this.currentPhotoIndex]);
//       } else {
//         console.log("End of slideshow");
//       }
//     },
  
//     prevPhoto: function () {
//       if (this.currentPhotoIndex > 0) {
//           this.currentPhotoIndex = this.currentPhotoIndex - 1;
//         console.log(this.photoList[this.currentPhotoIndex]);
//       } else {
//         console.log("Start of slideshow");
//       }
//     },
  
//     getCurrentPhoto: function () {
//       return this.photoList[this.currentPhotoIndex];
//     },
//   };
  
//   console.log(photoSlideShow.getCurrentPhoto());
//   photoSlideShow.nextPhoto();
//   photoSlideShow.prevPhoto();
  

// let hands = ["rock", "paper", "scissors"];

// function getHand(hands) {
//  return hands [parseInt(Math.random() * 10) % 3];
// }

// let playerOne = {
//   name: "First player",
//   play: getHand(hands)}

// let playerTwo = {
//   name: "Second player",
//   play: getHand(hands),
// };

// function playRound(playerOne, playerTwo) {
  
//   if (
//     (playerOne.play == hands[0] && playerTwo.play == hands[2]) ||
//     (playerOne.play == hands[2] && playerTwo.play == hands[1]) ||
//     (playerOne.play == hands[1] && playerTwo.play == hands[0])
//   ) {
//    return playerOne.name+ " wins with " + playerOne.play;

//   } else if (
//     (playerTwo.play == hands[0] && playerOne.play == hands[2]) ||
//     (playerTwo.play == hands[2] && playerOne.play == hands[1]) ||
//     (playerTwo.play == hands[1] && playerOne.play  == hands[0])
//   ) {
//     return playerTwo.name + " wins with " + playerTwo.play;

//   } else if (
//     (playerTwo.play == hands[0] && playerOne.play == hands[0]) ||
//     (playerTwo.play == hands[1] && playerOne.play == hands[1]) ||
//     (playerTwo.play == hands[2] && playerOne.play == hands[2])) {
//    return "it's a tie";
//     } else {
//     return null
//   }
// }

// function playGame(playerOne, playerTwo, playUntil) {
//   let playerOneWins = 0;
//   let playerTwoWins = 0;
  
//   while (playerOneWins < playUntil && playerTwoWins < playUntil) {


//     let winner = playRound(playerOne, playerTwo);
    
//     if (winner == playerOne) {
//       playerOneWins++;
//       console.log(playerOne.name + " wins round " + (playerOneWins + playerTwoWins));
//     } else if (winner == playerTwo) {
//       playerTwoWins++;
//       console.log(playerTwo.name + " wins round " + (playerOneWins + playerTwoWins));
//     } else if ( winner == null) {
//       console.log("Round " + (playerOneWins + playerTwoWins) + " is a tie");
//     }
//   }
  
//   if (playerOneWins === playUntil) {
//     console.log(playerOne.name + " wins the game");
//   } else if (playerTwoWins === playUntil) {
//     console.log(playerTwo.name + " wins the game");
//   }

// }


// playGame(playerOne, playerTwo, 3);


function greeting (name){
  console.log("hello " +name);
}
greeting("nick")