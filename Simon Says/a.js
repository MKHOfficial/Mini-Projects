let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","Green"];
let level=0;
let started=false;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started=false){
        console.log("Game started");
        started=true;

        levelUp();
    }
})

function btnPress(){
    console
}

function levelUp(){
    level++;
    h2.innerHTML=`Level ${level}`;
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}