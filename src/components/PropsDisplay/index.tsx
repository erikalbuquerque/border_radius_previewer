import { useBorderRadius } from "../../hooks/useBorderRadius";
import { Container, Content } from "./styles";
import { BsCheck } from "react-icons/bs";

export function PropsDisplay() {
  const {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    handleCopyToBoard,
    isCopy,
  } = useBorderRadius();

  return (
    <Container>
      <Content onClick={handleCopyToBoard} isCopy={isCopy}>
        <span>
          border-radius: {topLeft}px {topRight}px {bottomLeft}px {bottomRight}
          px;
        </span>
      </Content>
      {isCopy && <BsCheck size={30} color="var(--green-500)" />}
    </Container>
  );
}
