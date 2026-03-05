import { useEffect, useState } from "react";

export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(pointer: fine)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    const handler = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}
