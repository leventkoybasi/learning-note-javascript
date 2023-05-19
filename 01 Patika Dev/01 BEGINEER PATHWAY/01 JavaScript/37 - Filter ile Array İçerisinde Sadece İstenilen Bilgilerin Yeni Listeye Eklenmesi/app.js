// 37 - Filter ile Array İçerisinde Sadece İstenilen Bilgilerin Yeni Listeye Eklenmesi

// 5 Harfden Fazla Olanlar

const PRODUCT = [
    "Mic",
    "Cable",
    "Speaker",
    "Desktop PC",
    "Server",
    "Mouse",
    "Keyboard",
];

const NEW_PRODUCT = PRODUCT.filter((item) => item.length > 5);
console.log(NEW_PRODUCT); // (4) ['Speaker', 'Desktop PC', 'Server', 'Keyboard']

// aktif kullanicilar ??
const USERS = [
    { fullName: "Ayse Sumer", isActive: false },
    { fullName: "Ahmet Urgan", isActive: true },
    { fullName: "Asya Basar", isActive: true },
    { fullName: "Aksel Durmaz", isActive: false },
];

const ACTIVE_USERS = USERS.filter((user) => user.isActive === true);
console.log(ACTIVE_USERS); /* (2) {fullName: 'Ahmet Urgan', isActive: true}
                                  {fullName: 'Asya Basar', isActive: true} */
//veya

const ACTIVE_USERS2 = USERS.filter((user2) => user2.isActive); // true default oldugu icin buy sekil alinabilir. Fakat false bakacaksak mutlaka yukaridaki yapiyi kullanmamiz gerekir.
console.log(ACTIVE_USERS); /* (2) {fullName: 'Ahmet Urgan', isActive: true}
                                  {fullName: 'Asya Basar', isActive: true} */
