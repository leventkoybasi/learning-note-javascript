// 02 Keyboard Eventleri - KeyUp KeyPress KeyDown

//Klavye Eventleri

//Keypres (Klavyede harf ve sayilar eventi tetikler )
// document.addEventListener("keypress", run);

// function run(e) {
//   console.log(e.which); //ASCII kodlari ile hangi rakam ve harfe basildigini gosterir ASCII kodlarinin tablosundan gorebiliriz buyuk kucuk harf duyarli ASCII tablosu 0'dan 250 dahil karakterleri numara olarka gosterir.
//   console.log("Naber");
//   console.log(e.key); // hangi tusa bastiysak onu direk gorebiliriz. Harf ve sayilar keypress eventini tetikler space vs tetiklemez.
//}

//Keydown (bu eventte ok tuslari tab tusu vs dahil tum karakterleri icerir)
// document.addEventListener("keydown", run);

// function run(e) {
//   console.log(e.which);
//   console.log("Naber");
//   console.log(e.key);
// }

//Keyup (Tusa bastigimizde degil elimizi cektigimizde event tetiklenir tum karakterler dahildir.)

// document.addEventListener("keyup", run);

// function run(e) {
//   console.log(e.which);
//   console.log("Naber");
//   console.log(e.key);
// }

const header = document.querySelector(".card-header");

const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e) {
  header.textContent = e.target.value;
  // console.log(e.target.value);
}
