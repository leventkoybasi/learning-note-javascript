//  42 - Object ve Array Destructuring Kullanımı
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Object Destructuring:

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org",
};

// Obje icindeki bilgilerin tek seferde cikartilmasi

// let userName = settings.userName;
// console.log(userName);

//rename && destructuring
let { userName: user, password, isActive, ip: serverIP, serverName } = settings;
console.log(user, password, isActive, serverIP, serverName); //loremIpsum BadPassword false 127.0.0.1 kodluyoruz.org
console.log(settings); //{userName: 'loremIpsum', password: 'BadPassword', isActive: false, ip: '127.0.0.1', serverName: 'kodluyoruz.org'}
console.log(user); //loremIpsum
console.log(password); //BadPassword

// obje icerisindeki bazi bilgilerin cikarilmasi

// Objenin destructuring ile kopyalanmasi
