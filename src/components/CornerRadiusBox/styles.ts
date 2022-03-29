import styled from "styled-components";

export const Container = styled.div({});

export const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const Tools = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
});

export const Inputs = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  border: "1px solid #cfcfcf",
  padding: "0.3rem 0",
  borderRadius: "0.5rem",
});

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 0.5rem;
  border-right: 1px solid #cfcfcf;
  :last-child {
    border-right: none;
  }
`;

export const ResetCornersButton = styled.button({
  padding: "0 0.5rem",
  border: "none",
  borderRadius: "0.25rem",
  backgroundColor: "#ebebeb",
  cursor: "pointer",
  transition: "filter 0.2s",
  ":hover": {
    filter: "brightness(0.95);",
  },
});
