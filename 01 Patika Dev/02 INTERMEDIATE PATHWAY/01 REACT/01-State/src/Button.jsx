import React from "react";

function Button({ label, setCount, className, setAge, setName }) {
  return (
    <div>
      <button
        className={className}
        onClick={() => {
          setCount((prev) => {
            return typeof prev === "number" ? "" : prev;
          });
          setAge("");
          setName("");
        }}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
