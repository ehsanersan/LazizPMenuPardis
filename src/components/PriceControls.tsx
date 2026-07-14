import { motion } from "framer-motion";
import type { MealType } from "../data/menuData";

interface PriceControlsProps {
  iranianRice: boolean;
  setIranianRice: (v: boolean) => void;
  includeVAT: boolean;
  setIncludeVAT: (v: boolean) => void;
  activeMeal: MealType;
}

function GlassToggle({
  label,
  optionA,
  optionB,
  value,
  onChange,
}: {
  label: string;
  optionA: string;
  optionB: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
      <span className="text-white/50 text-sm shrink-0">{label}:</span>
      <div className="relative flex rounded-xl bg-white/5 border border-white/10 p-1">
        <motion.div
          className="absolute top-1 bottom-1 rounded-lg bg-gradient-to-r from-amber-500/80 to-amber-600/80"
          layout
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          style={{
            width: "calc(50% - 4px)",
            right: value ? "calc(50% + 2px)" : "2px",
          }}
        />
        <button
          className={`relative z-10 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
            !value ? "text-white" : "text-white/50"
          }`}
          onClick={() => onChange(false)}
          aria-label={optionA}
        >
          {optionA}
        </button>
        <button
          className={`relative z-10 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
            value ? "text-white" : "text-white/50"
          }`}
          onClick={() => onChange(true)}
          aria-label={optionB}
        >
          {optionB}
        </button>
      </div>
    </div>
  );
}

export default function PriceControls({
  iranianRice,
  setIranianRice,
  includeVAT,
  setIncludeVAT,
  activeMeal,
}: PriceControlsProps) {
  const showRiceToggle = activeMeal === "lunch";

  return (
    <div className="max-w-4xl mx-auto px-4 mb-8">
      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-8 p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08]"
        layout
      >
        {showRiceToggle && (
          <GlassToggle
            label="نوع برنج"
            optionA="برنج هندی"
            optionB="برنج ایرانی"
            value={iranianRice}
            onChange={setIranianRice}
          />
        )}
        <GlassToggle
          label="نمایش قیمت"
          optionA="قیمت پایه"
          optionB="با ۱۰٪ ارزش افزوده"
          value={includeVAT}
          onChange={setIncludeVAT}
        />
      </motion.div>
    </div>
  );
}
