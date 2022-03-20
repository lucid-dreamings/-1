var search=document.getElementById("search");
var test=document.getElementById("test");
function render(data){
    console.log(data.g);
    if(data.g){
        let html = ""
        for(let i in data.g){
            html += `<li>${data.g[i].q}</li>`
        }
        test.innerHTML = html;
    }
    else{
        test.innerHTML="";
    }
}
search.addEventListener("input",function(){
    let url= `https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=${search.value}&callback=render`;
    let script=document.createElement("script");
    script.setAttribute("src",url);
    test.parentNode.appendChild(script);
    script.style.zIndex=1;
    script.onload=function(){
        script.remove();
    }
})