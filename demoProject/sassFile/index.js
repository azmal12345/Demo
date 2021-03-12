const filght = document.getElementById("flights");
const bed = document.getElementById("bed");
const car = document.getElementById("car");
// container display 
const next_form = document.getElementById("next_form");
const next_form1 = document.getElementById("next_form1");
const next_form2 = document.getElementById("next_form2");

// icon click function click 
filght.addEventListener("click", () => {
    next_form.style.display = "block";
    next_form1.style.display = "none";
    next_form2.style.display = "none";
})

bed.addEventListener("click", () => {
    next_form.style.display = "none";
    next_form1.style.display = "block";
    next_form2.style.display = "none";
})

car.addEventListener("click", () => {
    next_form2.style.display = "block";
    next_form1.style.display = "none";
    next_form.style.display = "none";
})

// end 
const textSlide = document.getElementById("textSlide");
textSlide.addEventListener("click", () => {
    const text = document.getElementById("textShow");
    text.innerHTML = "Travel is the movement of people between distant locations. Motives for travel includes pleasure, relaxation and discovery. We are here to provide discounted travel leisure. We are connect you with different airlines with varying fares.We have a proud team of professionals who are work 24*7 for your convienience. We have a partnerships with travel providers from all acrosss the globe. Our motive is to provide affordable fares to our customers.";
})

// end 
const times = document.getElementById("times");
const linkeClick = document.getElementById("call_link");

times.addEventListener("click", () => {
    linkeClick.style.display = "none";
    times.style.display = "none";
})

const bars = document.getElementById("bars");
const toggleButton = document.getElementById("toggleButton");

bars.addEventListener("click", () => {
    toggleButton.classList.toggle("slider");
})

// pop 
const pop = document.getElementById("popTimes");
const popText = document.getElementById("pop");

pop.addEventListener("click", () => {
    popText.style.display = "none";
})

// window.addEventListener("DOMContentLoaded", () => {
//     let song = new Audio("https://www.soundjay.com/transportation/airplane-fly-by-01a.mp3");
//     song.play();
// })



const displayBodyWithIcon = document.querySelector(".displayBodyWithIcon");
const welCome = document.querySelector(".welCome");
let svg = document.getElementById("svg");

setInterval(() => {
    svg.style.display = "none";
    welCome.style.display = "none";
    displayBodyWithIcon.style.display = "block";
}, 6000);



 let song = new Audio("../image/fly.mp3.mp3");
   window.addEventListener("DOMContentLoaded", () => {
       song.play();
   })
