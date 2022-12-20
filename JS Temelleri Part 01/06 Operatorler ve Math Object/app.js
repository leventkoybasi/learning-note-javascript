let value;

const value1 = 10;
const value2 = 4;

//Aritmetik Operatorler

// value = value1 + value2;
// value = value1 - value2;
// value = value1 * value2;
// value = value1 / value2;
// value = value1 % value2; // Mod Alma / Kalani Gosterme

// Math Objesi

value = Math.PI; // pi sayisi
value = Math.E; // e sayisi

value = Math.round(3.6); // Yakina yuvarlama
value = Math.round(3.5);
value = Math.round(3.4);

value = Math.ceil(3.2); // Uste yuvarlama
value = Math.ceil(3.8);

value = Math.floor(3.8); // Alta yuvarlama
value = Math.floor(3.2);

value = Math.sqrt(16); //Karekok Alma
value = Math.sqrt(32);

value = Math.abs(-10); //Mutlak deger alma

value = Math.pow(8, 3); //Ust Alma //8'in 3. Kuvveti 8^3 (8*8*8)
value = Math.pow(4, 2);

value = Math.max(10, -1, 100, 32); // Virgul icerisindeki en yuksek degerli sayiyi goster
value = Math.min(10, -1, 100, 32); // Virgul icerisindeki en dusuk degerli sayiyi goster

value = Math.random(); //Sifir ile 1 arasinda (sifir dahil) rastgele sayilar uretir
value = Math.random() * 20; //Sifir ile 20 arasinda (sifir dahil) rastgele sayilar uretir
value = Math.random() * 20 + 1; //Bir ile 21 arasinda rastgele sayilar uretir
value = Math.floor(Math.random() * 20 + 1); //Bir ile 20 arasinda (cunku math.floor asagi yuvarlar) rastgele tam sayilar uretir

console.log(value);
