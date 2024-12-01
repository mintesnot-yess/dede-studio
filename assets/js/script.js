let NavMenu = document.querySelector(".menu");
let barMenuBTN = document.querySelector(".bar");

barMenuBTN.addEventListener("click", () => {
  if (NavMenu.style.display === "flex") {
    barMenuBTN.classList.remove("fa-times");
    barMenuBTN.classList.add("fa-bars");
    NavMenu.style.transform = "translateY(-100%)";
    NavMenu.style.opacity = "0";


    setTimeout(() => {
      NavMenu.style.display = "none";
    }, 300);
  } else {
    NavMenu.style.display = "flex";
    NavMenu.style.transform = "translateY(0%)";

    barMenuBTN.classList.remove("fa-bars");
    barMenuBTN.classList.add("fa-times");
    NavMenu.style.opacity = "1";
  }
});







document.getElementById("contact-btn").addEventListener('click', function () {
  document.getElementById("contact").style.backdropFilter = "brightness(1.5)";

  setInterval(function () {
    document.getElementById("contact").style.backdropFilter = "brightness(1)";

  }, 2000);

})





var currentSlide = 0;
var slides = document.querySelectorAll('.gallery');
var totalSlides = slides.length;

console.log(totalSlides);

var prevSlid = document.querySelector('#returnBtn');
var nextSlid = document.querySelector('#btnPlus');

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function nextSlide() {

  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);

  prevSlid.style.opacity = '1';


}
setInterval(nextSlide, 4000)

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}



function play_vid(id) {
  let vidId = document.getElementById(id);
  if (vidId.paused) {
    vidId.play();
    newClss.innerHTML = 'sample file'

  } else {
    vidId.pause();
  }
}


