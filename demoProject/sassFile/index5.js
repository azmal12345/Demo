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