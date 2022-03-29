import { Input } from "../Input";
import {
  AiOutlineRadiusUpleft,
  AiOutlineRadiusUpright,
  AiOutlineRadiusBottomleft,
  AiOutlineRadiusBottomright,
} from "react-icons/ai";
import { Container, Content, InputContent, Inputs } from "./styles";

export function CornerRadiusBox() {
  return (
    <Container>
      <Content>
        <strong>Corner radius</strong>
        <Inputs>
          <InputContent>
            <AiOutlineRadiusUpleft size={15} />
            <Input type="number" />
          </InputContent>
          <InputContent>
            <AiOutlineRadiusUpright size={15} />
            <Input type="number" />
          </InputContent>
          <InputContent>
            <AiOutlineRadiusBottomleft size={15} />
            <Input type="number" />
          </InputContent>
          <InputContent>
            <AiOutlineRadiusBottomright size={15} />
            <Input type="number" />
          </InputContent>
        </Inputs>
      </Content>
    </Container>
  );
}
