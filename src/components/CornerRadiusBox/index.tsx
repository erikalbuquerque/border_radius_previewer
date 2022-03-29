import { Input } from "../Input";
import {
  AiOutlineRadiusUpleft,
  AiOutlineRadiusUpright,
  AiOutlineRadiusBottomleft,
  AiOutlineRadiusBottomright,
} from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { Container, Content, InputContent, Tools, Inputs, ResetCornersButton } from "./styles";
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
    handleResetBorderRadius,
  } = useBorderRadius();

  return (
    <Container>
      <Content>
        <strong>Corner radius</strong>
        <Tools>
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
                onChange={(e) =>
                  handleBorderBottomRight(Number(e.target.value))
                }
              />
            </InputContent>
          </Inputs>
          <ResetCornersButton onClick={handleResetBorderRadius}>
            <GrPowerReset size={15} />
          </ResetCornersButton>
        </Tools>
      </Content>
    </Container>
  );
}
