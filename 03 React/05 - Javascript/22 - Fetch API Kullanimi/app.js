//22 - Fetch API Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://jsonplaceholder.typicode.com/

const JSONPlaceHolderApi = "https://jsonplaceholder.typicode.com/todos";

/*
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    console.log(response); // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/', redirected: false, status: 200, ok: true, …}

    return response.json();
  })
  .then((json) => console.log(json));
*/
const app = document.querySelector("#app");
const createdUlElement = document.createElement("ul");
app.append(createdUlElement);

fetch(JSONPlaceHolderApi)
  .then((res) => res.json())
  .then((json) => {
    json.forEach((item) => {
      const liElement = document.createElement("li");
      liElement.innerHTML = item.title;
      createdUlElement.append(liElement);
    });
  });

fetch("app.json")
  .then((res) => res.json())
  .then((res) => console.log(res)); //{user: 'username', info: 1234234, arr: Array(1), isActive: true}
