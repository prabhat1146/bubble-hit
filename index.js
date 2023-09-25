let bubble="";
let score=0;
let time=60;
let p=0;

function makeBubble(){
    bubble="";
    for(let i=0;i<152;i++)
    {
        bubble+=`<div class="bubble">${generateRanNo()}</div>`
    }
    
    document.getElementById("bub").innerHTML=bubble;
}

function generateRanNo(){
    return Math.floor(Math.random()*10);
}

function increaseScore(){
    score+=10;
    document.getElementById("score").textContent=score;
}
let inter=setInterval(function(){
    if(time>0)
    {
        time--;
        document.getElementById("timer").textContent=time;
    }else{
        clearInterval(inter);
        document.getElementById("bub").innerHTML='Game Over';
    }
},1000);

let btn=document.getElementById("bub");
btn.addEventListener("click",function(dets){
    let no=Number(dets.target.textContent);
    let setno=document.getElementById("hit").textContent;
    if(setno==no)
    {
        increaseScore();
        makeBubble();
        document.getElementById("hit").textContent=generateRanNo();

    }
});

if(p==0)
{
    makeBubble();
    document.getElementById("hit").textContent=generateRanNo();
    document.getElementById("score").textContent=0;
    p=1;
}



