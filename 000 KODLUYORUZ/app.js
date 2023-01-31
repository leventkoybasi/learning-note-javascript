let email = "leventkoybasi@hotmail.com";
let firstName = "Levent";
let lastName = "KOYBASI";

let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(DOMAIN.indexOf("."));
console.log(DOMAIN.slice(0, 7));
console.log(DOMAIN.slice(0, DOMAIN.indexOf(".")));
console.log(
  email
    .slice(email.search("@") + 1)
    .slice(0, email.slice(email.search("@") + 1).indexOf("."))
);

// console.log(email.replace("hotmail.com", "gmail.com"));

email = email.replace("hotmail.com", "gmail.com");
console.log(email);

console.log(email.includes("@"));
console.log(email.includes("#"));
