const name = "Levent KOYBASI";
const department = "Bilisim";
const salary = 4000;

// const a =
//   "ISIM :" +
//   name +
//   "\n" +
//   "Department :" +
//   department +
//   "\n" +
//   "Maas :" +
//   salary +
//   "\n";

// Template Literal ile yukaridakini daha kolay yazabiliriz

//  \n bir alt satira yazdirir ! Stringlerde kullanilir

// const a = `ISIM : ${name} \nDepartment : ${department} \nMaas : ${salary}`;

// const html =
//   "<ul>" +
//   "<li>" +
//   name +
//   "</li>" +
//   "<li>" +
//   department +
//   "</li>" +
//   "<li>" +
//   salary +
//   "</li>" +
//   "</ul>";

function a() {
  return "Meraba";
}

const html = `
                <ul>
                    <li>${name}</li>
                    <li>${department}</li>
                    <li>${salary}</li>
                    <li>${10 / 4}</li>
                    <li>${a()}</li>
                </ul>
             `;
document.body.innerHTML = html;
