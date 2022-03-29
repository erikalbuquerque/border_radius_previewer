import { useState } from "react";

import { Container, Content } from "./styles/app";

export function App() {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);

  const [copySuccess, setCopySuccess] = useState(false);

  function borderTopLeft(value: number) {
    setTopLeft(value);
  }

  function borderTopRight(value: number) {
    setTopRight(value);
  }

  function borderBottomLeft(value: number) {
    setBottomLeft(value);
  }

  function borderBottomRight(value: number) {
    setBottomRight(value);
  }

  function copyToBoard() {
    navigator.clipboard.writeText(
      `border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px;`
    );
    showMessage();
  }
  function showMessage() {
    if (!copySuccess) setCopySuccess(true);
  }
  function hiddenMessage() {
    if (copySuccess) setCopySuccess(false);
  }
  return (
    <Container>
      <Content>
        <header>
          <h1>Border Radius Previewer</h1>
        </header>

        <div>
          <span className="props">
            border-radius: {topLeft}px {topRight}px {bottomLeft}px {bottomRight}
            px;
          </span>
          <div className="box">
            <div className="inputs">
              <input
                type="number"
                value={topLeft}
                onChange={(e) => borderTopLeft(Number(e.target.value))}
              />
              <input
                type="number"
                value={bottomLeft}
                onChange={(e) => borderBottomLeft(Number(e.target.value))}
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
                onChange={(e) => borderTopRight(Number(e.target.value))}
              />
              <input
                type="number"
                value={bottomRight}
                onChange={(e) => borderBottomRight(Number(e.target.value))}
              />
            </div>
          </div>
          <button onClick={() => copyToBoard()}>copy css</button>
          {copySuccess ? (
            <div className="popup">
              <span className="message">Copied!</span>
              <span className="btn" onClick={() => hiddenMessage()}>
                x
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </Content>
    </Container>
  );
}
