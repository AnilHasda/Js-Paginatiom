let main=document.querySelector(".main");
let buttons=document.querySelector(".buttons");
let data=[];
let count=0;
for(let i=1;i<=100;i++){
data=[...data,i];
}
/*data.map(ele=>{
let element=document.createElement("div");
element.setAttribute("class","child");
element.innerHTML=ele;
main.appendChild(element)
})*/
function createButtons(){
let prev=document.createElement("button");
prev.innerHTML="prev";
buttons.appendChild(prev);
prev.onclick=()=>{count>1 ? filter(count-2):"";}
for(let i=1;i<=Math.ceil(data.length/10);i++){
let button=document.createElement("button");
button.setAttribute("class","button");
button.innerHTML=i;
buttons.appendChild(button);
}

let next=document.createElement("button");
next.innerHTML="next";
buttons.appendChild(next);
next.onclick=()=>{count<10 ? filter(count):"";}
}
createButtons()
function filter(value){
count=value ? value : 0;
count++;
main.innerHTML="";
data.slice(count*10-10,count*10).map(ele=>{
let element=document.createElement("div");
element.setAttribute("class","child");
element.innerHTML=ele;
main.appendChild(element);
})
}
filter()
let button=document.querySelectorAll(".button")
button.forEach((ele,index)=>{
ele.addEventListener("click",()=>{filter(index)})
})