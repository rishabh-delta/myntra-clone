let home=document.querySelectorAll(".homeImg");
let cards=document.querySelectorAll(".cardDimensions");
let men=document.querySelector("#men");
let women=document.querySelector("#women");
let kids=document.querySelector("#kids");
let handl=document.querySelector("#handl");
let beauty=document.querySelector("#beauty");
let studio=document.querySelector("#studio");
let input = document.querySelector("input");
for(let i=0;i<home.length;i++){
    home[i].addEventListener("click",()=>{
        alert("you have clicked on home Image");
    })
    
}
for(let i=0;i<cards.length;i++){
    cards[i].addEventListener("click",()=>{
        alert(`you have clicked on card${i+1}`);
    })
}
men.addEventListener("click",()=>{
    alert("you are redirected to men's section");
});
women.addEventListener("click",()=>{
    alert("you are redirected to woman's section");
});
kids.addEventListener("click",()=>{
    alert("you are redirected to kids section");
});
handl.addEventListener("click",()=>{
    alert("you are redirected to home and living section");
});
beauty.addEventListener("click",()=>{
    alert("you are redirected to beauty section");
});
studio.addEventListener("click",()=>{
    alert("you are redirected to studio section");
});
console.dir(input);