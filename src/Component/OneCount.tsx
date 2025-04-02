import React, { useState } from "react";

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ marginLeft: "10px" }}>
      <div
        style={{ cursor: "pointer", fontWeight: hasChildren ? "bold" : "normal" }}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {hasChildren && (expanded ? "▼" : "▶")} {node.label}
      </div>
      {expanded && hasChildren && (
        <div style={{ marginLeft: "15px" }}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function TreeDropdown() {
  const data = [
    {
      id: "1",
      label: "Root",
      children: [
        {
          id: "1-1",
          label: "Category A",
          children: [
            {
              id: "1-1-1",
              label: "Subcategory A1",
              children: [
                { id: "1-1-1-1", label: "Child A1-1" },
                { id: "1-1-1-2", label: "Child A1-2" },
              ],
            },
            { id: "1-1-2", label: "Subcategory A2" },
          ],
        },
        {
          id: "1-2",
          label: "Category B",
          children: [{ id: "1-2-1", label: "Subcategory B1" }],
        },
      ],
    },
  ];

  return (
    <div style={{ padding: "10px", border: "1px solid #ddd", width: "250px" }}>
      <TreeNode node={data[0]} />
    </div>
  );
}
