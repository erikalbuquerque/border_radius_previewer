import styled from "styled-components";

type ContentProps = {
  isCopy: boolean;
};

export const Container = styled.div({
  display: "flex",
  alignItems: "center",
  width: "347px",
});

export const Content = styled.div<ContentProps>`
  background-color: ${(props) => (props.isCopy ? "#3db13d" : "var(--cyan)")};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  user-select: none;
  cursor: pointer;
  transition: filter 0.2s, background-color 0.2s;
  :hover {
    filter: brightness(0.95);
  }

  span {
    color: ${(props) => (props.isCopy ? "var(--white)" : "var(--brown-700)")};
    font-weight: 700;
    font-size: 1rem;
  }
`;
