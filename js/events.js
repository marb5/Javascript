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

//moving image on mouse down
function movingImage(e, obj) {
  obj.style.left = e.clientX - obj.width / 2 + "px";
  obj.style.top = e.clientY - obj.height / 2 + "px";
}

//stoper using setTimeout
function stopWatch(stoperHandle, time) {
  stoperHandle.innerHTML = time--;

  if (time < 0)
    return;

  timeOutStoper = setTimeout(function () { //after 1 sec execute function
    stopWatch(stoperHandle, time);
  }, 1000);
  return timeOutStoper;
}
//stoper using setInterval
function stopWatchInterval(stoperHandle, time) {
  var timeIntervalRef = setInterval(function () {
    if (--time < 0) {
      clearInterval(timeIntervalRef);
      return;
    }

    stoperHandle.innerHTML = time;
  }, 1000);

  return timeIntervalRef;
}

//stoper as object
function Stoper(stoperHandle) {
  this.stoperHandle = stoperHandle;
  this.startValue;
  this.timeOutRef = undefined;
  this.run = function (startValue) {
    this.startValue = startValue;
    if (this.timeOutRef)
      this.stop();
    this.start();
  };
  this.start = function () {
    if (this.startValue < 0)
      return;

    this.stoperHandle.innerHTML = this.startValue--;

    var self = this;

    this.timeOutRef = setTimeout(function () {
      self.start();
    }, 1000);
  };
  this.stop = function () {
    clearTimeout(this.timeOutRef);
  };
  this.continue = function () {
    this.start();
  };
}

//variable used to check if stoper is already running
var timeOutStoper;

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

  //show to top button while scrolling
  var toTopButton = document.getElementById("toTopButton");

  window.onscroll = function () {
    var test = document.getElementById("testSpan");
    var toTopButton = document.getElementById("toTopButton");

    var yScrollAxis = window.pageYOffset;

    if (yScrollAxis > 300)
      toTopButton.style.display = "block";
    else
      toTopButton.style.display = "none";

    test.innerHTML = yScrollAxis;
  };
  //move on top of website when clicked
  toTopButton.onclick = function () {
    window.scrollBy(0, -1 * window.pageYOffset); //move to 0 x and up by y value
  };

  var compass = document.getElementById("compass");

  compass.onmousedown = function () {
    var self = this;
    document.onmousemove = function (e) {
      movingImage(e, self);
    };
  };

  compass.onmouseup = function () {
    document.onmousemove = null;
  };

  compass.ondragstart = function (e) {
    e.preventDefault();
  };

  var startStoper = document.getElementById("startStoper");
  var stopStoper = document.getElementById("stopStoper");
  var continueStoper = document.getElementById("continueStoper");
  var stoperHandle = document.getElementById("stoperHandle");

  var stoper = new Stoper(stoperHandle);

  startStoper.onclick = function () {
    var startValue = document.getElementById("startValue").value;
    stoper.run(startValue);
  };
  stopStoper.onclick = function () {
    stoper.stop();
  };
  continueStoper.onclick = function () {
    stoper.continue();
  };

  /*
  //check if interval stoper is running
  var timeIntervalRef;

  startStoper.onclick = function () {
    var startValue = document.getElementById("startValue").value;
    stoperHandle.innerHTML = startValue;

    //clear old stoper when we want to change time period
    if (timeIntervalRef)
      clearTimeout(timeIntervalRef);

    timeIntervalRef = stopWatchInterval(stoperHandle, startValue);
  };

  stopStoper.onclick = function () {
    clearInterval(timeIntervalRef);
  };
  */
  /*
  startStoper.onclick = function () {
    var startValue = document.getElementById("startValue").value;

    //clear old stoper when we want to change time period
    if (timeOutStoper)
      clearTimeout(timeOutStoper);

    stoperHandle.innerHTML = startValue;
    stopWatch(stoperHandle, startValue);
  };

  stopStoper.onclick = function () {
    clearTimeout(timeOutStoper);
  }
  */

  //gallery
  var mainImage = document.getElementById("mainImage"); //our main image
  var image = new Image(); //image we want to add to main image
  image.style.width = "350px";
  image.style.height = "233px";

  mainImage.appendChild(image); //adding image to main image

  var thumbnails = document.getElementsByClassName("thumbnail"); //our mini images

  var currentThumbnail = thumbnails[0]; //get first thumbnail
  image.src = currentThumbnail.getAttribute("src"); //it is picture we want to enlarge

  //checking which image is preferred to show
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].onmouseover = function () {
      currentThumbnail.className = currentThumbnail.className.replace("current", ""); //previous picture is not wanted to show
      currentThumbnail = this;
      currentThumbnail.className += " current"; //this is current chosen picture

      image.src = this.getAttribute("src"); //show this image
      image.style.width = "350px";
      image.style.height = "233px";
    };
  }
};
