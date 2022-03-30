import styled from "styled-components";

export const Container = styled.main({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  maxWidth: "1100px",
  margin: "0 auto",
});

export const Content = styled.div({
  width: "100%",
  marginTop: "2rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
});

export const Aside = styled.aside({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});
