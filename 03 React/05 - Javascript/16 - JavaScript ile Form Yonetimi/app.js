// https://www.w3schools.com/html/html_form_input_types.asp
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form

const registerFormElement = document.querySelector("#registerForm");
// registerFormElement.addEventListener("reset", () => {
//   // console.log("Resete Butonuna Basildi");
// });
registerFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("Kaydet Butonuna Basildi");
  // console.log(event);

  // const firstName = document.querySelector("input"); // BU SEKILDE SECMIYORUZ
  // const firstName = document.querySelector("input[name=firstName]");
  // console.log(firstName.value);

  // console.log(event.target.elements);

  //Aray'e Ceviremedigimiz Icin Olmadi
  // event.target.elements.forEach(item => {
  //   console.log(item);
  // })

  //console.log(Array.from(event.target.elements)); //(8) [input#firstNameId.form-control, input#lastNameId.form-control, input#emailId.form-control, input#passwordId.form-control, input#passwordId2.form-control, input#checkboxId.form-check-input, button.btn.btn-danger, button.btn.btn-success]

  const formValues = {};

  Array.from(event.target.elements).forEach((item) => {
    if (item.tagName === "INPUT") {
      // console.log(item);
      // console.log(item.type);
      // console.log(item.tagName);
      // console.log(item.name);
      console.log(item.value);
      if (
        item.type === "text" ||
        item.type === "email" ||
        item.type === "password"
      ) {
        formValues[item.name] = item.value;
      }
      if (item.type === "checkbox") {
        formValues[item.name] = item.checked;
      }
    }
  });
  console.table(formValues);
  registerFormElement.reset();
});
