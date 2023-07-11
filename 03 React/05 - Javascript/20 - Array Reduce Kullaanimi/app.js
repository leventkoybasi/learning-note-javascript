//Array Reduce Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// arr.reduce((onceki, simdiki) => {yapilacak islem}, ilkDeger)

const items = [1, 2, 3, 4, 5];
const sum = items.reduce((accumulator, current) => accumulator + current, 0);
const sum2 = items.reduce((accumulator, current) => accumulator + current, 100);

console.log(sum); //15
console.log(sum2); //115

const prices = [100, 200, 10, 40, 500, 90];

const maxPrice = prices.reduce((acc, current) => Math.max(acc, current));
console.log(maxPrice); //500

const itemPrices = [
  { name: "Laptop", price: 100 },
  { name: "Ipad", price: 1022 },
  { name: "Smartphone", price: 120 },
  { name: "Keyboard", price: 110 },
  { name: "Mouse", price: 104 },
];

const sumItemPrices = itemPrices.reduce(
  (acc, current) => acc + current.price,
  0
);

console.log(sumItemPrices); //1456

const users = ["Lorem", "Ipsum", "Derya", "Deniz", "Ipsum", "Deniz", "Lorem"];

const countedUsers = users.reduce((allUsers, current) => {
  const count = allUsers[current] ?? 0;
  return {
    ...allUsers,
    [current]: count + 1,
  };
}, {});

console.log(countedUsers); //{Lorem: 2, Ipsum: 2, Derya: 1, Deniz: 2}
