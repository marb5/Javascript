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

var x = document.getElementById("list");
var tmp = x.childNodes[1].parentNode.getAttribute("id");

alert(tmp);

x.setAttribute("class", "myColor");
//x.removeAttribute("class");
