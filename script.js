function randomNum(num){
    return Math.floor(Math.random()*num);
}
let userChoice;
let rock=document.querySelector("#rock");
let result=document.querySelector("#status");
let myScore=document.querySelector("#my_score");
let compScore=document.querySelector("#comp_score");
let a=0;
let b=0;
rock.addEventListener("click",(e)=>{
    userChoice="rock";
    console.log(userChoice);
    let comp=randomNum(3);
    console.log(comp);
   
    if(comp===0){
        result.innerText="DRAW";
    
    }
    else if(comp===1){
        result.innerText="YOU LOST";
        b++;
        compScore.innerText=b;
        result.classList.add("lostbg");
        result.classList.remove("winbg");

    }
    else if(comp===2){
        result.innerText="YOU WIN!!";
        a++;
        myScore.innerText=a;
        result.classList.remove("lostbg");
        result.classList.add("winbg");
    }
})

let paper=document.querySelector("#paper");
paper.addEventListener("click",(e)=>{
     userChoice="paper";
     console.log(userChoice);
     let comp=randomNum(3);
     console.log(comp);

     if(comp===1){
        result.innerText="DRAW";
    
    }
    else if(comp===2){
        result.innerText="YOU LOST";
        b++;
        compScore.innerText=b;
        result.classList.add("lostbg");
        result.classList.remove("winbg");
    }
    else if(comp===0){
        result.innerText="YOU WIN!!"
        a++;
        myScore.innerText=a;
        result.classList.add("winbg");
        result.classList.remove("lostbg");
    }
})
let scissor=document.querySelector("#scissor");
scissor.addEventListener("click",(e)=>{
     userChoice="scissor";
     let comp=randomNum(3);
     console.log(userChoice);
     console.log(comp);

     if(comp===2){
        result.innerText="DRAW";
    
    }
    else if(comp===0){
        result.innerText="YOU LOST";
        b++;
        compScore.innerText=b;
        result.classList.add("lostbg");
        result.classList.remove("winbg");
    }
    else if(comp===1){
        result.innerText="YOU WIN!!";
        a++;
        myScore.innerText=a;
        result.classList.remove("lostbg");
        result.classList.add("winbg");
    }
})



