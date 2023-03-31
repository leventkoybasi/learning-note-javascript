// 34 - break ve continue Kullanımı

// https://www.w3schools.com/js/js_break.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break

const LOREM_LIST = [
    "Lorem",
    "ipsum",
    "dolor",
    "amet",
    "consectetur",
    "adipisicing",
    "elit",
];

//BREAK

let counter = 0;

for (; counter < 10; counter++) {
    if (counter === 5) {
        break; // Break durdurur. 5e kadar dongu doner ama 5den sonra donmez.
    }
    console.log(counter); // 0 1 2 3 4
}

let counter2 = 0;
for (; counter2 < 10; counter2++) {
    console.log(counter2); // 0 1 2 3 4 5 // Burda dongu 5e kadar gelir ve sonrasinda break durdurur.
    if (counter2 === 5) {
        break;
    }
}

//CONTINUE

let counter3 = 0;
for (; counter3 < 10; counter3++) {
    if (counter3 === 5) {
        continue;
    }
    console.log(counter3); // continue sayesinde 5e kadar doner ama besi atlar
}

const UL_DOM = document.querySelector("#userList");

let index = 0;
for (; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == "dolor") {
        break; // *Lorem *Ipsum // Dolor'a kadar yazdirdi
    }
    let liDOM = document.createElement("li");
    liDOM.classList.add("text-light");
    liDOM.innerHTML = LOREM_LIST[index];
    UL_DOM.appendChild(liDOM);
}
let index2 = 0;
for (; index2 < LOREM_LIST.length; index2++) {
    if (LOREM_LIST[index2] == "dolor") {
        continue; // *Lorem *Ipsum *amet *consectetur *adipisicing *elit //Dolor'u atladi ve digerleini yazdirdi
    }
    let liDOM = document.createElement("li");
    liDOM.classList.add("text-light");
    liDOM.innerHTML = LOREM_LIST[index2];
    UL_DOM.appendChild(liDOM);
}
