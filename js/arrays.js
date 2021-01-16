var languages = [
  "C++",
  "Python",
  "Javascript"
];

//languages[languages.length] = "C#";
languages.push("C#");

alert(languages[languages.length-1]);


//ASSOCIATIVE ARRAYS

var person = [];

person["firstname"] = "Jan";
person["surname"] = "Kowalski";

alert(person.firstname);


var x = document.getElementsByTagName("li");

alert(x[1].innerHTML);


var idLang = document.getElementById("languages");
var i = 0;

while (i < languages.length) {
  idLang.innerHTML += languages[i] + "<br>";

  i++;
}
