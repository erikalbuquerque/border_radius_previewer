import { useBorderRadius } from "../../hooks/useBorderRadius";
import { Container, Content, BoxModel } from "./styles";

export function Box() {
  const { topLeft, topRight, bottomLeft, bottomRight } = useBorderRadius();
  return (
    <Container>
      <Content>
        <BoxModel topLeft={topLeft} topRight={topRight} bottomRight={bottomRight} bottomLeft={bottomLeft} />
      </Content>
    </Container>
  );
}
