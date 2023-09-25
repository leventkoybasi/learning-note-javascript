import React, { useState } from "react";

function InputExample3() {
  const [form, setForm] = useState({ email: "", password: "" });
  const onchangeInput2 = (event) => {
    console.log(event);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={onchangeInput2}
            name="email"
            value={form.email}
            type="email"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={onchangeInput2}
            name="password"
            value={form.password}
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <h3>
          {form.email} {form.password}
        </h3>
      </form>
    </>
  );
}

export default InputExample3;
