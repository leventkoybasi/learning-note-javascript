import { useState } from "react";
import Button from "./Button";
import InputExample from "./InputExample";
import InputExample2 from "./InputExample2";
import InputDeneme from "./InputDeneme";
import InputExample3 from "./InputExample3";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Levent");
  const [age, setAge] = useState("");
  const [addlist, setAddlist] = useState(["Levent", "Nihal"]);
  const [address, setAddress] = useState({
    Street: "Valparaiso St",
    Apt: 12,
    City: "Los Angeles",
    State: "California",
    Zip: 90034,
  });

  const newAddlist = () => {
    const updatedList = [...addlist, "ANAN"];
    setAddlist(updatedList);
  };

  const newAddress = () => {
    const updatedAddress = {
      Street: "Street",
      Apt: 1,
      City: "City",
      State: "State",
      Zip: 1,
    };
    setAddress(updatedAddress);
  };

  return (
    <>
      <div>
        <InputExample3 />
        <br />
        <br />
        <hr />
      </div>
      <div>
        <InputDeneme />
        <br />
        <br />
        <hr />
      </div>
      <div>
        <InputExample />
      </div>
      <br />
      <hr />
      <br />
      <div>
        <InputExample2 />
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h1>COUNT : {count}</h1>
        <button
          className="btn btn-success px-4 mx-2"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <button
          className="btn btn-danger px-4 mx-2"
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          -
        </button>
      </div>
      <hr />
      <div>
        <h1>name : {name}</h1>
        <button
          className="btn btn-primary"
          onClick={() => setName(name === "Levent" ? "KOYBASI" : "Levent")}
        >
          {name === "Levent" ? "AD DEGISTIR" : "SOYAD DEGISTIR"}
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
        <ul>
          {addlist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={newAddlist} className="btn btn-outline-primary">
          Add Name
        </button>
      </div>
      <hr />
      <div>
        <h4>{address.Street}</h4>
        <h4>{address.Apt}</h4>
        <h4>{address.City}</h4>
        <h4>{address.State}</h4>
        <h4>{address.Zip}</h4>
        <button onClick={newAddress} className="btn btn-outline-success">
          Address
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
          setAddlist={setAddlist}
          setAddress={setAddress}
        />
      </div>
    </>
  );
}

export default App;
