import React, { useState } from "react";
import CreatePortal from "./CreatePortal";
import { createPortal } from "react-dom";

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-green-500 text-black px-4 py-2 rounded"
      >
        Open Modal
      </button>
      {open && (
        <CreatePortal onClose={() => setOpen(false)}>
          Hello from Portal!
        </CreatePortal>
      )}
    </div>
  );
}
