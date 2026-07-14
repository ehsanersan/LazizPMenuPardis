import { useState, useMemo, useRef, useCallback } from "react";
import ScrollProgress from "./components/ScrollProgress";
import GlassHeader from "./components/GlassHeader";
import HeroSection from "./components/HeroSection";
import MealSwitcher from "./components/MealSwitcher";
import PriceControls from "./components/PriceControls";
import MenuGrid from "./components/MenuGrid";
import FoodDetailsModal from "./components/FoodDetailsModal";
import PricingNotice from "./components/PricingNotice";
import PackagingSection from "./components/PackagingSection";
import GlassFooter from "./components/GlassFooter";
import AmbientBackground from "./components/AmbientBackground";
import AdminPanel from "./components/AdminPanel";
import { Settings } from "lucide-react";
import { menuItems } from "./data/menuData";
import type { MealType, MenuItem } from "./data/menuData";

export default function App() {
  const [activeMeal, setActiveMeal] = useState<MealType>("lunch");
  const [iranianRice, setIranianRice] = useState(false);
  const [includeVAT, setIncludeVAT] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [adminOpen, setAdminOpen] = useState(false);
  const menuGridRef = useRef<HTMLDivElement>(null);

  const scrollToGrid = useCallback(() => {
    if (menuGridRef.current) {
      const headerOffset = 140; // Account for sticky header and switcher
      const elementPosition = menuGridRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, []);

  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.meal === activeMeal),
    [activeMeal]
  );

  const counts = useMemo(
    () => ({
      breakfast: menuItems.filter((i) => i.meal === "breakfast").length,
      lunch: menuItems.filter((i) => i.meal === "lunch").length,
      dinner: menuItems.filter((i) => i.meal === "dinner").length,
    }),
    []
  );

  return (
    <div className="relative min-h-screen">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Ambient background */}
      <AmbientBackground activeMeal={activeMeal} />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Header */}
      <GlassHeader />

      {/* Hero */}
      <HeroSection />

      {/* Menu Section */}
      <section id="menu" className="relative z-10 pt-8 pb-16">
        {/* Section Title */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
            برنامه غذایی ۱۴ روزه
          </h2>
          <p className="text-white/40 text-sm sm:text-base max-w-xl mx-auto">
            شامل صبحانه، ناهار و شام
          </p>
        </div>

        {/* Meal Switcher */}
        <MealSwitcher
          activeMeal={activeMeal}
          onMealChange={setActiveMeal}
          counts={counts}
          scrollToGrid={scrollToGrid}
        />

        {/* Price Controls */}
        <div className="mt-6 mb-8">
          <PriceControls
            iranianRice={iranianRice}
            setIranianRice={setIranianRice}
            includeVAT={includeVAT}
            setIncludeVAT={setIncludeVAT}
            activeMeal={activeMeal}
          />
        </div>

        {/* Grid */}
        <div ref={menuGridRef}>
          <MenuGrid
            items={filteredItems}
            iranianRice={iranianRice}
            includeVAT={includeVAT}
            onItemClick={setSelectedItem}
          />
        </div>

        {/* Inline price info banner */}
        {activeMeal === "lunch" && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-500/[0.04] border border-amber-500/10">
              <span className="text-xl shrink-0">🍚</span>
              <p className="text-white/40 text-sm leading-relaxed">
                قیمت‌ها با برنج هندی می‌باشد. جهت مشاهده قیمت با برنج ایرانی از کلید تغییر نوع برنج استفاده کنید.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Pricing Notice */}
      <PricingNotice />

      {/* Packaging */}
      <PackagingSection />

      {/* Footer */}
      <GlassFooter />

      {/* Details Modal */}
      <FoodDetailsModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        globalIranianRice={iranianRice}
        globalIncludeVAT={includeVAT}
      />

      {/* Admin Panel */}
      <AdminPanel isOpen={adminOpen} onClose={() => setAdminOpen(false)} />

      {/* Admin Button */}
      <button
        onClick={() => setAdminOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white/40 hover:text-white hover:bg-white/20 transition-all shadow-lg"
        aria-label="پنل مدیریت"
        title="پنل مدیریت تصاویر"
      >
        <Settings size={20} />
      </button>
    </div>
  );
}
