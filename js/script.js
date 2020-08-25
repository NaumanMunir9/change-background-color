const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");

const colors = [
  "#03071e",
  "#370617",
  "#6a040f",
  "#9d0208",
  "#d00000",
  "#dc2f02",
  "#e85d04",
  "#f48c06",
  "#faa307",
  "#ffba08",
];

// function Change Color
function changeColor() {
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}

// Event Listener
colorBtn.addEventListener("click", changeColor);
