/*
    nodeName	nazwa węzła (najczęściej nazwa tagu)
    nodeValue	wartosć węzła
    parentNode	rodzic węzła
    childNodes	tablica dzieci danego obiektu
    firstChild	pierwsze dziecko (węzeł)
    lastChild	ostatnie dziecko (węzeł)
    previousSibling	zwraca poprzedni węzeł na tym samym poziomie (jego krewniaka)
    nextSibling         zwraca następny węzeł na tym samym poziomie (jego krewniaka)
    attributes          tablica atrybutów elementu
                        attributes[indeks].nodeValue zwraca wartość atrybutu
                        lepiej stosować funkcję getAttribute("nazwa")
    textContent zawartość tekstowa JEST WSPIERANY OD IE 9 >
    innerHTML   zawartość HTML

    setAttribute("nazwaAtrybutu", "wartosc atrybutu");
    removeAttribute("nazwaAtrybutudousuniecia");
                       
 */

/*
    getElementById()
    getElementsByTagName()

    słabiej wspierane:
    getElementsByClassName() - brak wsparcia w ie6,7,8
    getElementsByName() - brak wsparcia w ie6,7,8,9
   
    brak wsparcia w ie 6 i 7 i połowiczne w ie8:
    querySelector() - wybranie pierwszego napotkanego elementu spełniającego warunek
    querySelectorAll() - wybieranie wszystkich elementów spełniających warunek

 */

var x = document.getElementById("list");
var tmp = x.childNodes[1].parentNode.getAttribute("id");

alert(tmp);

x.setAttribute("class", "myColor");
//x.removeAttribute("class");

var y = document.querySelector("#list li:nth-child(3)");

alert(y.innerHTML);

var z = document.querySelectorAll("#list li");

for (var i = 0; i < z.length; i++) {
  if (i === 0)
    continue;
  else if (i === 1)
    z[i].style.color = "blue";
  else
    continue;
}

/*
    dodawanie i usuwanie elementów znajdujących się na stronie

    createElement("nazwa_tagu");

    appendChild

    removeChild

    tmp.parentNode.removeChild(tmp);
   
 */

var addEle = document.createElement("p");

addEle.style.color = "blue";
addEle.className = "test_class";
addEle.innerHTML = "<p id='test1'>Tekst<p>";

var body = document.querySelector("body");

var newChildNode = body.appendChild(addEle);

var test1 = document.getElementById("test1");

test1.style.color = "red";

var test = document.getElementById("test");

test.parentNode.removeChild(test);
