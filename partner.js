let partnerBox = document.querySelector(".partners-box");
let logo = document.querySelectorAll(".partners-logo");



let count = 1;
let  partner = logo[0].clientWidth;

partnerBox.style.transform = "translateX(" + (-partner * count)+ "px)";

const partnerSlider =()=>{
    if(count >= logo.length - 1) return;

   partnerBox.style.transition="transform 1s ease-in-out";
    count++;
   partnerBox.style.transform= "translateX(" + (-partner * count)+ "px)";
    container.style.justifyContent="end";
    // console.log(logo[count])
}

const transitionEnd = ()=>{
    if(logo[count].id === 'lastPartner'){
        partnerBox.style.transition = "none";
        count = logo.length-count;
        partnerBox.style.transform= "translateX(" + (-size * count)+ "px)";
        // console.log(count)
    }

}
partnerBox.addEventListener("transitionend", transitionEnd);
setInterval(partnerSlider, 2500);

// console.log(partner)

