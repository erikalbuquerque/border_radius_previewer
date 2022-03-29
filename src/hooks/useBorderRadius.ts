import { useContext } from "react";
import { BorderRadiusContext } from "../context/BorderRadiusContext";

export function useBorderRadius() {
  const context = useContext(BorderRadiusContext);
  return context;
}
