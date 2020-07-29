function OpenMenu() {
  show();
}

function CloseMenu() {
  hide();
}

function show() {
  document.getElementById("bars-menu").style.display = "block";
  document.getElementById("btn-close-menu").style.display = "block";
  document.getElementById("body").style.display = "none";
  document.getElementById("header").style.display = "none";
}

function hide() {
  document.getElementById("bars-menu").style.display = "none";
  document.getElementById("btn-close-menu").style.display = "none";
  document.getElementById("body").style.display = "flex";
  document.getElementById("header").style.display = "flex";
}
