//07 - Template Literals Kullanımı

let username = "levent";
let DOMAIN = "kodluyoruz.org";

let email = username + "@" + DOMAIN;
console.log("Merhaba", username, "Sitemize Hosgeldin. Email adresin ", email);

let info = `Merhaba ${username} Sitemize Hosgeldin. Email Adresin ${email}`; //Template Literals "``"

console.log(info);
