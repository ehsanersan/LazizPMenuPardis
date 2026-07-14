import { motion } from "framer-motion";
import { Sun, SunMedium, Moon } from "lucide-react";
import type { MealType } from "../data/menuData";

interface MealSwitcherProps {
  activeMeal: MealType;
  onMealChange: (meal: MealType) => void;
  counts: Record<MealType, number>;
  scrollToGrid?: () => void;
}

const mealConfig = {
  breakfast: {
    label: "صبحانه",
    icon: Sun,
    activeGradient: "from-amber-400 to-orange-400",
    glowColor: "shadow-amber-400/30",
  },
  lunch: {
    label: "ناهار",
    icon: SunMedium,
    activeGradient: "from-yellow-500 to-emerald-500",
    glowColor: "shadow-emerald-400/30",
  },
  dinner: {
    label: "شام",
    icon: Moon,
    activeGradient: "from-indigo-400 to-purple-500",
    glowColor: "shadow-indigo-400/30",
  },
};

export default function MealSwitcher({ activeMeal, onMealChange, counts, scrollToGrid }: MealSwitcherProps) {
  const meals: MealType[] = ["breakfast", "lunch", "dinner"];

  const handleMealChange = (meal: MealType) => {
    onMealChange(meal);
    // Scroll to grid after a short delay to allow state update
    setTimeout(() => {
      scrollToGrid?.();
    }, 100);
  };

  return (
    <div className="sticky top-16 md:top-20 z-[30] py-4 bg-[#0d0815]/80 backdrop-blur-xl">
      <div className="max-w-xl mx-auto px-4">
        <div className="relative flex rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-1.5">
          {/* Active indicator */}
          <motion.div
            className={`absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r ${mealConfig[activeMeal].activeGradient} shadow-lg ${mealConfig[activeMeal].glowColor}`}
            layout
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            style={{
              width: `calc(${100 / 3}% - 4px)`,
              right: `calc(${meals.indexOf(activeMeal) * (100 / 3)}% + 2px)`,
            }}
          />

          {meals.map((meal) => {
            const config = mealConfig[meal];
            const Icon = config.icon;
            const isActive = activeMeal === meal;
            return (
              <button
                key={meal}
                onClick={() => handleMealChange(meal)}
                className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-colors text-sm md:text-base font-medium ${
                  isActive ? "text-white" : "text-white/50 hover:text-white/70"
                }`}
                aria-label={`نمایش ${config.label}`}
                aria-pressed={isActive}
              >
                <Icon size={18} />
                <span>{config.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-white/5 text-white/40"
                  }`}
                >
                  {counts[meal]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
