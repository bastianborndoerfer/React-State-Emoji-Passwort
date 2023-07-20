import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentCode, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  function handleClick(event) {
    const newCode = currentCode + event.target.textContent;
    setCode(newCode);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("");
          console.log("Reset Code!");
        }}
      >
        Reset
      </button>

      {currentCode === validCode && <p>Valid code!</p>}
    </div>
  );
}
