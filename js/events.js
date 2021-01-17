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
function newEvent(event, str) {
  var e;
  e = event || window.event; //for older browsers ( 0 || 1 , 1 || 1 )
  var srcElement = e.target ? e.target : e.srcElement;
  /*
  if (event === undefined)
    e = window.event;
  else
    e = event;
  */

  var tmp = document.getElementById("tmp");
  //tmp.innerHTML = e.ctrlKey; //e.button, e.keyCode
  tmp.innerHTML = e.clientX + ' ' + srcElement.tagName;

  var toolTip = document.getElementById("tooltip");
  toolTip.style.display = "block";

  toolTip.style.left = e.clientX + 15 + "px";
  toolTip.style.top = e.clientY + 15 + "px";
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

  var moveEvent = document.getElementById("moveEvent");

  moveEvent.onmousemove = function (event) {
    newEvent(event, this.tagName);
  };
};
