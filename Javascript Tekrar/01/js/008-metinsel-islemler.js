let firstName = "Levent";
let lastName = "KOYBASI";
let training = `${firstName} ${lastName}`; //template literal
console.log(firstName + " " + lastName); // Levent KOYBASI
console.log(training); // Levent KOYBASI

//string length
console.log("firstName.length", firstName.length); //6

console.log((firstName + " " + lastName).length); //14

// console.log('Levent'in Bilgisayari mactir.'); burda hata aliriz tek tirnaklar cakisir. yaa disardakini cift tirnak yada icerdeki tirnagin onune kesme isarreti koymamiz lazim. Asagidaki ornmek gibi
console.log("Levent'in Bilgisayari mactir.");

console.log("firstName[0] :", firstName[0]); //L
console.log("firstName.charAt(0) :", firstName.charAt(0)); //L
//189 6:38
