// for(nereden baslanacak, kosul ne? , arttirma islemi) {

// }

for (let count = 0; count <= 9; count++) {
  console.log(count);
}

for (let count = 10; count <= 100; count = count + 10) {
  console.log(count);
}

const users = ["Ayla", "Ahmet", "Mehmet", "Burcin", "Hilal"];

// for (let userCount = 0; userCount < users.length; userCount++) {
//   console.log(users[userCount]);
// }

for (let userCount = 0; userCount < users.length; userCount++) {
  if (userCount === 2) {
    continue; //userCount[2] yani mehmeti es gecer.
  }
  if (users[userCount] === "Hilal") {
    break; //userCount[3] yani Burcin e gelince dongu durur ve ekrana burcin yazilmaz
  }
  console.log(users[userCount]);
}
