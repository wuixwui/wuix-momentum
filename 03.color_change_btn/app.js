const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const colorButton = document.querySelector(".btn--color");
function randomDeg() {
  return Math.floor(Math.random() * 360);
}
function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
function randomNumber() {
  return (Math.random() * 100).toFixed(1);
}

function changeColorEvent() {
  const bgProperty = `linear-gradient(${randomDeg()}deg, ${randomColor()}, ${randomColor()} ${randomNumber()}%)`;
  document.body.style.background = bgProperty;
}

colorButton.addEventListener("click", changeColorEvent);
