//22 - Fetch API Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://jsonplaceholder.typicode.com/
/** 
fetch()
  .then((response) => response.json())
  .then((response) => console.log(response)); //Yapi BU Sekilde //
*/
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
// _____________________________________________________

const JSONPlaceHolderApi2 = "https://jsonplaceholder.typicode.com/todos";
const app2 = document.querySelector("#app2");
const createdUlElement2 = document.createElement("ul");
app.append(createdUlElement2);

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

/*
  
  // map fonksiyonunu listItems degiskenine niye bagladik? Bglamadan ustteki forEach gibi yapamaz miydik?

  Evet, doğru, map() yöntemini kullanarak listItems adlı bir değişkene bağladık. Bunun nedeni, map() yönteminin, her bir döngülebilir öğe üzerinde işlem yaparak yeni bir dizi döndürmesidir. Bu durumda, her bir item için bir <li> elementi oluşturuyoruz ve bu <li> elementlerini listItems dizisine ekliyoruz.

Bu şekilde, map() yöntemi, her bir item için bir <li> elementi oluştururken aynı zamanda bu elementleri listItems dizisine toplar. Böylece, listItems dizisi, map() yöntemiyle oluşturulan <li> elementlerinin bir koleksiyonunu içerir.

Daha sonra, createdUlElement.append(...listItems) ile listItems dizisindeki tüm <li> elementleri, createdUlElement (yani <ul>) elementine eklenir.

Alternatif olarak, forEach() yerine map() yöntemini kullanmamızın nedeni, map() yönteminin her bir öğe için yeni bir dizi döndürebilmesi ve bu diziye erişebilmemizdir. forEach() yöntemi ise geri dönüş değeri olarak undefined döndürür ve döngülenen öğeler üzerinde işlem yapar.

Eğer map() yerine forEach() kullanmak isterseniz, döngülenen öğeleri doğrudan <ul> elementine ekleyebilirsiniz. Örneğin:

      fetch(JSONPlaceHolderApi)
        .then((res) => res.json())
        .then((json) => {
          json.forEach((item) => {
            const liElement = document.createElement("li");
            liElement.innerHTML = item.title;
            createdUlElement.append(liElement);
          });
        });
  


Bu durumda, her bir item için bir <li> elementi oluşturulur ve bu elementler doğrudan createdUlElement (yani <ul>) elementine eklenir. forEach() yöntemi, döngülenen öğeler üzerinde işlem yapmanızı sağlar ve geri dönüş değeri olarak undefined döndürür.
  */

const JSONPlaceHolderApi3 = "https://jsonplaceholder.typicode.com/todos";
const app3 = document.querySelector("#app3");
const createdUlElement3 = document.createElement("ul");
app3.append(createdUlElement3);

async function getTasks(URL) {
  const response = await fetch(URL);
  const jsonData = await response.json();
  // console.log(jsonData);
  jsonData.forEach((item) => {
    const liElement3 = document.createElement("li");
    liElement3.innerHTML = item.completed;
    createdUlElement3.append(liElement3);
  });
}

getTasks(JSONPlaceHolderApi);
