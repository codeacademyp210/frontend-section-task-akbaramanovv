"use strict";
let nav = document.querySelector("#navbar");
let topHead = document.querySelector("#topheader");


window.onscroll = function () { navFuncton() }
function navFuncton() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        nav.style.position = "fixed";
        nav.style.top = "0px"
        return;
    }
    else {
        nav.style.position = "relative";
        nav.style.top = "0px"
        return;
    }
}

let buttons = document.querySelectorAll(".buttonClick");
let buttoncontent = document.querySelectorAll(".button-content");


for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        buttons[i].style.backgroundColor="#fd602c";
        buttons[i].style.color = "white"
        buttons[i].style.outline = "none"
        buttoncontent[i].style.opacity= "1"
        buttoncontent[i].style.zIndex ="999"
        for(let j =0;j<buttons.length;j++){
            if(i!=j){
                buttoncontent[j].style.opacity= "0"
                buttons[j].style.backgroundColor="white";
                buttons[j].style.color = "black"
                buttoncontent[j].style.zIndex ="0"
            }
        }





    })


}
const menuIcon = document.querySelector('#menuBar-icon');
const menuIconItems = document.getElementsByClassName('menuIcon-items')[0];

let height2 = menuIconItems.scrollHeight;
console.log(menuIconItems)
menuIcon.addEventListener('click', function(){
  menuIconItems.classList.toggle('active-style');
 
})