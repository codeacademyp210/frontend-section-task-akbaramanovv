
let mydiv = document.getElementsByClassName('divContent');
console.log(mydiv.length)
// let button1 = document.getElementById('btn1');
// let button2 = document.getElementById('btn2');
// let button3 = document.getElementById('btn3');
// let button4 = document.getElementById('btn4');

let myButtons = document.querySelectorAll('#btn')

for(let i=0;i<mydiv.length; i++){
    myButtons[i].addEventListener('click', function(){
        
        mydiv[i].classList.add('opacity1');

        for(let j=0; j<mydiv.length;j++){
            if(i!=j){
            mydiv[j].classList.remove('opacity1');
        }
}
    })
}
const accHeader = document.querySelectorAll('#accordionHeader');
const accIcon = document.querySelectorAll('#accIcon')
let x = document.querySelectorAll('.akordionContent');


for( let i=0;i<accHeader.length; i++){
    accHeader[i].addEventListener('click', function(){
    let height = x[i].scrollHeight;
    console.log(height)
        // accHeader[i].nextElementSibling.classList.remove('akordionContent')
        accHeader[i].nextElementSibling.style.height = height+ "px"
        accIcon[i].classList.remove('fa-plus');
        accIcon[i].classList.add('fa-minus');

    for(let j=0; j<accHeader.length; j++){
        if(i!=j){
            accHeader[j].nextElementSibling.style.height = "0"+ "px"
            accIcon[j].classList.remove('fa-minus');
            accIcon[j].classList.add('fa-plus');
    
        }
    }
    
})
}