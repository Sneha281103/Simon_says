let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let colorBtns=["yellow","green","purple","pink"];

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

   let random=Math.floor(Math.random()*3);
   let randomColor=colorBtns[random];
   let Btn=document.querySelector(`.${randomColor}`);
   flash(Btn);


   gameSeq.push(randomColor);
   console.log(gameSeq);

}
function btnPressUser(){
    flash(this);

    let userpress=this.getAttribute("id");
    userSeq.push(userpress);
    checkSeq(userSeq.length-1);
}

function checkSeq(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            levelUp();
        }
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },1000);
        h3.innerText="game over!";

        setTimeout(()=>{
            h3.innerText="Press any key to start";
        },1000);

        reset();
    }
}

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}

let btns=document.querySelectorAll(".div");
for(btns of btns){
    btns.addEventListener("click",btnPressUser)
}

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250);
}


let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp() 
    }
})