//Destructuring

//aray

const sysInfo = [
  "127.0.0.1",
  "8000",
  "development",
  "admin",
  "123456",
  "nginx",
  "linux",
];

console.log(sysInfo[0]);

// const ip = sysInfo[0];
// const port = sysInfo[1];
// const dev = sysInfo[2];
// const username = sysInfo[3];
// const password = sysInfo[4];

// const [ip, port, dev, username, password] = sysInfo; //destructing

const [ip, port, dev, username, password, ...restInfo] = sysInfo;
console.log(ip, port, dev, username, password);

console.log(restInfo);

//object

const userObj = {
  firstName: "Lorem",
  lastName: "Ipsum Dolor",
  age: 29,
  hobies: ["dans", "kosu", "bisiklet"],
  info: ["developer", "freelancer", "javascript"],
};

const { firstName, lastName, age: userAge, ...rest } = userObj;

console.log(userObj);
console.log(rest);

console.table(userObj);
console.log(userAge);

const hello = (userObj) => {
  console.log(userObj.firstName, userObj.lastName, userObj.age);
};
hello(userObj);

const helloV2 = ({ firstName, lastName, age }) => {
  console.log(firstName, lastName, age);
};
helloV2(userObj);

const helloV3 = (userObj) => {
  const { firstName, lastName, age } = userObj;
  console.log(firstName, lastName, age);
};

helloV2(userObj);
helloV3(userObj);
