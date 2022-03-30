import { useBorderRadius } from "../../hooks/useBorderRadius";
import {
  Container,
  Content,
  BoxModel,
  TopLeft,
  TopRight,
  BottomRight,
  BottomLeft,
} from "./styles";

export function Box() {
  const {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    showTopLeftBorderIndicator,
    showTopRightBorderIndicator,
    showBottomRightBorderIndicator,
    showBottomLeftBorderIndicator,
  } = useBorderRadius();

  return (
    <Container>
      <Content>
        <BoxModel
          topLeft={topLeft}
          topRight={topRight}
          bottomRight={bottomRight}
          bottomLeft={bottomLeft}
        />
        {showTopLeftBorderIndicator && <TopLeft corner={topLeft} />}
        {showTopRightBorderIndicator && <TopRight corner={topRight} />}
        {showBottomRightBorderIndicator && <BottomRight corner={bottomRight} />}
        {showBottomLeftBorderIndicator && <BottomLeft corner={bottomLeft} />}
      </Content>
    </Container>
  );
}
