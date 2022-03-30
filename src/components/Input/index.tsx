import { InputHTMLAttributes } from "react";
import { Container, Input as InputStyled } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <Container>
      <InputStyled {...props} min={0} />
    </Container>
  );
}
