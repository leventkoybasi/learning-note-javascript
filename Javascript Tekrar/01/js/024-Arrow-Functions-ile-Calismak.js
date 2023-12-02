// () => {}
// () => ...

function helloFunction(name) {
  console.log(name);
}

const helloArrowFunction = (name) => {
  console.log(name);
};

const helloArrowFunctionV2 = (name) => console.log(name);

const helloArrowFunctionV3 = (name) => console.log(name);

const helloArrowFunctionV4 = (firstname, lastname) =>
  console.log(firstname, lastname);

const helloArrowFunctionV5 = (firstname, lastname) => {
  // const fullname = `${firstname.toUpperCase()} ${lastname.toUpperCase()}`;
  const fullname = `${firstname.toUpperCase()} ${lastname.toUpperCase()}`;

  console.log(fullname);
};
helloArrowFunctionV5("levent", "koybasi");
