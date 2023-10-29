import { useState, useLayoutEffect } from "react";

export const useElementPosition = ref => {
  const [elementXPosition, setElementXPosition] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    const elementXPosition = element.getBoundingClientRect().left;
    const newPosition = elementXPosition < 10 ? 10 : elementXPosition;
    setElementXPosition(newPosition);

    const updateElementPosition = () => {
      const elementXPosition = element.getBoundingClientRect().left;
      const newPosition = elementXPosition < 10 ? 10 : elementXPosition;
      setElementXPosition(newPosition);
    };

    window.addEventListener("resize", updateElementPosition);

    return () => {
      window.removeEventListener("resize", updateElementPosition);
    };
  }, [ref]);

  return { elementXPosition };
};
