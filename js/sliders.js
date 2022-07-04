setTimeout(()=>{
 let slider = document.querySelector(".testifiers");
let container = document.querySelector("#testifier-container");
let cards = document.querySelectorAll(".testifier-card");
let prevBtn = document.getElementById("back");
let nextBtn = document.getElementById("next");

// console.log(slider, cards, prevBtn, nextBtn);

console.log(cards)
let counter = 1;
let size= cards[0].clientWidth;

slider.style.transform = "translateX(" + (-size * counter)+ "px)";

const nextFunction =()=>{
        if(counter>= cards.length - 1) return;
        slider.style.transition="transform 1s ease-in-out";
        counter++;
        slider.style.transform= "translateX(" + (-size * counter)+ "px)";
        container.style.justifyContent="end";
}

const backFunction = ()=>{
    if(counter <= 0) return ;
    slider.style.transition="transform 1s ease-in-out";
    counter--;
    slider.style.transform= "translateX(" + (-size * counter)+ "px)";
    container.style.justifyContent="start";
}

const transition =()=>{
    if(cards[counter].id === 'lastClone'){
        slider.style.transition = "none";
        counter = cards.length-3;
        slider.style.transform= "translateX(" + (-size * counter)+ "px)";
    }

    if(cards[counter].id === 'firstClone'){
        slider.style.transition = "none";
        counter = cards.length - (counter-1);
        slider.style.transform= "translateX(" + (-size * counter)+ "px)";
    }
}
slider.addEventListener("transitionend", transition);
nextBtn.addEventListener("click", nextFunction)
prevBtn.addEventListener("click", backFunction);

}, 1000)