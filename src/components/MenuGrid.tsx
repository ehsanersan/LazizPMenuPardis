import { AnimatePresence, motion } from "framer-motion";
import FoodCard from "./FoodCard";
import type { MenuItem } from "../data/menuData";

interface MenuGridProps {
  items: MenuItem[];
  iranianRice: boolean;
  includeVAT: boolean;
  onItemClick: (item: MenuItem) => void;
}

function calculateDisplayPrice(item: MenuItem, iranianRice: boolean, includeVAT: boolean): number {
  let price = item.price;
  if (item.hasRice && iranianRice) price += 500000;
  if (includeVAT) price = Math.round(price * 1.1);
  return price;
}

export default function MenuGrid({ items, iranianRice, includeVAT, onItemClick }: MenuGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={items[0]?.meal}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          {items.map((item, i) => (
            <FoodCard
              key={item.id}
              item={item}
              index={i}
              displayPrice={calculateDisplayPrice(item, iranianRice, includeVAT)}
              iranianRice={iranianRice}
              onClick={() => onItemClick(item)}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
