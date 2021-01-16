var a = document.getElementById("test");

a.innerHTML = "text";


var person = {
  firstname: "Marcin",
  surname: "Bieleń",
  toString: function () {
    return this.firstname + " " + this.surname;
  }
};

var autor = document.getElementById("autor");

autor.innerHTML = "Autor: " +  person;
