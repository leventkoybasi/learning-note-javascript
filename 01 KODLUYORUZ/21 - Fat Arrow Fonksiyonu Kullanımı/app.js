// 21 - Fat Arrow Fonksiyonu Kullanımı

// const degiskenIsmi = (parametre) => {RETURN}

function hello(firstName) {
	console.log(`Merhaba ${firstName}`);
}

hello("JavaScript");

const helloFUnkV1 = (firstName) => {
	console.log(`Merhaba ${firstName}`);
};
helloFUnkV1("helloFUnkV1");

const helloFUnkV2 = (firstName) => console.log(`Merhaba ${firstName}`); // Eger tek bir paramatre var ise parametreyi parantez icinde yazmak sorunda degiliz ve eger tek bir cikti var ise ciktiyi suslu parantez ile yazmak zorunda degiliz
helloFUnkV2("helloFUnkV2");

const helloFUnkV3 = (firstName, lastName) =>
	console.log(`Merhaba ${firstName}, ${lastName}`);
helloFUnkV3("firstName", "lastName");

const helloFUnkV4 = (firstName, lastName) => {
	let info = `Merhaba ${firstName}, ${lastName}`;
	console.log(info);
	return info;
};

helloFUnkV4("firstName2", "lastName2");
