import React from "react";

export default function List({ getItems }) {
  console.log("Child rendered (List Component)");

  return (
    <ul>
      {getItems().map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
