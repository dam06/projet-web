
function initSelection () {
var para = document.createElement("div");
var B = document.createTextNode("P");
var input = document.createElement("input");
var C = document.createTextNode("div");
var input2 = document.createElement("input");
var A = document.createTextNode("H2");
var input3 = document.createElement("input");

para.appendChild(A);
para.appendChild(input);
para.appendChild(B);
para.appendChild(input2);
para.appendChild(C);
para.appendChild(input3);


var element = document.body;
var child = document.getElementById("titre");
element.insertBefore(para,child);

var listen = document.body.addEventListener("click", selection);

}

function selection (event) {

  if (event.target.classList.contains('selected')) {
      event.target.classList.remove('selected');
  }
  else {
      event.target.classList.add('selected');
  }
}
function selection2(event) {

 if (event.target.classList.contains('selected')) {
   event.target.classList.remove("selected")
   event.target.classList.add("selected2")

  }
  // la fonction selection2 ne fonctionne pas

}



