const colors = ["#4D9DE0", "#E15554", "#E1BC29", "#3BB273", "#7768AE"];

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * colors.length);
  const body = document.body;
  body.style.backgroundColor = colors[random];
});
