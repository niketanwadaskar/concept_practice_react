import { useState } from "react";
const tableData = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Bob", age: 28 },
  { id: 4, name: "Charlie", age: 35 },
];

function DynamicTable() {
  const [data, setData] = useState(tableData);
  const [order, setOrder] = useState({
    id: true,
    age: true,
    name: true,
  });

  function handleSort(key) {
    let sortedData;
    if (key === "id" || key === "age") {
      if (order[key]) {
        sortedData = data.toSorted((a, b) => b[key] - a[key]);
      } else {
        sortedData = data.toSorted((a, b) => a[key] - b[key]);
      }
    } else {
      sortedData = order[key]
        ? data.toSorted((a, b) => b[key].localeCompare(a[key]))
        : data.toSorted((a, b) => a[key].localeCompare(b[key]));
    }
    setData(sortedData);
    setOrder((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("id")}>id</th>
          <th onClick={() => handleSort("age")}>Age</th>
          <th onClick={() => handleSort("name")}>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elem, index) => (
          <tr key={elem.id}>
            <td>{elem.id}</td>
            <td>{elem.age}</td>
            <td>{elem.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;
