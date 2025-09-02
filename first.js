let userScore=0;
let compScore=0;

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#computer-score");
const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx= Math.floor(Math.random()*3);
    return options[randidx];
}
const drawGame=()=>{
    console.log("tie");
    msg.innerText= "Game Draw! play again";
    msg.style.backgroundColor= "yellow";
    msg.style.color= "black";
}
const showWinner = (userWin,userchoice,CompChoice)=>{
    if(userWin){
        userScore++;;
        userScorePara.innerText= userScore;
        console.log("you win!");
        msg.innerText= `your ${userchoice} beats ${CompChoice} and You Win!`;
        msg.style.backgroundColor= "green";
        msg.style.color= "black";
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        console.log("you Lose!");
        msg.innerText= `Computer's ${CompChoice} beats your ${userchoice} and You Lose!`;
        msg.style.backgroundColor= "red";
        msg.style.color= "black";
    }
}

const playGame=(userchoice)=>{
    console.log("user choice", userchoice);
const CompChoice= genCompChoice();
    console.log("comp choice", CompChoice);

    if(userchoice ===  CompChoice){
    drawGame();
}else{
    let userWin= true;
    if(userchoice === "rock"){  //scissors,paper
        userWin = (CompChoice === "paper")? false : true;
    }else if(userchoice === "paper"){ //rock,scissor
        userWin = (CompChoice === "scissor")? false : true;
    }else{ //rock,paper
        userWin = (CompChoice === "paper" )? true : false; 
    }
    showWinner(userWin,userchoice,CompChoice);
}
};

choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        playGame(userchoice);
    });
});