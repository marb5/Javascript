function writeText(text) {
  alert(text + "!");
}
function writeClicked() {
  alert("Clicked!");
}

var testEvent = document.getElementById("testEvent");

testEvent.onclick = writeClicked;
