import React, { useState } from "react";

const DynamicTable = () => {
  // Data for table rows
  const tableData = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 28 },
    { id: 4, name: "Charlie", age: 35 },
  ];

  // Column definitions for table headers
  const tableColumns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
  ];

  const [sortingConfig, setSortingConfig] = useState({
    key: "",
    direction: "ascending",
  });

  // Function to handle sorting when a column header is clicked
  const handleColumnSort = (columnKey) => {
    let newDirection = "ascending";
    if (
      sortingConfig.key === columnKey &&
      sortingConfig.direction === "ascending"
    ) {
      newDirection = "descending";
    }

    setSortingConfig({ key: columnKey, direction: newDirection });
  };

  // Sort data based on the column key and direction
  const sortedTableData = React.useMemo(() => {
    const sortableData = [...tableData];
    if (sortingConfig.key) {
      sortableData.sort((firstRow, secondRow) => {
        if (firstRow[sortingConfig.key] < secondRow[sortingConfig.key]) {
          return sortingConfig.direction === "ascending" ? -1 : 1;
        }
        if (firstRow[sortingConfig.key] > secondRow[sortingConfig.key]) {
          return sortingConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [tableData, sortingConfig]);

  return (
    <table>
      <thead>
        <tr>
          {tableColumns.map((column) => (
            <th
              key={column.key}
              onClick={() => handleColumnSort(column.key)}
              style={{ cursor: "pointer" }}
            >
              {column.label}
              {sortingConfig.key === column.key
                ? sortingConfig.direction === "ascending"
                  ? " ↑"
                  : " ↓"
                : null}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedTableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {tableColumns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
