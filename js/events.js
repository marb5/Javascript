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

var testEvent = document.getElementById("testEvent");

testEvent.onmouseover = changeColor;
testEvent.onmouseout = changeColor2;
testEvent.onclick = writeClicked;
