/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

export const Input = ({ type, name, handelChange, value = "", min, props }) => {
  const [date, setDate] = useState("");

  return (
    <>
      {type !== "checkbox" ? (
        <>
          
          <label htmlFor={name}>{name}</label>
          <input
            type={type}
            placeholder={`Write your ${name}`}
            name={name}
            min={min || ""}
            value={date || value}
            onChange={(e) => {
              handelChange(e.target);
              setDate(e.target.value);
            }}
          />
        </>
      ) : (
        <>
          <label htmlFor={name}>
            {name}
            <input

            
              type={type}
              name={name}
              value={date || value}
              onChange={(e) => {
                handelChange(e.target);
                setDate(e.target.value);
              }}
            />
          </label>
        </>
      )}
    </>
  );
};
