import React from "react";

function Button({
  label,
  setCount,
  className,
  setAge,
  setName,
  setAddlist,
  setAddress,
}) {
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
          setAddress({
            Street: "Valparaiso St",
            Apt: 12,
            City: "Los Angeles",
            State: "California",
            Zip: 90034,
          });
        }}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
