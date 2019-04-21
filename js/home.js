"use strict";
// let nav = document.querySelector("#navbar");
// let topHead = document.querySelector("#topheader");


// window.onscroll = function () { navFuncton() }
// function navFuncton() {
//     if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
//         nav.style.position = "fixed";
//         nav.style.top = "0px"
//         return;
//     }
//     else {
//         nav.style.position = "relative";
//         nav.style.top = "0px"
//         return;
//     }
// }


let MySlider = document.querySelector('.slider-container');
let MySliderImg = document.querySelectorAll('.slider-img');
console.log(MySliderImg)

let prvBtn = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let counter = 1;
let size = MySliderImg[0].clientWidth;
let animation1 = document.getElementsByClassName('image1')[0];
let animation2 = document.getElementsByClassName('image2')[0];
let Hanm = document.getElementsByClassName('myH1')[0];
let Hanm1 = document.getElementsByClassName('myH2')[0];
let a1 =  document.getElementsByClassName('read')[0];
let p3 = document.getElementsByClassName('dicital')[0];
let p4 = document.getElementsByClassName('agency')[0];
let p5 = document.getElementsByClassName('cretive')[0];
let p6 =  document.getElementsByClassName('modern')[0];
console.log(p6)
MySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextButton.addEventListener("click", function(){
    animation1.classList.toggle('fadeInRightBig');
    animation2.classList.toggle('fadeInRight');
    Hanm.classList.toggle('fadeInLeftBig');
    Hanm1.classList.toggle('fadeInLeft');
    a1.classList.toggle('rotateInDownLeft');
    p3.classList.toggle('bounceInDown');
    p4.classList.toggle('bounceInUp');
    p5.classList.toggle('fadeInLeftBig');
    p6.classList.toggle('fadeInLeftBig');

    if(counter>=MySliderImg.length-1)
     return;
   
    MySlider.style.transition = "transform 0.2s ease-in-out";
    counter++;
  console.log("salam")
    MySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  
})

prvBtn.addEventListener("click", function(){
    animation1.classList.toggle('fadeInRightBig');
    animation2.classList.toggle('fadeInRight');
    Hanm.classList.toggle('fadeInLeftBig');
    Hanm1.classList.toggle('fadeInLeft');
    a1.classList.toggle('fadeInLeftBig');
    p5.classList.toggle('fadeInLeftBig');
    p3.classList.toggle('bounceInDown');
    p4.classList.toggle('bounceInUp');
    p6.classList.toggle('bounceInUp');
    if(counter<=0)
     return;
    MySlider.style.transition = "transform 0.2s ease-in-out";
    counter--;
    MySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
   
  
})

MySlider.addEventListener("transitionend", function(){
  
   
    if(MySliderImg[counter].id==="lastImg"){
        MySlider.style.transition = "none";
        counter = MySliderImg.length - 2;
        MySlider.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if(MySliderImg[counter].id==="firstImg"){
        MySlider.style.transition = "none";
        counter = MySliderImg.length - counter;
        MySlider.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("myBtn").style.display = "block";
  
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
 
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 
}
const itemOne = document.getElementById('item1');
const itemTwo = document.getElementById('item2');

const right = document.getElementById('rightButoon');
const left = document.getElementById('leftButoon');

right.addEventListener("click",function(){
  // itemOne.classList.remove('floatRight2');
  itemOne.classList.remove('leftNone');
  itemTwo.classList.remove('floatRight2');
  itemOne.classList.add('floatRight');
  itemTwo.classList.add('leftNone');
  left.classList.remove('fa-check-circle','fas')
  right.classList.remove('fa-circle','fas')
  left.classList.add('fa-circle','far')
  right.classList.add('fa-check-circle','fas')
 
 
})

left.addEventListener("click",function(){
  
  // itemOne.classList.add('leftNone');
  left.classList.remove('fa-circle','far')
  left.classList.add('fa-check-circle','fas')
  right.classList.remove('fa-check-circle','fas')
  
  right.classList.add('fa-circle','far')

  itemOne.classList.remove('floatRight');
  itemOne.classList.add('leftNone');
 
  itemTwo.classList.remove('leftNone');

itemTwo.classList.add('floatRight2');
 
})
const menuIcon = document.querySelector('#menuBar-icon');
const menuIconItems = document.getElementsByClassName('menuIcon-items')[0];

let height2 = menuIconItems.scrollHeight;
console.log(menuIconItems)
menuIcon.addEventListener('click', function(){
  menuIconItems.classList.toggle('active-style');
 
})