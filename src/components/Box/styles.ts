import styled from "styled-components";

type BoxModelProps = {
  topLeft: number;
  topRight: number;
  bottomRight: number;
  bottomLeft: number;
};

export const Container = styled.div({});

export const Content = styled.div({});

export const BoxModel = styled.div((props: BoxModelProps) => ({
  width: "200px",
  height: "200px",
  padding: "1rem",
  border: "1px solid var(--brown-700)",
  borderRadius: `${props.topLeft}px ${props.topRight}px ${props.bottomRight}px ${props.bottomLeft}px`,
}));
