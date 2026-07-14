import { motion, AnimatePresence } from "framer-motion";
import type { MealType } from "../data/menuData";

interface AmbientBackgroundProps {
  activeMeal: MealType;
}

const mealAmbient: Record<MealType, { gradients: string[]; opacity: number }> = {
  breakfast: {
    gradients: [
      "radial-gradient(ellipse at 20% 30%, rgba(245, 180, 60, 0.1) 0%, transparent 60%)",
      "radial-gradient(ellipse at 80% 70%, rgba(147, 112, 219, 0.08) 0%, transparent 50%)",
      "radial-gradient(ellipse at 50% 50%, rgba(255, 220, 120, 0.05) 0%, transparent 70%)",
    ],
    opacity: 1,
  },
  lunch: {
    gradients: [
      "radial-gradient(ellipse at 30% 40%, rgba(193, 131, 43, 0.12) 0%, transparent 60%)",
      "radial-gradient(ellipse at 70% 60%, rgba(88, 28, 135, 0.1) 0%, transparent 50%)",
      "radial-gradient(ellipse at 50% 50%, rgba(212, 168, 83, 0.06) 0%, transparent 70%)",
    ],
    opacity: 1,
  },
  dinner: {
    gradients: [
      "radial-gradient(ellipse at 25% 35%, rgba(88, 28, 135, 0.2) 0%, transparent 60%)",
      "radial-gradient(ellipse at 75% 65%, rgba(107, 29, 58, 0.12) 0%, transparent 50%)",
      "radial-gradient(ellipse at 50% 50%, rgba(184, 115, 51, 0.06) 0%, transparent 70%)",
    ],
    opacity: 1,
  },
};

export default function AmbientBackground({ activeMeal }: AmbientBackgroundProps) {
  const config = mealAmbient[activeMeal];
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMeal}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: config.opacity }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {config.gradients.map((g, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{ background: g }}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
