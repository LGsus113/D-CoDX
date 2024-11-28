const btnLeft = document.querySelector(".prev");
const btnRight = document.querySelector(".next");
const container = document.getElementById("carousel-container");

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRight.addEventListener("click", (e) => moveToRight());

setInterval(() => {
  moveToRight();
}, 2000);

let operacion = 0;
let counter = 0;
let widthImg = 100 / 10;

function moveToRight() {
  if (counter >= 9) {
    operacion = 0;
    counter = 0;
    container.style.transform = `translate(-${operacion}%)`;
    container.style.transition = "none";
    return;
  }

  counter++;
  operacion = operacion + widthImg;
  container.style.transform = `translate(-${operacion}%)`;
  container.style.transition = "all .5s ease";
}

function moveToLeft() {
  counter--;

  if (counter < 0) {
    counter = 9;
    operacion = widthImg * 9;
    container.style.transform = `translate(-${operacion}%)`;
    container.style.transition = "none";
    return;
  }

  operacion = operacion - widthImg;
  container.style.transform = `translate(-${operacion}%)`;
  container.style.transition = "all .5s ease";
}
