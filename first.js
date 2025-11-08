// let userScore=0;
// let compScore=0;

// const userScorePara= document.querySelector("#user-score");
// const compScorePara= document.querySelector("#computer-score");
// const choices= document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");

// const genCompChoice=()=>{
//     const options=["rock","paper","scissor"];
//     const randidx= Math.floor(Math.random()*3);
//     return options[randidx];
// }
// const drawGame=()=>{
//     console.log("tie");
//     msg.innerText= "Game Draw! play again";
//     msg.style.backgroundColor= "yellow";
//     msg.style.color= "black";
// }
// const showWinner = (userWin,userchoice,CompChoice)=>{
//     if(userWin){
//         userScore++;;
//         userScorePara.innerText= userScore;
//         console.log("you win!");
//         msg.innerText= `your ${userchoice} beats ${CompChoice} and You Win!`;
//         msg.style.backgroundColor= "green";
//         msg.style.color= "black";
//     }else{
//         compScore++;
//         compScorePara.innerText= compScore;
//         console.log("you Lose!");
//         msg.innerText= `Computer's ${CompChoice} beats your ${userchoice} and You Lose!`;
//         msg.style.backgroundColor= "red";
//         msg.style.color= "black";
//     }
// }

// const playGame=(userchoice)=>{
//     console.log("user choice", userchoice);
// const CompChoice= genCompChoice();
//     console.log("comp choice", CompChoice);

//     if(userchoice ===  CompChoice){
//     drawGame();
// }else{
//     let userWin= true;
//     if(userchoice === "rock"){  //scissors,paper
//         userWin = (CompChoice === "paper")? false : true;
//     }else if(userchoice === "paper"){ //rock,scissor
//         userWin = (CompChoice === "scissor")? false : true;
//     }else{ //rock,paper
//         userWin = (CompChoice === "paper" )? true : false; 
//     }
//     showWinner(userWin,userchoice,CompChoice);
// }
// };

// choices.forEach(choice => {
//     choice.addEventListener("click",()=>{
//         const userchoice= choice.getAttribute("id");
//         playGame(userchoice);
//     });
// });



let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const emoji = document.querySelector("#resultEmoji"); // 👈 add this element in HTML

// Computer choice generate
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

// Draw situation
const drawGame = (userchoice) => {
  console.log("tie");
  msg.innerText = `It's a Draw! You both chose ${userchoice}`;
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
  showEmoji("draw");
};

// Show result message
const showWinner = (userWin, userchoice, CompChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = `Your ${userchoice} beats ${CompChoice}! You Win!`;
    msg.style.backgroundColor = "green";
    msg.style.color = "black";
    showEmoji("win");
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose!");
    msg.innerText = `Computer's ${CompChoice} beats your ${userchoice}! You Lose!`;
    msg.style.backgroundColor = "red";
    msg.style.color = "black";
    showEmoji("lose");
  }
};

// Main game function
const playGame = (userchoice) => {
  console.log("user choice", userchoice);
  const CompChoice = genCompChoice();
  console.log("comp choice", CompChoice);

  if (userchoice === CompChoice) {
    drawGame(userchoice);
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      userWin = CompChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = CompChoice === "scissors" ? false : true;
    } else {
      userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, CompChoice);
  }
};

// Click listener for each choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});

// Emoji animation
function showEmoji(type) {
  if (!emoji) return; // skip if emoji element not found

  if (type === "win") emoji.textContent = "😄";
  else if (type === "lose") emoji.textContent = "😢";
  else emoji.textContent = "😐";

  // Animate bounce
  emoji.style.animation = "none";
  setTimeout(() => {
    emoji.style.animation = "bounce 0.6s ease";
  }, 10);
}

