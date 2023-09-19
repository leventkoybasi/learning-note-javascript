import React, { useState } from "react";

function InputDeneme() {
  // const [email, setEmail] = useState("email");
  // const [password, setPassword] = useState("password");
  const [form, setForm] = useState({ email: "", password: "" });

  const formHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            // onChange={(event) => setEmail(event.target.value)}
            onChange={formHandler}
            type="email"
            name="email"
            value={form.email}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            // onChange={(event) => setPassword(event.target.value)}
            onChange={formHandler}
            type="password"
            name="password"
            value={form.password}
            className="form-control"
            id="password"
          />
        </div>
        <div>
          <h5>
            {form.email} {form.password}
          </h5>
        </div>
      </form>
    </div>
  );
}

export default InputDeneme;
