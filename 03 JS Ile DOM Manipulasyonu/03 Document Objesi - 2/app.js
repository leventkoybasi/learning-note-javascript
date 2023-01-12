// 03 Document Objesi - 2

let value;

value = document;

//Scrip[tler

value = document.scripts;
value = document.scripts.length;
value = document.scripts[0];

//Linkler

value = document.links;
value = document.links[0];
value = document.links[document.links.length - 1]; // son link
value = document.links[document.links.length - 1].getAttribute("class"); //son linkin classi
value = document.links[document.links.length - 1].getAttribute("href"); // son linkin href.i
value = document.links[document.links.length - 1].className; //son linkin class name.i
value = document.links[document.links.length - 1].classList; // son linkin class listi

//FOrmlar

value = document.forms;
value = document.forms.length;
value = document.forms[0]; //indexe gore form secme
value = document.forms["form"]; //name e gore form secme
value = document.forms[0].id;
valus = document.forms[0].getAttribute("id");
value = document.forms[0].name;
value = document.forms[0].method; //default metod get oluyor

console.log(value);
