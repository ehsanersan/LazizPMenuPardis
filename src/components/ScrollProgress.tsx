import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 h-[2px] z-[100] origin-right"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #d4a853, #c1832b, #b87333)",
      }}
    />
  );
}
