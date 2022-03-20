var a1=document.getElementById("box1");
var a2=document.getElementById("box2");
var a3=document.getElementById("box3");

var number = 1;
function changeImg(){
    if(number%3==1)
        a1.style.zIndex=number;
    if(number%3==2)
            a2.style.zIndex=number;
    if(number%3==0)
            a3.style.zIndex=number;
    number ++;
}
setInterval(changeImg,3000);
