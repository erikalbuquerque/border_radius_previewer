import { useBorderRadius } from "../../hooks/useBorderRadius";
import { Container, Content, Props, Wrapper, Message } from "./styles";
import { BsCheck } from "react-icons/bs";
import { useState } from "react";

export function PropsDisplay() {
  const {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    handleCopyToBoard,
    isCopy,
  } = useBorderRadius();

  const [isHover, setIsHover] = useState(false);

  function handleIsHover(value: boolean) {
    setIsHover(value);
  }

  return (
    <Container>
      <Content>
        <Wrapper>
          <Props
            onClick={handleCopyToBoard}
            isCopy={isCopy}
            isHover={isHover}
            onMouseEnter={() => handleIsHover(true)}
            onMouseLeave={() => handleIsHover(false)}
          >
            <span>
              border-radius: {topLeft}px {topRight}px {bottomLeft}px{" "}
              {bottomRight}
              px;
            </span>
          </Props>
          {isCopy && <BsCheck size={30} color="var(--green-500)" />}
        </Wrapper>

        {isHover && <Message>Click para copiar!</Message>}
      </Content>
    </Container>
  );
}
