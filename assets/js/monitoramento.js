window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("rolagem", window.scrollY > 50);
});

var radio = document.querySelector(".manual-btn");
var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 50000);

function proximaImg() {
  cont++;

  if (cont > 3) {
    cont = 1;
  }

  document.getElementById("radio" + cont).checked = true;
}
