let value;

const firstName = "Levent";
const lastName = "KOYBASI";

const langs = "Java, Python , C++";

value = firstName + lastName;
value = firstName + " " + lastName; //Bosluk Icin Bos Bir String Koyuyoruz

value = "Levent KOYBASI ";

// value = value + " " + "LEVENT";
value += "KOYBASI"; //yukardakinin aynisi

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "CAZ"); //string.i uc uca ekleme

value = firstName.toLowerCase(); //Tum karakterleri kucuk harf yapma
value = firstName.toUpperCase(); //Tum karakterleri buyuk harf yapma

value = firstName[0]; // ilk karakter 0 olarak geciyor. 0. karakteri yazdir.
value = firstName[3]; // 4. karakteri yazdir

value = firstName[firstName.length - 2]; //stringin karakter sayisini bilinmediginde kullanilir

//Index Off Metodu

value = firstName.indexOf("t"); // firstName icerindeki t harfinin kacinci disarda oldgunu soyler
value = firstName.indexOf("T"); // -1 degerini vermesinin sebebi burada buyuk t harfi olmamasidir. Buyuk harf/kucuk harf duyarlidir.
value = firstName.indexOf("n"); // 4

//Char At

value = firstName.charAt(0); // sifirinci indexte olani karakteri listeler
value = firstName.charAt(firstName.length - 1);

//Split Metodu

value = langs.split(","); //Split parcalamak, her bir elemani virgule gore parcalayip bir array.e yerlestir

//Replace

value = langs.replace("Python", "CSS");

//Includes

value = langs.includes("Java"); // langs icerisinde "Java" var mi varsa true doner yoksa false
value = langs.includes("Javascript"); // langs icerinde Javascript olmadigi icin false doner

console.log(value);
