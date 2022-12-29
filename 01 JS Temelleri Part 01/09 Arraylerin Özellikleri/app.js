let value;

const numbers = [44, 53, 67, 52, 14, 78, 9];
//  const numbers2 = new Array(43, 56,78,90,43,3); //Bu sekilde  de yeni bir array olusturulabilir fakat bu daha zor o yuzden yukaridaki gibi devam edelim.

const numbers2 = [23, 45, 67, 89, 32, 4];

const langs = ["Pyhton", "Java", "C++", "Javascript"];

const a = ["Merhaba", 22, null, undefined, 3.14];

value = numbers.length; // 7 adet elemanimiz var

value = numbers[0];
value = numbers[3];
value = numbers[numbers.length - 1];

//Herhangi bir indexteki egeri degistirme

numbers[2] = 1000;
value = numbers[2];
value = numbers;

//index of

value = numbers.indexOf(1000); //1000 degeri 2. indexte

//arrayin sonuna deger ekleme

numbers.push(2000); //arrayin sonuna deger ekleme
value = numbers;
numbers.unshift(1190); // arrayin basina deger ekleme
value = numbers;

//arayin sonundan deger atmak

numbers.pop(); //arayin sonundaki degeri siler

//arayin basindan deger atma
numbers.shift();

//belli bir kismini atma

numbers.splice(0, 3); //Arayin icinde bulunan 0. index ile3. endex arasini arrayden atar. 3.index dahil degil 0. index dahil
value = numbers;

//Reverse

numbers.reverse(); // array.deki dizilimi terse cevirir
value = numbers;

value = numbers.sort(); //Arrayin ilk rakamlarina bakarak siralar 1,5,7,9 sayinin buyuklugune bakmaz ilk karakterlere bakar

value = numbers.sort(function (x, y) {
  //kucukten buyge siralama , fonkiyonlar ileride anlatilacak
  return x - y;
});

value = numbers.sort(function (x, y) {
  //buyukten kucuge siralama , fonkiyonlar ileride anlatilacak
  return y - x;
});

console.log(value);
