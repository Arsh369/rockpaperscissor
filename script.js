//for select rock paper and scissor
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissor=document.querySelector("#scissor");
const c=document.querySelector("#c");
const result=document.querySelector("#result");
const userScore=document.querySelector("#userScore0");
const compScore=document.querySelector("#compScore0");
const yourScore=document.querySelector(".your-score");
const comp_score=document.querySelector(".comp-score");
const main=document.querySelector(".main");

let userScorei=0;
let compScorei=0;

function playgame(userChoice){
    //computer choices
    const choices=['rock','paper','scissor'];
    const compChoice=choices[Math.floor(Math.random()*3)];
    //score
    
    //comparison 
    if(userChoice===compChoice){
        c.innerText='its a draw';
    }
    else if(userChoice==='rock'&&compChoice==='scissor'
        ||userChoice==='paper'&&compChoice==='rock'
        ||userChoice==='scissor'&&compChoice==='paper'
    ){  
        c.innerText='You win';
        result.innerText=`${userChoice} beats ${compChoice}`;
        userScorei++;
        userScore.innerText=userScorei;
    }
    else{
        c.innerHTML='You loose';
        result.innerText=`${compChoice} beats ${userChoice}`;
        compScorei++;    
        compScore.innerText=compScorei;
    }
    updateScoreBackground();
}

function updateScoreBackground(){if(userScorei>compScorei){
    yourScore.style.background="yellow";
    comp_score.style.background="pink"
}
else if(userScorei<compScorei){
    comp_score.style.background="yellow";
    yourScore.style.background="pink";
}
else{
    comp_score.style.background="pink";
    yourScore.style.background="pink";
}
};
