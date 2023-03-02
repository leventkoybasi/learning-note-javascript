// Number

// Number Veri Turunu Tanimla
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
let discount = total - Math.round((total / 100) * 5);

console.log(
  "Fiyat: ",
  price,
  "KDV Orani: ",
  tax,
  "KDV Tutari: ",
  priceTax,
  "Fiyat:  ",
  total,
  "Indirim: ",
  discount
);
