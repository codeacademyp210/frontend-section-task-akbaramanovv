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
let clickDiv = document.getElementsByClassName("click");

for (let i = 0; i < clickDiv.length; i++) {
    clickDiv[i].addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("active");
        let plus = document.getElementsByClassName("plus");
        plus[i].classList.toggle("opacityPlus")
        for (let j = 0; j < clickDiv.length; j++) {

            if (i != j) {
                clickDiv[j].nextElementSibling.classList.remove("active");
                plus[j].classList.remove("opacityPlus")
            }
        }
    });
}