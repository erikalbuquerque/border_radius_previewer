import styled from "styled-components";

type BoxModelProps = {
  topLeft: number;
  topRight: number;
  bottomRight: number;
  bottomLeft: number;
};

export const Container = styled.div({});

export const Content = styled.div({
  position: "relative",
});

export const BoxModel = styled.div((props: BoxModelProps) => ({
  width: "200px",
  height: "200px",
  padding: "1rem",
  border: "1px solid var(--brown-700)",
  borderRadius: `${props.topLeft}px ${props.topRight}px ${props.bottomRight}px ${props.bottomLeft}px`,
}));

type Corner = {
  corner: number;
};

const BaseCorner = styled.div<Corner>`
  position: absolute;
  width: ${(props) =>
    props.corner === 0 || props.corner <= 30
      ? "30px"
      : props.corner >= 200
      ? "200px"
      : `${props.corner}px`};
  height: ${(props) =>
    props.corner === 0 || props.corner <= 30
      ? "30px"
      : props.corner >= 200
      ? "200px"
      : `${props.corner}px`};
`;

export const TopLeft = styled(BaseCorner)`
  top: 0;
  border-top: 2px solid var(--red-400);
  border-left: 2px solid var(--red-400);
  border-top-left-radius: ${(props) => `${props.corner}px`};
`;

export const TopRight = styled(BaseCorner)`
  top: 0;
  right: 0;
  border-top: 2px solid var(--red-400);
  border-right: 2px solid var(--red-400);
  border-top-right-radius: ${(props) => `${props.corner}px`};
`;

export const BottomRight = styled(BaseCorner)`
  bottom: 0;
  right: 0;
  border-bottom: 2px solid var(--red-400);
  border-right: 2px solid var(--red-400);
  border-bottom-right-radius: ${(props) => `${props.corner}px`};
`;

export const BottomLeft = styled(BaseCorner)`
  bottom: 0;
  left: 0;
  border-bottom: 2px solid var(--red-400);
  border-left: 2px solid var(--red-400);
  border-bottom-left-radius: ${(props) => `${props.corner}px`};
`;
