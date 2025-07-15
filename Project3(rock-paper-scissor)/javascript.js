let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");

const genCompChoice=()=>{//generate comp choice and return to playGame fun
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);//use to choose random choice from given array 
    // Math.random()=>generate random num butween 0-1 in float
    // Math.random()*3()=>generate random num butween 0-2 float
    // Math.floor(Math.random()*3)()=>generate random num butween 0-2 int
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game was draw.";
    msg.style.backgroundColor="rgba(199, 103, 220, 0.845";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        user.innerText=userScore;
        msg.innerText=`You Win!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        comp.innerText=compScore;
        msg.innerText=`You Lost!${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{//take comp and user choices and diside who win!
    const compChoice=genCompChoice();//return value of genCompChoice fun

    //Drow Game
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //comp-choice->paper or scissors
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //comp-choice->rock or scissors
            userWin=compChoice==="scissors"?false:true;
        }else{
            //comp-choice->rock or paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{//main fun
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});


