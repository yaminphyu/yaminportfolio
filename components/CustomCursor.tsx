
import { motion } from "framer-motion";
import { useCursorMotion } from "@/hooks/useCursorMotion";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function CustomCursor() {
  const isDesktop = useIsDesktop();
  const { x, y } = useCursorMotion();

  if (!isDesktop) return <></>;

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 border border-black dark:border-white rounded-full pointer-events-none z-9999"
      style={{ x, y }}
    >
      <motion.div
        className='w-full h-full rounded-full flex justify-center items-center'
      >
        <motion.div
          className='w-2 h-2 bg-black dark:bg-white rounded-full'
        />
      </motion.div>
    </motion.div>
  );
}
