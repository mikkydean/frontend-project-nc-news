import { useState } from "react";

function Expandable({ children }) {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="all-comments">
      <button onClick={handleClick}>
        {isShowing ? "Hide" : "Show"} comments
      </button>
      {isShowing && children}
    </div>
  );
}

export default Expandable;
