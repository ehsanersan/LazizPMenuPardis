import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteImages } from "../config/images";
import { Shield, Check } from "lucide-react";

export default function PackagingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [...siteImages.packaging];

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <section className="py-16 sm:py-24" aria-label="استاندارد بسته‌بندی">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Image Slideshow */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-purple-950/30">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`ظروف بسته‌بندی لذیذ ${currentIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0815]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
              
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex
                        ? "bg-amber-400 w-6"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`نمایش تصویر ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Shield size={14} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-medium">کیفیت و بهداشت</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              استاندارد بسته‌بندی
              <br />
              <span className="bg-gradient-to-l from-purple-300 to-amber-400 bg-clip-text text-transparent">
                در لذیذ
              </span>
            </h2>

            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8">
              برای حفظ سلامت و کیفیت غذا، ما از ظروف پلی‌پروپیلن (PP) برند «تب پلاست» استفاده می‌کنیم. این ظروف با گرید غذایی بالا تولید شده و کاملاً مناسب استفاده در ماکروویو هستند؛ بنابراین بدون هیچ‌گونه دغدغه‌ای از بابت تغییر طعم یا سلامت ظروف، می‌توانید غذای خود را گرم نوش جان کنید.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {[
                "گرید غذایی بالا",
                "مناسب ماکروویو",
                "بدون تغییر طعم",
                "برند تب پلاست",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <Check size={16} className="text-amber-400 shrink-0" />
                  <span className="text-white/60 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
