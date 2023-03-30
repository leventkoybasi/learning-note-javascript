// 31 - Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek

let items = [10, 20, 30, 40];
console.log("items - ilk hali : ", items);

// Array ; sona oge/eleman ekleme - push
items.push(50);
console.log("50 : ", items);

// Array ; basa oge/eleman ekleme - unshift
items.unshift(5);
console.log("5 : ", items);

// Array ; sondaki oge/eleman cikartmak - pop
let lastItem = items.pop(); //son elemani lastItem icerisine ekledik ve cikardik // sadece items.pop() ile de son ogeyi cikarta biliyoruz fakat bir degiskene baglamak ileride isimize yarayabilir bu sekil kullan
console.log("lastItem : ", lastItem, "items : ", items);

// Array ; bastaki oge/eleman cikartmak - shift
let firstItem = items.shift();
console.log("firstItem : ", firstItem, "items : ", items);

//Array icerisindeki bir ogenin bilgisinin degistirilmesi:
// ilk oge/eleman degistirme
items[0] = 5;
console.log(items);

// son oge/eleman degistirme
items[items.length - 1] = 60;
console.log(items);

items[10000] = 500;
console.log(items); //(10001) [5, 20, 30, 60, empty × 9996, 500] // "empty × 9996 BOS OGE ATADI"
