import { useState } from "react";

import { Container, Content } from "./styles/app";

import { Logo } from "./components/Logo";
import { Sandbox } from "./components/Sandbox";
import { PropsDisplay } from "./components/PropsDisplay";
import { Box } from "./components/Box";


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
        <Logo />

        <Sandbox>
          <Box />
          <PropsDisplay />
        </Sandbox>
      </Content>
    </Container>
  );
}
