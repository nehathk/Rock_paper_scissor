let userScore=0;
let compScore=0;
const msg= document.querySelector(".msg");
const genCompChoice=()=>{
   const options= ["rock","paper","scissor"];
   const ind= Math.floor(Math.random()*3);
   return options[ind];

}
let cscore= document.querySelector("#comp-score");
let uscore= document.querySelector('#user-score');
const updateScore=(userWin)=>{
    if(userWin){
        userScore+=1;
        uscore.innerText= userScore;

    }
    else{
        compScore+=1;
        cscore.innerText= compScore;
    }



}
const draw= ()=>{
    msg.innerText="Game Draw";
}
const display=(userWin)=>{
    if(userWin){
        msg.innerText="You Won!"
        msg.classList.remove("msg");
        msg.classList.remove("lose");
        msg.classList.add("win");
    }
    else{
        msg.innerText="You Lost";
        msg.classList.remove("msg");
        msg.classList.remove("win");
        msg.classList.add("lose");
    }
}

const playGame =(userChoice)=>{
    console.log("user choice is",userChoice);
    const compChoice= genCompChoice();
    console.log("compchoice is",compChoice);
    let userWin= true;
    if(userChoice===compChoice){
        draw();
        userWin= false;
        msg.classList.remove("win");
        msg.classList.remove("lose");
        msg.classList.add("msg");
    }
    else{
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                userWin= false;
            }
            else{
                userWin= true;
            }
        }
        else if(userChoice==="paper"){
            if(compChoice=="rock"){
                userWin= true;
            }
            else{
                userWin= false;
            }
        }
        else{
            if(compChoice=="paper"){
                userWin= true;
            }
            else{
                userWin= false;
            }
        }
        display(userWin);

    }
    updateScore(userWin);




}

const choices= document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})
