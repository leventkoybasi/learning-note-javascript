let userId = 37;

//mod alma:
console.log(userId % 2); //1 tek sayi oldugunu anlariz

userId++;
console.log(userId % 2); // 0 cift sayi

const boxSize = 8;
let items = 29;

console.log("Son Kolide Kac Uerun Var:", items % boxSize);
console.log("Koliye Kac Adet Urun Eklenmeli:", boxSize - (items % boxSize));
//us alma:
console.log(3 ** 4); //81
//asagi yuvarlama;
console.log("Asagi Yuvarlama:", Math.floor(3.9)); //3
//yukari yuvarlama:
console.log("Yukari Yuvarlama:", Math.ceil(3.9)); //3
//yakina yuvarlama:
console.log("Yakina Yuvarlama:", Math.round(3.6)); //4
console.log("Yakina Yuvarlama:", Math.round(3.4)); //3
console.log("Yakina Yuvarlama:", Math.round(3.5)); //4
