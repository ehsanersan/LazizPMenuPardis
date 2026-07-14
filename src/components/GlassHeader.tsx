import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteImages } from "../config/images";

export default function GlassHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "منوی صبحانه", href: "#menu", section: "breakfast" },
    { label: "منوی ناهار", href: "#menu", section: "lunch" },
    { label: "منوی شام", href: "#menu", section: "dinner" },
    { label: "شرایط قیمت", href: "#pricing" },
  ];

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent backdrop-blur-none"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src={siteImages.logo} 
                  alt="لوگو لذیذ"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-2xl object-cover shadow-lg shadow-amber-500/20"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base md:text-lg tracking-tight">
                  لذیذ
                </span>
                <span className="text-white/50 text-[10px] md:text-xs hidden sm:block">
                  طعم اصیل، پذیرایی شایسته
                </span>
              </div>
            </div>

            {/* Center - Company */}
            <div className="hidden lg:flex items-center">
              <span className="text-white/60 text-sm px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                شرکت قیر پردیس پارس
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="منوی اصلی">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 lg:px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-xl hover:bg-white/5"
                  aria-label={link.label}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#menu")}
                className="mr-2 px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-medium rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
                aria-label="مشاهده منو"
              >
                مشاهده منو
              </button>
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-white/70 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "بستن منو" : "باز کردن منو"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              className="absolute top-16 right-0 left-0 p-6 flex flex-col gap-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              role="navigation"
              aria-label="منوی موبایل"
            >
              <div className="text-center mb-4">
                <span className="text-white/60 text-sm px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                  شرکت قیر پردیس پارس
                </span>
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-right px-6 py-4 text-white/80 hover:text-white text-lg rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  aria-label={link.label}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#menu")}
                className="w-full mt-2 px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-lg font-medium rounded-2xl shadow-lg"
                aria-label="مشاهده منو"
              >
                مشاهده منو
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
