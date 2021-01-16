
  var a = document.getElementById("test");
  var autor = document.getElementById("autor");

  a.innerHTML = "text";

  /*
  var person = {
    firstname: "Marcin",
    surname: "Bieleń",
    toString: function () {
      return this.firstname + " " + this.surname;
    }
  };
  */

  function person(_firstname, _surname, _age) {
    this.firstname = _firstname;
    this.surname = _surname;
    this.age = _age;
    this.toString = function () {
      return this.firstname + " " + this.surname;
    };
  }

  var personAutor = new person("Marcin", "Bieleń", 25);
  var personAnother = new person("Jan", "Kowalski", 33);

  person.prototype.specifiedValue = 12;
  //personAutor.specifiedValue = 12;

  autor.innerHTML = "Autor: " + personAutor + " s" + personAutor.specifiedValue
    + "<br>" + personAnother + " s" + personAnother.specifiedValue;

