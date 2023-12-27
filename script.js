document.querySelector(".one").addEventListener("click",()=>{
    let answer1 = document.querySelector(".answer1");
    answer1.hidden = !answer1.hidden;
    let changeImage = document.getElementById("icon1");
    changeImage.src = answer1.hidden ? "icon-plus.svg": "icon-minus.svg";
})
document.querySelector(".two").addEventListener("click",()=>{
    let answer2 = document.querySelector(".answer2");
    answer2.hidden = !answer2.hidden;
    let changeImage = document.getElementById("icon2");
    changeImage.src = answer2.hidden ? "icon-plus.svg": "icon-minus.svg";
})
document.querySelector(".three").addEventListener("click",()=>{
    let answer3 = document.querySelector(".answer3");
    answer3.hidden = !answer3.hidden;
    let changeImage = document.getElementById("icon3");
    changeImage.src = answer3.hidden ? "icon-plus.svg": "icon-minus.svg";
})
document.querySelector(".four").addEventListener("click",()=>{
    let answer4 = document.querySelector(".answer4");
    answer4.hidden = !answer4.hidden;
    let changeImage = document.getElementById("icon4");
    changeImage.src = answer4.hidden ? "icon-plus.svg": "icon-minus.svg";
})