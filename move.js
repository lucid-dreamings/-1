
// 实现动画的同步进行的操作
let textIpt = document.querySelector("#search");
textIpt.addEventListener("focus", function(){
    textIpt.style.width = 150 + "px";
})
textIpt.addEventListener("blur", function(){
    textIpt.style.width = 100 + "px";
})