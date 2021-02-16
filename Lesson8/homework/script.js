function checkFigure() {
  let figure = document.getElementById("figure");
  let select = document.getElementById("selectvalue");
  let value = select.value;
  figure.style.background = "white";
  figure.className = "color_figure";
  figure.classList.add(value);
}

function reset() {
  let select = document.getElementById("selectvalue");
  select.value = "first";
  let figure = document.getElementById("figure");
  figure.style.background = "white";
  figure.className = " ";
}
