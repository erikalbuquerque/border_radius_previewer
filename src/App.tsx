import { Container, Content } from "./styles/app";

import { Logo } from "./components/Logo";
import { Sandbox } from "./components/Sandbox";
import { Box } from "./components/Box";
import { PropsDisplay } from "./components/PropsDisplay";
import { CornerRadiusBox } from "./components/CornerRadiusBox";


export function App() {
  return (
    <Container>
      <Content>
        <Logo />

        <Sandbox>
          <Box />
          <CornerRadiusBox />
          <PropsDisplay />
        </Sandbox>
      </Content>
    </Container>
  );
}
