// Veri Tpi DOnusumleri
let value;

//veri tiplerini  string'e cevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function () {
  console.log();
});
value = String([1, 2, 3, 4]);
value = (10).toString();
value = (3.14).toString();

//Veri Tiplerini Sayilara Cevirme

value = Number("123");
value = Number(null);
value = Number(undefined);
value = Number("Hello Word");
value = Number(function () {
  console.log();
});
value = Number([1, 2, 3, 4]);
value = parseFloat("123");
value = parseInt("3.14");

// const a = "Hello" + 34;
// console.log(a);
// console.log(typeof a);

// const a = "34" + 53;
const a = Number("34") + 53;
console.log(a);
console.log(typeof a);

// Veri Tiplerini

console.log(value);
console.log(typeof value);
