//Array Filter Kullanimi

const priceList = [10, 20, 30, 400, 300, 100, 500, 30, 50, 70, 90];

const newPriceList = priceList.filter((price) => {
  return price >= 50;
});
console.log(newPriceList); //(7) [400, 300, 100, 500, 50, 70, 90]

const newPriceList2 = priceList.filter((item) => item >= 50);
console.log(newPriceList2); //(7) [400, 300, 100, 500, 50, 70, 90]

const users = [
  { name: "lorem", isActive: false },
  { name: "ipsum", isActive: false },
  { name: "dolor", isActive: false },
  { name: "Ayla", isActive: true },
  { name: "Aydin", isActive: true },
  { name: "Ahmet", isActive: true },
  { name: "Tuba", isActive: true },
];

const activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers); //active userlari doner ayla aydin ahmet tuba

// complex kullanim:

const newPriceList3 = priceList.filter((item) => {
  if ((item >= 50 && item <= 100) || (item >= 200 && item <= 400)) {
    return true;
  }
  return false;
});

console.log(newPriceList3); //(6) [400, 300, 100, 50, 70, 90]

// const newPriceList4 = proceList.filter(item => () || () ? true : false)
const newPriceList4 = priceList.filter((item) =>
  (item >= 50 && item <= 100) || (item >= 200 && item <= 400) ? true : false
);
console.log(newPriceList4); //(6) [400, 300, 100, 50, 70, 90]
