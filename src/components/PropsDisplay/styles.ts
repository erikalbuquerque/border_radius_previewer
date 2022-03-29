import styled from "styled-components";

export const Container = styled.div({
  display: "flex",
  alignItems: "flex-start",
  width: "347px",
});

export const Content = styled.div({
  backgroundColor: "var(--cyan)",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  span: {
    color: "var(--brown-700)",
    fontWeight: "700",
    fontSize: "1rem",
  },
});
