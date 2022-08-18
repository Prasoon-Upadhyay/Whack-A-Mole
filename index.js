
const temp = document.querySelector(".score").outerText;
let score = Number(temp[temp.length - 1]);
let time = Number(document.querySelector(".time").outerText);
let random = Math.floor((Math.random()* 9) + 1);
let randomHole;

function clickHandle(evt)
{
    let check = evt.target.classList[0] == randomHole.classList[0]  ;
    if( check == true)
    {
        score += 1;
        document.querySelector(".score").innerHTML = "<h1>Score : " + score + "</h1>";  
        randomHole.classList.remove("mole-img");
    }
}
setInterval(timer,1000);

function timer()
{
    if(time == 0)
    {
        document.querySelector(".score").innerHTML = "<h1>Game Finished</h1>";
        clearInterval();
        document.querySelector(".retry").innerHTML = "<button> Retry <i></i></button>";
        document.querySelector(".retry button").classList.add("retry-btn");
        document.querySelector(".retry-btn").addEventListener("click",function()
        {
            window.location.reload();
        });
        document.querySelector("button i").classList.add("fa");
        document.querySelector("button i").classList.add("fa-rotate-right");
        document.querySelector(".time-wrapper .score").innerHTML = "<h1>Your Score : " + score + "</h1>";
        document.querySelector(".time-wrapper h1").classList.add("score");
    }
    else if(time > 0)
    {    
        time = time - 1;
        document.querySelector(".time").innerHTML = time;

    }
}



function remove()
{
    if(randomHole.classList[2] == "mole-img")
    {
        randomHole.classList.remove("mole-img");
    }
}

setInterval(add,1000);

function add()
{
    if(time > 0)
    {
        moleAlloter(Math.floor((Math.random()* 9) + 1));
        console.log(randomHole.classList[2]);
        setTimeout(remove,800);
    }
    else{
        clearInterval();
    }

}

function moleAlloter(randomNum)
{
    
    randomHole = document.querySelector(".hole-" + randomNum );
    randomHole.classList.add("mole-img");
}

let holeListen = document.querySelectorAll(".hole");

for(let i = 0;  i < holeListen.length; i++)
{
    holeListen[i].addEventListener("click",clickHandle);
}
