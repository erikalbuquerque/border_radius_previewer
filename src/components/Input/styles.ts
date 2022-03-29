import styled from "styled-components";

export const Container = styled.div({});

export const Input = styled.input`
  background: transparent;
  padding: 0.5rem;
  max-width: 40px;
  height: 20px;
  border: none;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
