function writeText(text) {
  alert(text + "!");
}
function writeClicked() {
  alert("Clicked!");
}
function changeColor() {
  this.className = "myColor";
}
function changeColor2() {
  this.removeAttribute("class");
}

//code is executed after site is loaded, async in script source link in html is not necessary
window.onload = function () {
  var testEvent = document.getElementById("testEvent");

  testEvent.onmouseover = changeColor;
  testEvent.onmouseout = changeColor2;
  testEvent.onclick = writeClicked;
};
