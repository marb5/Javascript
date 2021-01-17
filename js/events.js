//this function enable to eventlisteners work on more browsers
function createEvent(obj, eventName, functionToInvoke) {
  if (document.addEventListener)
    obj.addEventListener(eventName, functionToInvoke);
  else
    obj.attachEvent("on" + eventName, functionToInvoke);
}


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
function increaseFont() {
  var fontSize = parseInt(window.getComputedStyle(this).fontSize);
  this.style.fontSize = (++fontSize) + "px";
}

//code is executed after site is loaded, async in script source link in html is not necessary
window.onload = function () {
  var testEvent = document.getElementById("testEvent");
  var stopEvent = document.getElementById("stopIncreasingFont");
  /*
  testEvent.onmouseover = changeColor;
  testEvent.onmouseout = changeColor2;
  testEvent.onclick = writeClicked;
  */
  /*
  testEvent.addEventListener("mouseover", changeColor);
  testEvent.addEventListener("mouseover", increaseFont);
  testEvent.addEventListener("mouseout", changeColor2);
  */
  createEvent(testEvent, "mouseover", changeColor);
  createEvent(testEvent, "mouseover", increaseFont);
  createEvent(testEvent, "mouseout", changeColor2);

  stopEvent.addEventListener("click", function () {
    testEvent.removeEventListener("mouseover", increaseFont)
  })
};
