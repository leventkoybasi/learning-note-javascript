const users = ["Ayla", "Ahmet", "Mehmet", "Burcin", "Hilal"];

const serverInfo = {
  ip: "127.0.0.1",
  port: "80",
  user: "admin",
  password: "12345",
};

users.forEach((item) => {
  console.log(item);
});

users.forEach((item, index) => {
  console.log(item, index);
});

// Object.keys(serverInfo).forEach((key) => {
//   console.log(key);
//   console.log(serverInfo[key]);
// });

Object.keys(serverInfo).forEach((key) => {
  console.log(key);
  console.log(serverInfo[key]);
});
console.log("----------------------------"); //ayirac

Object.entries(serverInfo).forEach(([key, value], index) => {
  console.log(key);
  console.log(value);
  console.log(index);
});
