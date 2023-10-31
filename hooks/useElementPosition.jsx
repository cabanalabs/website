import { useState, useEffect } from "react";

export const useElementPosition = (ref, treshold = 10, offset = 10) => {
  const [elementXPosition, setElementXPosition] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const elementXPosition = element.getBoundingClientRect().left;
    const newPosition = elementXPosition < treshold ? offset : elementXPosition;
    setElementXPosition(newPosition);

    const updateElementPosition = () => {
      const element = ref.current;
      const elementXPosition = element.getBoundingClientRect().left;
      const newPosition = elementXPosition < treshold ? offset : elementXPosition;
      setElementXPosition(newPosition);
    };

    window.addEventListener("resize", updateElementPosition);

    return () => {
      window.removeEventListener("resize", updateElementPosition);
    };
  }, [ref, offset, treshold]);

  return { elementXPosition };
};
