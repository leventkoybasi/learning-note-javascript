//degisken isimlerinin is, has ile baslatilmasi avantaj saglar

let isUserActive = false; // 0

//kulanici adi ve sifresi soruldu ve dogrulandi :)

isUserActive = true; // 1

console.log(isUserActive);

let user;
console.log(user); //undefined
console.log(Boolean(user)); //false
console.log(Boolean("")); //false
console.log(Boolean("admin")); //true
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(0.1)); //true //sifirdan buyuk degerler true, sifirdan kucuk degerler false
console.log(1 > 3); //false

user = "Lorem Ipsum";
console.log(Boolean(user)); //true
