import { Container, Content, Aside } from "./styles/app";

import { Logo } from "./components/Logo";
import { Sandbox } from "./components/Sandbox";
import { Box } from "./components/Box";
import { PropsDisplay } from "./components/PropsDisplay";
import { CornerRadiusBox } from "./components/CornerRadiusBox";
import { Help } from "./components/Help";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <Container>
      <Content>
        <Aside>
          <Logo />
          <Help />
        </Aside>

        <Sandbox>
          <Box />
          <CornerRadiusBox />
          <PropsDisplay />
          <Footer />
        </Sandbox>
      </Content>
    </Container>
  );
}
