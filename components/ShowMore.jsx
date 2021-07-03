import React, { useState } from "react";
import clsx from "clsx";

function ShowMore({ children }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="show-more">
      <div className={clsx("extra-content", isOpen && "visible")}>
        {children}
      </div>
      <button onClick={() => setOpen(!isOpen)}>
        Show {isOpen ? "less" : "more"}
      </button>
    </div>
  );
}

export default ShowMore;
