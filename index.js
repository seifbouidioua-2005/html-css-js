// increase the prgress bar
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
// increase the stats section
let stat = document.querySelector(".stats");
let nums = document.querySelectorAll(" .number");
let start = false; //simouh
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 350) {
    console.log("this is the section you want");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= stat.offsetTop - 300) {
    if (!start) {
      nums.forEach((num) => count(num));
    }
    start = true;
  }
};

function count(element) {
  let max = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == max) {
      clearInterval(count);
    }
  }, 2000 / max);
}

//time count for section event 
 

// assuming that event time is the end of the year 2025

let countDate = new Date ("Dec 31, 2025 23:59:59").getTime();

let counter = setInterval (()=>{
  // get date now
   let dateNow = new Date ();

   let dateDiff = countDate - dateNow ;

   // get time unit 
    let days = Math.floor(dateDiff / (1000*60*60*24));
    let hours = Math.floor((dateDiff % (1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((dateDiff % (1000*60*60))/(1000*60));
    let seconds = Math.floor((dateDiff % (1000*60))/(1000));

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours <10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  
    if (dateDiff <0) {
        clearInterval(counter)
    }


},1000)
