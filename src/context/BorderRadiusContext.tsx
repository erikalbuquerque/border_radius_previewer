import {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";

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
  isCopy: boolean;
  handleResetBorderRadius: () => void;
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
      if (value.toString().length <= 3) setTopLeft(value);
    },
    [topLeft]
  );

  const handleBorderTopRight = useCallback(
    (value: number) => {
      if (value.toString().length <= 3) setTopRight(value);
    },
    [topRight]
  );

  const handleBorderBottomLeft = useCallback(
    (value: number) => {
      if (value.toString().length <= 3) setBottomLeft(value);
    },
    [bottomLeft]
  );

  const handleBorderBottomRight = useCallback(
    (value: number) => {
      if (value.toString().length <= 3) setBottomRight(value);
    },
    [bottomRight]
  );

  function showMessage(value: boolean) {
    setIsCopy(value);
  }

  function handleCopyToBoard() {
    navigator.clipboard.writeText(
      `border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px;`
    );
    showMessage(true);
  }

  function handleResetBorderRadius() {
    handleBorderTopLeft(0);
    handleBorderTopRight(0);
    handleBorderBottomLeft(0);
    handleBorderBottomRight(0);
  }

  useEffect(() => {
    setTimeout(() => {
      if (isCopy) {
        showMessage(false);
      }
    }, 1000);
  }, [isCopy]);

  return (
    <BorderRadiusContext.Provider
      value={{
        topLeft,
        topRight,
        bottomLeft,
        bottomRight,
        handleBorderTopLeft,
        handleBorderTopRight,
        handleBorderBottomLeft,
        handleBorderBottomRight,
        handleCopyToBoard,
        isCopy,
        handleResetBorderRadius,
      }}
    >
      {children}
    </BorderRadiusContext.Provider>
  );
}
