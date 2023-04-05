// 38 - Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];

// userName icinde orjinal isim kalsin,
// shortName icinde ilk harf buyuk . (A.)
// newName icinde ilk harf buyuk olsun

// {userName : "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS.map((user) => user.toLowerCase());
console.log(NEW_USERS);

// const USERS_OBJ = USERS.map((item) => {
//     return {
//         userName: item,
//         shortName: `${item[0]}.`,
//         newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
//     };
// });

const USERS_OBJ = USERS.map((item) => ({
    userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
}));

console.log(USERS_OBJ);
/* (4) [{…}, {…}, {…}, {…}]
0: {userName: 'AYSE', shortName: 'A.', newName: 'Ayse'}
1: {userName: 'MehMet', shortName: 'M.', newName: 'Mehmet'}
2: {userName: 'TugCE', shortName: 'T.', newName: 'Tugce'}
3: {userName: 'AkSEL', shortName: 'A.', newName: 'Aksel'}
length:4 */
