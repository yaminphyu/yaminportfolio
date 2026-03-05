
import { motion, useTransform, useVelocity } from "framer-motion";
import { useCursorMotion } from "@/hooks/useCursorMotion";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function CustomCursor() {
  const isDesktop = useIsDesktop();
  const { x, y } = useCursorMotion();

  const vx = useVelocity(x);
  const vy = useVelocity(y);

  const speed = useTransform([vx, vy], ([latestVx, latestVy]) => {
    return Math.sqrt((latestVx as number) ** 2 + (latestVy as number) ** 2);
  });

  const stretchX = useTransform(speed, [0, 2000], [1, 1.35]);
  const stretchY = useTransform(speed, [0, 2000], [1, 0.75]);
  const rotate = useTransform([vx, vy], ([latestVx, latestVy]) => {
    return Math.atan2(latestVy as number, latestVx as number) * (180 / Math.PI);
  });

  if (!isDesktop) return <></>;

  return (
    <motion.div className="fixed top-0 left-0 pointer-events-none z-9999" style={{ x, y }}>
      <motion.div
        className="relative w-10 h-10 rounded-full border border-black/80 dark:border-white/80"
        style={{ scaleX: stretchX, scaleY: stretchY, rotate }}
      >
        <motion.div className="absolute inset-0 rounded-full bg-black/10 dark:bg-white/10 blur-[1px]" />
        <motion.div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-black dark:bg-white" />
      </motion.div>
    </motion.div>
  );
}
