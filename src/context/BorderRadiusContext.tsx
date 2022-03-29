import { createContext, useState, useCallback, ReactNode } from "react";

type BorderRadiusProviderProps = {
  children: ReactNode;
};

interface BorderRadiusContext {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
  handleBorderTopLeft: (value: number) => void;
  handleBorderTopRight: (value: number) => void;
  handleBorderBottomLeft: (value: number) => void;
  handleBorderBottomRight: (value: number) => void;
  handleCopyToBoard: () => void;
}

export const BorderRadiusContext = createContext({} as BorderRadiusContext);

export function BorderRadiusProvider({ children }: BorderRadiusProviderProps) {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);

  const [isCopy, setIsCopy] = useState(false);

  const handleBorderTopLeft = useCallback(
    (value: number) => {
      setTopLeft(value);
    },
    [topLeft]
  );

  const handleBorderTopRight = useCallback(
    (value: number) => {
      setTopRight(value);
    },
    [topRight]
  );

  const handleBorderBottomLeft = useCallback(
    (value: number) => {
      setBottomLeft(value);
    },
    [bottomLeft]
  );

  const handleBorderBottomRight = useCallback(
    (value: number) => {
      setBottomRight(value);
    },
    [bottomRight]
  );

  function showMessage() {
    setIsCopy(!isCopy);
  }

  function handleCopyToBoard() {
    navigator.clipboard.writeText(
      `border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px;`
    );
    showMessage();
  }

  return (
    <BorderRadiusContext.Provider value={{
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      handleBorderTopLeft,
      handleBorderTopRight,
      handleBorderBottomLeft,
      handleBorderBottomRight,
      handleCopyToBoard
    }}>
      {children}
    </BorderRadiusContext.Provider>
  );
}
