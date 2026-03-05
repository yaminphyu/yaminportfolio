import { useEffect } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";

const CURSOR_SIZE = 40;

export function useCursorMotion() {
  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);

  const x: MotionValue<number> = useSpring(mouseX, {
    stiffness: 1200,
    damping: 28,
    mass: 0.35,
  });

  const y: MotionValue<number> = useSpring(mouseY, {
    stiffness: 1200,
    damping: 28,
    mass: 0.35,
  });

  useEffect((): (() => void) => {
    const move = (e: MouseEvent): void => {
      mouseX.set(e.clientX - CURSOR_SIZE / 2);
      mouseY.set(e.clientY - CURSOR_SIZE / 2);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return { x, y };
}
