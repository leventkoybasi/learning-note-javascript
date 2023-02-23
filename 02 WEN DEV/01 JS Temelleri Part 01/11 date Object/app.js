let value;

const now = new Date(); // suanki zamani almamizi saglar

const date1 = new Date("4-9-1985 07:05:06");
const date2 = new Date("April 9 1985");
const date3 = new Date("09/04/1985");

value = date1;

value = date1.getMonth(); // Ocak sifirdan basladigi icin nisan ayini 4. ay yerine 3. ay olarak gosterir.
value = date1.getFullYear();
value = date1.getDay();
value = date1.getDate();
value = date1.getDay(); //bu bilgi pazar sifirdan baslayarak haftanin hangi gun oldugunu verir pazar 0 pazartesi 1 sali 2 casamba 3 persembe 4 cuma 5 cumartesi 6 gibi

date1.setMonth(6);
date1.setDate(1);
date1.setFullYear(1990);

console.log(value);
