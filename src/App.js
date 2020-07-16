import React, { useState } from "react";
import "./index.css";
import "./style-border.css";

function App() {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);

  const [copySuccess, setCopySuccess] = useState(false);

  function borderTopLeft(value) {
    setTopLeft(value);
  }

  function borderTopRight(value) {
    setTopRight(value);
  }

  function borderBottomLeft(value) {
    setBottomLeft(value);
  }

  function borderBottomRight(value) {
    setBottomRight(value);
  }

  function copyToBoard() {
    navigator.clipboard.writeText(
      `border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px;`
    );
    showMessage(copySuccess);
  }
  function showMessage(copySuccess) {
    if (!copySuccess) setCopySuccess(true);
  }
  function hiddenMessage(copySuccess) {
    if (copySuccess) setCopySuccess(false);
  }
  return (
    <div className="main">
      <header>
        <h1>Border Radius Previewer</h1>
      </header>

      <div className="content">
        <span className="props">
          border-radius: {topLeft}px {topRight}px {bottomLeft}px {bottomRight}
          px;
        </span>
        <div className="box">
          <div className="inputs">
            <input
              type="number"
              value={topLeft}
              onChange={(e) => borderTopLeft(e.target.value)}
            />
            <input
              type="number"
              value={bottomLeft}
              onChange={(e) => borderBottomLeft(e.target.value)}
            />
          </div>

          <div
            className="box-model"
            style={{
              borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
            }}
          ></div>

          <div className="inputs">
            <input
              type="number"
              value={topRight}
              onChange={(e) => borderTopRight(e.target.value)}
            />
            <input
              type="number"
              value={bottomRight}
              onChange={(e) => borderBottomRight(e.target.value)}
            />
          </div>
        </div>
        <button onClick={() => copyToBoard()}>copy css</button>
        {copySuccess ? (
          <div className="popup">
            <span className="message">Copied!</span>
            <span className="btn" onClick={() => hiddenMessage(copySuccess)}>
              x
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
