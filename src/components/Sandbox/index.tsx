import { ReactNode } from "react";
import { Container, Content } from "./styles";

type SandboxProps = {
  children: ReactNode;
};

export function Sandbox({ children }: SandboxProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
