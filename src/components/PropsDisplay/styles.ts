import styled from "styled-components";

export const Container = styled.div({
  width: "347px",
});

export const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.5rem",

  span: {
    fontSize: "0.875rem",
    color: "var(--brown-700)",
  },
});

type Props = {
  isCopy: boolean;
  isHover: boolean;
};

export const Props = styled.div<Props>`
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
