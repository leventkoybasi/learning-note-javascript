import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("Levent KOYBASI");
  return (
    <div>
      <label htmlFor="text" className="form-label">
        <strong> AD SOYAD</strong>
      </label>
      <input value={name} type="text" id="text" className="form-control" />
    </div>
  );
}

export default InputExample;
