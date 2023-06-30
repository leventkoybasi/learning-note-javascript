//if kosul operatorleri

/*
eger (kosul) {
  yapilacak islem
}
degilse {

}
*/
const firstName = "Levent";
const userAge = 18;

if (userAge >= 18) {
  console.log(`Merhaba ${firstName} Yasiniz tutuyor, Ehliye Alabilirsiniz...`);
} else {
  console.log(
    `Merhaba ${firstName}  Yasiniz Kucuk Oldugu Icin Ehliyet Alamazsiniz...`
  );
  // window.location.replace("http://stackoverflow.com"); //yeni sayfa olarka baska bi yere git
}

const userId = prompt("TC No Giriniz: ");
const userAge2 = prompt("Yasinizi GIriniz");

//TC lenght 11 hane olmasi gerekiyor.

if (userId.length === 11 && userAge2 >= 18) {
  const appElement = document.querySelector("#app");
  const h3Element = document.createElement("h3");
  // h3Element.textContent = "Siteye Girebilirsiniz...";
  h3Element.innerHTML = `<em>Siteye Girebilirsiniz...</em>`;

  // .textContent ile sadece text alabiliriz fakat .innerHTML ile html yapisini komple alabiliriz.
  appElement.appendChild(h3Element);
  h3Element.style.marginLeft = "3%";

  console.log("Siteye Girebilirsiniz");
} else if (userId.length === 11 && userAge2 < 18) {
  console.log(
    "Kullanici Adiniz 18 Yasindan Kucuk Oldugu Icin Siteye Giremezsiniz"
  );
} else if (userAge2 >= 18 && userId.length !== 11) {
  console.log("TC Kimlik Numaraniz Hatali, Siteye Erisemiyorsunuz...");
} else if (userAge2 < 18 && userId.length !== 11) {
  console.log("Hem TC kimlik numaraniz hatali , hemde yasiniz uygun degil");
}

// ! not tersini al operatoru
//  userAge = 18
// !userAge < 18 //true doner cunku degil opt var

//innerHTML Denemesi Goruldugu gibi css dahil tum yapiyi ekleyebiliyoruz...

/*
const a = document.querySelector("#app");
const b = document.createElement("div");
b.innerHTML = `<div class="container">
<div class="row" style="display: flex; gap: 10px">
  <div
    class="col-sm-4 bg-success"
    style="
      background-color: blue;
      text-align: center;
      width: 150px;
      height: 150px;
    "
  >
    BOX 1
  </div>
  <div
    class="col-sm-4 bg-danger"
    style="
      background-color: rgb(123, 255, 0);
      text-align: center;
      width: 150px;
      height: 150px;
    "
  >
    BOX 2
  </div>
  <div
    class="col-sm-4 bg-aqua"
    style="
      background-color: rgb(255, 0, 119);
      text-align: center;
      width: 150px;
      height: 150px;
    "
  >
    BOX 3
  </div>
</div>
</div>`;
a.appendChild(b);

*/
