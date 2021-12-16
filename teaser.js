const topLi = document.querySelectorAll(".topLi");
const centerLi = document.querySelectorAll(".centerLi");
const topBtn = document.getElementById("topBtn");

topLi[1].addEventListener("click", () => {
  window.scrollTo({
    top: 620,
    left: 0,
    behavior: "smooth",
  });
});
topLi[2].addEventListener("click", () => {
  window.scrollTo({
    top: 1200,
    left: 0,
    behavior: "smooth",
  });
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  let centerBox = document.querySelector(".centerBox");
  let centerPosition = centerBox.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (centerPosition < screenPosition) {
    centerBox.classList.add("create");
  } else {
    centerBox.classList.remove("create");
  }
});

function activeLi() {
  centerLi.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

centerLi.forEach((item) => {
  item.addEventListener("click", activeLi);
});
