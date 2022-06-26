import { useEffect } from "react";

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  useEffect(() => {
    let bounce: NodeJS.Timeout | null = null;
    const clearBounce = () => bounce && clearTimeout(bounce);
    if (rippleCount > 0) {
      clearBounce();

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearBounce();
      }, duration * 4);
    }

    return () => {
      clearBounce();
    };
  }, [rippleCount, duration, cleanUpFunction]);
};

export default useDebouncedRippleCleanUp;
