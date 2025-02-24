import React, { useCallback, useState } from "react";
import List from "./List";

export default function Index() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
 const getItems = useCallback(() => {
    return [Number(number), Number(number) + 1, Number(number) + 2];
  }, [number]); 

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  console.log("renderParent");

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
}
