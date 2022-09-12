import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const fn = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return windowSize;
};

export default useWindowSize;
