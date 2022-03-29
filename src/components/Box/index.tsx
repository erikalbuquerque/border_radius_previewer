import { Container, Content, BoxModel } from "./styles";

export function Box() {
  return (
    <Container>
      <Content>
        <BoxModel topLeft={0} topRight={0} bottomRight={0} bottomLeft={0} />
      </Content>
    </Container>
  );
}
