import { Container, Content } from "./styles";

export function PropsDisplay() {
  const obj = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  };
  return (
    <Container>
      <Content>
        <span>
          border-radius: {obj.topLeft}px {obj.topRight}px {obj.bottomLeft}px{" "}
          {obj.bottomRight}
          px;
        </span>
      </Content>
    </Container>
  );
}
