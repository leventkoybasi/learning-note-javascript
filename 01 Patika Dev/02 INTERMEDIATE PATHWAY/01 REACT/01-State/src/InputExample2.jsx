import { useState } from "react";

function InputExample2() {
  const [form, setForm] = useState({ name: "", surname: "" });
  const onchangeInput = (event) => {
    console.log(event.target.name);
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div>
        <label htmlFor="text" className="form-label">
          <strong>AD</strong>
        </label>
        <input
          onChange={onchangeInput}
          value={form.name}
          name="name"
          type="text"
          id="text3"
          className="form-control"
        />
        <br />
        <label htmlFor="text" className="form-label">
          <strong>SOYAD</strong>
        </label>
        <input
          onChange={onchangeInput}
          value={form.surname}
          name="surname"
          type="text"
          id="text4"
          className="form-control"
        />
        <br />
        {`${form.name} ${form.surname}`}
      </div>
    </div>
  );
}

export default InputExample2;
