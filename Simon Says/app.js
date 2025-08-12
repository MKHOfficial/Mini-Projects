let gameSeq=[];
let userSeq=[];

 let btns=["yellow","red","purple","Green"];
let started=false;
let level=0;

////
let h1=document.querySelector("h1");
function startColorAnimation() {
    let colors = ["red", "orange", "purple", "green", "blue"];
    let currentIndex = 0;
    
    intervalId = setInterval(() => {
        h1.style.color = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }, 1000);

}
startColorAnimation();




let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game started");
        started=true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}



function levelUp(){
    userSeq=[]; 
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3); 
    let randColor=btns[randIdx];
    let ranbtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash (ranbtn);

}
let score=[];
let highestscore;
if(score.length==0){
    highestscore=0;
}
else{
    highestscore=Math.max(score);
}

function checkAns(idx){
    // console.log(`current level ${level}`); 
   
    if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length===gameSeq.length){
        score.push(level);
        console.log(`Highest score is ${highestscore}`);
        setTimeout(levelUp,1000)
    }  
    }
    else{
        
        h2.innerHTML =`Game over! Your score was ${level} <br> Highest score : ${highestscore}<br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
            
        },150);

       reset();
    }
}

function btnPress(){
  
    let btn=this; 
    userFlash(btn);

    userColor=btn.getAttribute("id");
    
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}