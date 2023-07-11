// JSON Stringify ve Parse Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

const info = `
{
  "user": "username",
  "info": 1234234,
  "arr": [{ "i": 1, "k": 2 }],
  "isActive": true
}
`;

// parse edilecek string ifadeyi alıyoruz. Json string olarak doner.

console.log(info); /* 
{
  "user": "username",
  "info": 1234234,
  "arr": [{ "i": 1, "k": 2 }],
  "isActive": true
} */
console.log(typeof info); //string

const parsedInfo = JSON.parse(info);
console.log(parsedInfo); //{user: 'username', info: 1234234, arr: Array(1), isActive: true}
console.log(typeof parsedInfo); //object

const stringifyInfo = JSON.stringify(info);
console.log(stringifyInfo);
console.log(typeof stringifyInfo);
