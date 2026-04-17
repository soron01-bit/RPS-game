let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".choice");
const choicesWrap = document.querySelector(".choices");
const msg = document.querySelector("#msg");
const emoji = document.querySelector("#resultEmoji");
const roundDetail = document.querySelector("#round-detail");
const resetBtn = document.querySelector("#reset-btn");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const titleCase = (choice) => choice.charAt(0).toUpperCase() + choice.slice(1);

const setMessageTheme = (type) => {
  if (type === "win") {
    msg.style.backgroundColor = "#2a9d5b";
    msg.style.color = "#ffffff";
    return;
  }
  if (type === "lose") {
    msg.style.backgroundColor = "#d64545";
    msg.style.color = "#ffffff";
    return;
  }
  msg.style.backgroundColor = "#c9871f";
  msg.style.color = "#101010";
};

const drawGame = (userchoice, compChoice) => {
  msg.innerText = `It's a Draw! You both chose ${userchoice}`;
  roundDetail.innerText = `${titleCase(userchoice)} met ${titleCase(compChoice)}. No points this round.`;
  setMessageTheme("draw");
  showEmoji("draw");
};

const showWinner = (userWin, userchoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `Your ${userchoice} beats ${compChoice}! You Win!`;
    roundDetail.innerText = `Clean move. ${titleCase(userchoice)} outplayed ${titleCase(compChoice)}.`;
    setMessageTheme("win");
    showEmoji("win");
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `Computer's ${compChoice} beats your ${userchoice}! You Lose!`;
    roundDetail.innerText = `Tough round. ${titleCase(compChoice)} counters ${titleCase(userchoice)}.`;
    setMessageTheme("lose");
    showEmoji("lose");
  }
};

const playGame = (userchoice) => {
  const compChoice = genCompChoice();

  if (userchoice === compChoice) {
    drawGame(userchoice, compChoice);
  } else {
    const userWin =
      (userchoice === "rock" && compChoice === "scissor") ||
      (userchoice === "paper" && compChoice === "rock") ||
      (userchoice === "scissor" && compChoice === "paper");
    showWinner(userWin, userchoice, compChoice);
  }
};

const animateSigns = (selectedChoice) => {
  choices.forEach((item) => {
    item.classList.remove("animating", "press-animate");
  });

  // Force reflow so animation can restart even on repeated clicks.
  void choicesWrap.offsetWidth;

  choices.forEach((item) => item.classList.add("animating"));
  selectedChoice.classList.add("press-animate");

  setTimeout(() => {
    choices.forEach((item) => item.classList.remove("animating", "press-animate"));
  }, 380);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");

    choices.forEach((item) => item.classList.remove("selected"));
    choice.classList.add("selected");
    animateSigns(choice);

    playGame(userchoice);
  });
});

function showEmoji(type) {
  if (!emoji) return;

  if (type === "win") emoji.textContent = "😄";
  else if (type === "lose") emoji.textContent = "😢";
  else emoji.textContent = "😐";

  emoji.style.display = "block";
  emoji.style.animation = "none";
  setTimeout(() => {
    emoji.style.animation = "bounce 0.3s ease";
  }, 10);

  setTimeout(() => {
    emoji.style.display = "none";
  }, 1500);
}

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Fresh start. Make your move";
  msg.style.backgroundColor = "#22313f";
  msg.style.color = "#ffffff";
  roundDetail.innerText = "Scores cleared. Time to dominate.";
  choices.forEach((item) => item.classList.remove("selected"));
});



