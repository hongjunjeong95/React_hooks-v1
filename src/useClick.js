import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
        console.log("unmount");
      }
    };
  }, []);
  return element;
};
