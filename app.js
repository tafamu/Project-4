const bdy=document.querySelector(".bg");
const up=document.querySelector(".up");
const down=document.querySelector(".down");
const left=document.querySelector(".left");
const right=document.querySelector(".right");





up.addEventListener("click",kaydir_up);
down.addEventListener("click",kaydir_down);
left.addEventListener("click",kaydir_left);
right.addEventListener("click",kaydir_right);

var temp_dikey=1;
var temp_yatay=1;
const k=200;

function kaydir_up(){
    temp_dikey+=k;
    bdy.style.top=`${temp_dikey}px`;
}
function kaydir_down(){
    temp_dikey-=k;
    bdy.style.top=`${temp_dikey}px`;
}
function kaydir_left(){
    temp_yatay+=k;
    bdy.style.left=`${temp_yatay}px`;
}
function kaydir_right(){
    temp_yatay-=k;
    bdy.style.left =`${temp_yatay}px`;
}