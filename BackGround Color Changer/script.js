let blackColor = document.querySelector(".btn1");
let whiteColor = document.querySelector(".btn2");
let yellowColor = document.querySelector(".btn3");
let blueColor = document.querySelector(".btn4");
let greyColor = document.querySelector(".btn5");
let pinkColor = document.querySelector(".btn6");
let body = document.getElementById("body");

function changeBackgroundColor(color){
    body.style.backgroundColor = color;
}

blackColor.addEventListener("click",()=> changeBackgroundColor("black"));
whiteColor.addEventListener("click",()=> changeBackgroundColor("white"));
yellowColor.addEventListener("click",()=> changeBackgroundColor("yellow"));
greyColor.addEventListener("click",()=> changeBackgroundColor("grey"));
pinkColor.addEventListener("click",()=> changeBackgroundColor("pink"));
blueColor.addEventListener("click",()=> changeBackgroundColor("blue"));