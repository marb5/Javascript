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
//function which shows how work propagation
function propEvent(event, obj) {
  var e = event || window.event;
  var srcElement = e.target || e.srcElement;

  var tmp = document.getElementById("tmp2");

  tmp.innerHTML = "źródło eventu: " + srcElement.tagName + "<br>event przypisany do tagu: " + obj.tagName;
}

//code is executed after site is loaded, async in script source link in html is not necessary
window.onload = function () {
  //events on texts
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

  //propagation
  var testEvent2 = document.getElementById("testEvent2");
  var bolded1 = document.getElementById("bolded1");
  var button1 = document.getElementById("button1");

  testEvent2.onclick = function (event) {
    alert("testEvent2");
    propEvent(event, this);
  };
  bolded1.onclick = function (event) {
    alert("bolded");
  };
  button1.onclick = function (event) {
    var e = event || window.event;
    if (e.stopPropagation)
      e.stopPropagation();
    else
      e.cancelBubble = true;

    alert("button");
    event.stopPropagation();
  };

  var email = document.getElementById("email");
  var submitFormButton = document.querySelector("#newsletter input[type='submit']");

  submitFormButton.onclick = function (e) {
    var e = e || window.event;
    //it prevent default action event in browsers
    if (e.preventDefault)
      e.preventDefault();
    else
      e.returnValue = false;
    var tmp = document.getElementById("tmp3");

    tmp.innerHTML = email.value;

    if (email.value === 'jankowalski@zxcvb.com')
      this.parentNode.submit();
  };

  //prevents showing context menu while right mouse click on submit
  submitFormButton.oncontextmenu = function (e) {
    var e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    else
      e.returnValue = false;
  };
};
