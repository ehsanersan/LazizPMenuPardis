import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import type { MenuItem } from "../data/menuData";
import { formatPrice } from "../data/menuData";
import { siteImages } from "../config/images";

interface FoodCardProps {
  item: MenuItem;
  index: number;
  displayPrice: number;
  iranianRice: boolean;
  onClick: () => void;
}

export default function FoodCard({ item, index, displayPrice, iranianRice, onClick }: FoodCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -4, y: x * 4 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const mealBadgeColor =
    item.meal === "breakfast"
      ? "from-amber-400/80 to-orange-400/80"
      : item.meal === "lunch"
      ? "from-emerald-400/80 to-teal-400/80"
      : "from-indigo-400/80 to-purple-400/80";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group cursor-pointer"
      style={{
        perspective: "1000px",
      }}
      role="button"
      tabIndex={0}
      aria-label={`مشاهده جزئیات ${item.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <motion.div
        className="relative rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-lg border border-white/[0.08] shadow-xl shadow-black/20 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-black/30"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        {/* Top highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent z-10" />

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {!imgLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] animate-pulse flex items-center justify-center">
              <span className="text-white/20 text-sm">{item.name}</span>
            </div>
          )}
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={(e) => { (e.target as HTMLImageElement).src = siteImages.general.placeholderFood; }}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Meal badge */}
          <div className="absolute top-3 right-3 z-10">
            <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${mealBadgeColor} text-white text-xs font-medium backdrop-blur-md`}>
              {item.meal === "breakfast" ? "صبحانه" : item.meal === "lunch" ? "ناهار" : "شام"}
            </span>
          </div>

          {/* Rice badge for lunch */}
          {item.hasRice && iranianRice && (
            <div className="absolute bottom-3 left-3 z-10">
              <span className="px-2 py-1 rounded-full bg-amber-500/80 backdrop-blur-md text-white text-[10px] font-medium">
                برنج ایرانی
              </span>
            </div>
          )}

          {/* Price on image */}
          <div className="absolute bottom-3 right-3 z-10">
            <div className="px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
              <motion.span
                key={displayPrice}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-amber-400 font-bold text-sm price-number"
              >
                {formatPrice(displayPrice)}
              </motion.span>
              <span className="text-white/50 text-[10px] mr-1">ریال</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="text-white font-bold text-base sm:text-lg mb-1.5 line-clamp-1">
            {item.name}
          </h3>
          <p className="text-white/40 text-sm line-clamp-1 mb-4">
            {item.description}
          </p>

          {/* View details button */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {item.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-white/5 text-white/30 text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-white/40 group-hover:text-amber-400 transition-colors text-sm">
              <span className="hidden sm:inline">جزئیات</span>
              <Eye size={16} />
            </div>
          </div>
        </div>

        {/* Shine overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
      </motion.div>
    </motion.div>
  );
}
