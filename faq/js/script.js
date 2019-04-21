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



let accardion =document.querySelectorAll(".accardion-click")

for(let i=0;i<accardion.length;i++){

    accardion[i].addEventListener("click",function(){
        let plus =document.querySelectorAll(".fa-plus-circle");
        let minus =document.querySelectorAll(".fa-minus-circle")
        let height =accardion[i].nextElementSibling.scrollHeight;
        plus[i].style.opacity ="0";
        minus[i].style.opacity="1"
        accardion[i].nextElementSibling.style.height=height+"px";
        accardion[i].nextElementSibling.style.transition =".5s"
        accardion[i].style.backgroundColor ="rgb(230, 230, 230)"
        
        for(let j=0;j<accardion.length;j++){
            if(i!=j){
                accardion[j].nextElementSibling.style.height ="0px";
                accardion[j].style.backgroundColor ="white";
                plus[j].style.opacity ="1";
                minus[j].style.opacity="0"
                
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