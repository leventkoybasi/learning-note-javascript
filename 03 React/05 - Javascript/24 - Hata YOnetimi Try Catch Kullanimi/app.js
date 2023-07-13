// 24 - Hata Yonetimi Try Catch Kullanimi

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

try {
  console.log(LOREM);
} catch (err) {
  console.error("ERROR : ", err); //app.js:8 ERROR :  ReferenceError: LOREM is not defined at app.js:6:15
}

async function getTasks(URL) {
  try {
    const response = await fetch(URL);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (err) {
    console.error("ERROR: ", err);
  }
}

//getTasks("../23 - Fetch API Kullanimi/app.json1"); // {user: 'username', info: 1234234, arr: Array(1), isActive: true}
getTasks("../23 - Fetch API Kullanimi/app.json"); // {user: 'username', info: 1234234, arr: Array(1), isActive: true}
