let NavMenu = document.querySelector(".menu");
let barMenuBTN = document.querySelector(".bar");

// if nav menu is dispaly flex do display none else display flex
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




function play_vid(id) {
  let vidId = document.getElementById(id);

  if (vidId.play) {
    vidId.play()

  } else {
    vidId.pause()

  }

}