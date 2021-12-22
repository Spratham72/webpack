import("./index.css");
const click=require('./calc')

var h=document.createElement("h1");
h.innerText="Calculator";

document.getElementById("parent").appendChild(h);
var div1=document.createElement('div');
var div2=document.createElement('div');
div2.classList.add("val");
var input=document.createElement('input');
input.classList.add("input");
div1.append(div2,input);
var button=document.createElement("button");
button.innerText=1;
button.onclick= function a(){
    click(1);
}
var button2=document.createElement("button");
button2.innerText=2;
button2.onclick= function a(){
    click(2);
}
var button3=document.createElement("button");
button3.innerText=3;
button3.onclick=function a(){
    click(3);
}
var four=document.createElement("button");
four.innerText=4;
four.onclick=function a(){
    click(4);
}
var five=document.createElement("button");
five.innerText=5;
five.onclick=function a(){
    click(5);
}
var six=document.createElement("button");
six.innerText=6;
six.onclick=function a(){
    click(6);
}
var seven=document.createElement("button");
seven.innerText=7;
seven.onclick=function a(){
    click(7);
}
var eight=document.createElement("button");
eight.innerText=8;
eight.onclick=function a(){
    click(8);
}
var nine=document.createElement("button");
nine.innerText=9;
nine.onclick=function a(){
    click(9);
}
var zero=document.createElement("button");
zero.innerText=0;
zero.onclick=function a(){
    click(0);
}
var divide=document.createElement("button");
divide.innerText="/";
divide.onclick=function a(){
    click("/");
}
var mult=document.createElement("button");
mult.innerText="x";
mult.onclick=function a(){
    click("x");
}
var plus=document.createElement("button");
plus.innerText="+";
plus.onclick=function a(){
    click("+");
}
var minus=document.createElement("button");
minus.innerText="-";
minus.onclick=function a(){
    click("-");
}
var equals=document.createElement("button");
equals.innerText="=";
equals.onclick=function a(){
    click("=");
}
var del=document.createElement("button");
del.innerText="C";
del.onclick=function a(){
    click("c");
}
var div=document.createElement("div");
div.classList.add("number");
div.append(button,button2,button3,four,five,six,seven,eight,nine,divide,zero,mult,minus,plus,equals,del)
document.getElementById("parent").append(div1,input,div);
