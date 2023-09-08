import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("Levent");
  const [surname, setSurname] = useState("KOYBASI");
  return (
    <div>
      <label htmlFor="text" className="form-label">
        <strong>AD</strong>
      </label>
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        type="text"
        id="text"
        className="form-control"
      />
      <br />
      <label htmlFor="text" className="form-label">
        <strong>SOYAD</strong>
      </label>
      <input
        onChange={(event) => setName(event.target.value)}
        value={surname}
        type="text"
        id="text"
        className="form-control"
      />
      <br />
      {`${name} ${surname}`}
    </div>
  );
}

export default InputExample;
