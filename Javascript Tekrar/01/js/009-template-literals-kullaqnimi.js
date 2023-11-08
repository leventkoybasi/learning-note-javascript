let firstName = "Levent";
let lastName = "KOYBASI";
let traingin = `Template Literals JS`;
let age = 20;

// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

let fullName2 = `Merhaba ${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLowerCase()} ${lastName[0].toLocaleUpperCase()}${lastName
  .slice(1)
  .toLowerCase()} gelecek sene yasin ${age + 1}'dir.`;
console.log(fullName2);
