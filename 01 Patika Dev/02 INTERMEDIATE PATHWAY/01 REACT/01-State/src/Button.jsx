import React from "react";

function Button({ label, setCount, className, setAge, setName, setAddlist }) {
  return (
    <div>
      <button
        className={className}
        onClick={() => {
          setCount((prev) => {
            return typeof prev === "number" ? null : prev;
          });
          setAge("");
          setName("");
          setAddlist(["Levent", "Nihal"]);
        }}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
