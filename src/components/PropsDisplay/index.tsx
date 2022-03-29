import { useBorderRadius } from "../../hooks/useBorderRadius";
import { Container, Content } from "./styles";

export function PropsDisplay() {
  const { topLeft, topRight, bottomLeft, bottomRight } = useBorderRadius();

  return (
    <Container>
      <Content>
        <span>
          border-radius: {topLeft}px {topRight}px {bottomLeft}px {bottomRight}
          px;
        </span>
      </Content>
    </Container>
  );
}
