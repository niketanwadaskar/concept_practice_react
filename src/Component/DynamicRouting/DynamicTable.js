import React, { useState } from "react";

const DynamicTable = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 28 },
    { id: 4, name: "Charlie", age: 35 },
  ];

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
  ];
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });

  // Function to handle sorting
  const handleSort = (columnKey) => {
    let direction = "ascending";
    if (sortConfig.key === columnKey && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    setSortConfig({ key: columnKey, direction });
  };

  // Sort data based on column key and direction
  const sortedData = React.useMemo(() => {
    const sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => handleSort(col.key)}
              style={{ cursor: "pointer" }}
            >
              {col.label}
              {sortConfig.key === col.key
                ? sortConfig.direction === "ascending"
                  ? " ↑"
                  : " ↓"
                : null}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
