// Destructuring
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//Array
const SystemInfo = [
  "127.0.0.1",
  "8000",
  "development",
  "admin",
  "123456",
  "nginx",
  "linux",
];

console.log(SystemInfo[0]); //127.0.0.1
/*
const ip = SystemInfo[0];
const port = SystemInfo[1];
const dev = SystemInfo[2];
const username = SystemInfo[3];
const password = SystemInfo[4];
const password = SystemInfo[4];
*/

//systemInfo Array Mi? Object Mi?
const [ip, port, dev, username, password, ...restInfo] = SystemInfo;
console.log(ip, port, dev, username, password, restInfo); //127.0.0.1 8000 development admin 123456 (2) ['nginx', 'linux']

// ip, port, dev, username, password ' u systemInfo ile esitle ve kalan bilgileri restInfo adiyla baska bir arrayde tut!

//Object
const user = {
  firstName: "Lorem",
  lastName: "Ipsum Dolor",
  age: 29,
  habbies: ["dans", "kosu", "bisiklet"],
  info: ["developer", "freelancer", "javascript"],
};

//user Array Mi? Object Mi?
//const { firstName, lastName, age: userAge, ...rest } = user;
//age renamed key
//console.log(firstName, lastName, userAge, rest); //Lorem Ipsum Dolor 29 {habbies: Array(3), info: Array(3)}

//Destructuring yaparken array ise [], object ise {} kullaniriz.

console.table(user);

const helloV1 = (obj) => {
  console.log(obj.firstName, obj.lastName, obj.age);
};

helloV1(user); //Lorem Ipsum Dolor 29

const helloV2 = ({ firstName, lastName, age }) => {
  console.log(firstName, lastName, age);
};

helloV2(user); //Lorem Ipsum Dolor 29

const helloV3 = (obj) => {
  const { firstName, lastName, age } = obj;
  console.log(firstName, lastName, age);
};

helloV3(user); //Lorem Ipsum Dolor 29
