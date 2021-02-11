import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    if (!onBefore || typeof onBefore !== "function") {
      return;
    } else {
      const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
          onBefore();
        }
      };
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }
  }, []);
};
