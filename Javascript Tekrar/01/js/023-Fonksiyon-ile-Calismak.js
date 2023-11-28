function hello() {
  console.log("Merhaba Dunya");
}
hello();

function greetings(name) {
  console.log(`Merhaba ${name ? name : ""}`);
}
greetings();
greetings("Deniz");

function greetingsV2(firstname, lastname) {
  console.log(
    `Merhaba ${firstname ? firstname : ""} ${lastname ? lastname : ""}`
  );
}
greetingsV2();
greetingsV2("Levent", "KOYBASI");

function greetingsV3(firstname = "", lastname = "", age = 30) {
  console.log(`Merhaba ${firstname} ${lastname} => ${age}`);
}
greetingsV3();
greetingsV3("Levent", "KOYBASI");
