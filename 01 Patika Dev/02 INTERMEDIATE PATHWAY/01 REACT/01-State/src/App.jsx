import { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Levent");
  const [age, setAge] = useState("");

  return (
    <>
      <div>
        <h1>COUNT : {count}</h1>
        <button
          className="btn btn-success px-4 mx-2"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          +
        </button>
        <button
          className="btn btn-danger px-4 mx-2"
          onClick={() =>
            setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
          }
        >
          -
        </button>
      </div>
      <hr />
      <div>
        <h1>name : {name}</h1>
        <button
          className="btn btn-primary"
          onClick={() =>
            setName(`${name === "KOYBASI" ? "Levent" : "KOYBASI"}`)
          }
        >
          AD DEGISTIR
        </button>
      </div>
      <hr />
      <div>
        <h1>age : {age}</h1>
        <button
          className="btn btn-primary"
          onClick={() => setAge(`${age === "" ? 38 : ""}`)}
        >
          {/* {`${age === "" ? "SHOW AGE" : "HIDE AGE"}`} */}
          {age === "" ? "SHOW AGE" : "HIDE AGE"}
        </button>
      </div>
      <hr />
      <div>
        <Button
          className="btn btn-outline-warning"
          label="Sifirla"
          setCount={setCount}
          setAge={setAge}
          setName={setName}
        />
      </div>
    </>
  );
}

export default App;
