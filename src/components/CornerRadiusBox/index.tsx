import { Input } from "../Input";
import {
  AiOutlineRadiusUpleft,
  AiOutlineRadiusUpright,
  AiOutlineRadiusBottomleft,
  AiOutlineRadiusBottomright,
} from "react-icons/ai";
import { Container, Content, InputContent, Inputs } from "./styles";
import { useBorderRadius } from "../../hooks/useBorderRadius";

export function CornerRadiusBox() {
  const {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    handleBorderTopLeft,
    handleBorderTopRight,
    handleBorderBottomLeft,
    handleBorderBottomRight,
  } = useBorderRadius();
  
  return (
    <Container>
      <Content>
        <strong>Corner radius</strong>
        <Inputs>
          <InputContent>
            <AiOutlineRadiusUpleft size={15} />
            <Input
              type="number"
              value={topLeft}
              onChange={(e) => handleBorderTopLeft(Number(e.target.value))}
            />
          </InputContent>
          <InputContent>
            <AiOutlineRadiusUpright size={15} />
            <Input
              type="number"
              value={topRight}
              onChange={(e) => handleBorderTopRight(Number(e.target.value))}
            />
          </InputContent>
          <InputContent>
            <AiOutlineRadiusBottomleft size={15} />
            <Input
              type="number"
              value={bottomLeft}
              onChange={(e) => handleBorderBottomLeft(Number(e.target.value))}
            />
          </InputContent>
          <InputContent>
            <AiOutlineRadiusBottomright size={15} />
            <Input
              type="number"
              value={bottomRight}
              onChange={(e) => handleBorderBottomRight(Number(e.target.value))}
            />
          </InputContent>
        </Inputs>
      </Content>
    </Container>
  );
}
