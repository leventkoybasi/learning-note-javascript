//22 - Fetch API Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://jsonplaceholder.typicode.com/

fetch()
  .then((response) => response.json())
  .then((response) => console.log(response)); //Yapi BU Sekilde //

/*
  İlk olarak, fetch() fonksiyonunu çağırıyoruz. Bu, bir ağ isteği yapmamızı ve istenen kaynağın yanıtını almak için kullanmamızı sağlar. İstek yapılandırmasını içeren bir argüman alır (URL gibi) ve bir Promise döndürür.

fetch() fonksiyonu Promise döndürdüğü için, ardından .then() yöntemini kullanıyoruz. Bu yöntem, Promise'in çözüldüğünde çalışacak bir geri çağırma fonksiyonu kabul eder. İlk .then() bloğunda, yanıt nesnesini alırız.

İkinci .then() bloğunda, yanıt nesnesini JSON formatına dönüştürüyoruz. Bu, yanıt verisinin bir JavaScript nesnesine dönüştürülmesini sağlar.

Son olarak, JSON verisini konsola yazdırmak için console.log() fonksiyonunu kullanıyoruz. Bu, yanıtı tarayıcının geliştirici aracındaki konsol panelinde görüntülememizi sağlar.

Bu yapı, bir ağ isteği yapar, istenen kaynağın yanıtını alır, yanıtı JSON formatına dönüştürür ve sonucu konsola yazdırır. Bu, tipik olarak API'lerle çalışırken sıkça kullanılan bir yapıdır.
----------------------------------------------------------------
  */

/*
İlk olarak, fetch() fonksiyonunu çağırıyoruz. Bu, bir ağ isteği yapmamızı ve istenen kaynağın yanıtını almak için kullanmamızı sağlar. İstek yapılandırmasını içeren bir argüman alır (URL gibi) ve bir Promise döndürür.

fetch() fonksiyonu Promise döndürdüğü için, ardından .then() yöntemini kullanıyoruz. Bu yöntem, Promise'in çözüldüğünde çalışacak bir geri çağırma fonksiyonu kabul eder. İlk .then() bloğunda, yanıt nesnesini alırız.

İkinci .then() bloğunda, yanıt nesnesini JSON formatına dönüştürüyoruz. Bu, yanıt verisinin bir JavaScript nesnesine dönüştürülmesini sağlar.

Son olarak, JSON verisini konsola yazdırmak için console.log() fonksiyonunu kullanıyoruz. Bu, yanıtı tarayıcının geliştirici aracındaki konsol panelinde görüntülememizi sağlar.

Bu yapı, bir ağ isteği yapar, istenen kaynağın yanıtını alır, yanıtı JSON formatına dönüştürür ve sonucu konsola yazdırır. Bu, tipik olarak API'lerle çalışırken sıkça kullanılan bir yapıdır.
----------------------------------------------------------------
*/

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

const JSONPlaceHolderApi2 = "https://jsonplaceholder.typicode.com/todos";
const app2 = document.querySelector("#app2");
const createdUlElement2 = document.createElement("ul");
app.append(createdUlElement2);
// _____________________________________________________

fetch(JSONPlaceHolderApi2)
  .then((res) => res.json())
  .then((json) => {
    const listItems2 = json.map((item) => {
      const liElement2 = document.createElement("li");
      liElement2.innerHTML = item.id;
      return liElement2;
    });

    createdUlElement2.append(...listItems2);
  });

/*
  Bu kodda, .then() bloğu içinde json.map() kullanılarak döngü yerine map() yöntemi kullanılır. map() yöntemi, bir diziyi döngüleyerek her bir öğe üzerinde işlem yapmanızı ve yeni bir dizi döndürmenizi sağlar.

json.map() kullanılarak her bir item için bir <li> elementi oluşturulur ve bu elementler listItems adlı bir diziye eklenir.

Sonra, createdUlElement.append(...listItems) ile listItems dizisi, createdUlElement (yani <ul>) elementine eklenir. Bu, dizideki tüm <li> elementlerini <ul> elementine eklemenizi sağlar.

Bu şekilde, veri öğelerini döngü yerine map() yöntemiyle işleyebilir ve sonuçları <ul> elementi içinde görüntüleyebilirsiniz.
  
  */

fetch("app.json")
  .then((res) => res.json())
  .then((res) => console.log(res)); //{user: 'username', info: 1234234, arr: Array(1), isActive: true}
