import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { siteImages } from "../config/images";
import { Sparkles, ChefHat, Truck } from "lucide-react";

function Glass3DText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -15, y: x * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block mb-6 cursor-default"
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <motion.div
        className="relative"
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          y: [0, -8, 0],
        }}
        transition={{
          rotateX: { duration: 0.3, ease: "easeOut" },
          rotateY: { duration: 0.3, ease: "easeOut" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow behind */}
        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-500/30 via-amber-400/20 to-purple-500/30 scale-150" />
        
        {/* Glass container */}
        <div className="relative px-8 py-4 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/10">
          {/* Top shine line */}
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          {/* Refraction effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-400/10 via-amber-300/10 to-purple-400/10 blur-sm" />
          
          {/* Text with multiple layers for depth */}
          <div className="relative">
            {/* Shadow layer */}
            <span 
              className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl font-black text-black/20 blur-sm"
              style={{ transform: "translateZ(-20px) translateY(4px)" }}
            >
              مجموعه غذایی لذیذ
            </span>
            
            {/* Main text */}
            <span 
              className="relative text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-br from-white via-purple-100 to-amber-200 bg-clip-text text-transparent drop-shadow-lg"
              style={{ transform: "translateZ(20px)" }}
            >
              مجموعه غذایی لذیذ
            </span>
            
            {/* Highlight overlay */}
            <span 
              className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-t from-transparent via-white/20 to-white/40 bg-clip-text text-transparent"
              style={{ transform: "translateZ(30px)" }}
            >
              مجموعه غذایی لذیذ
            </span>
          </div>
          
          {/* Bottom shine */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Corner accents */}
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/30 rounded-tr-lg" />
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/30 rounded-tl-lg" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/30 rounded-br-lg" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/30 rounded-bl-lg" />
        </div>
        
        {/* Floating particles */}
        <motion.div
          className="absolute -top-2 -right-2 w-2 h-2 rounded-full bg-amber-400/60"
          animate={{ y: [-5, 5, -5], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-1.5 h-1.5 rounded-full bg-purple-400/60"
          animate={{ y: [5, -5, 5], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="بخش معرفی">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={siteImages.hero}
          alt="میز غذای ایرانی مدرن"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay with purple tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-black/50 to-[#0d0815]" />
        {/* Purple color overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-amber-900/20" />
        {/* Top gradient for header blend */}
        <div className="absolute top-0 right-0 left-0 h-32 bg-gradient-to-b from-purple-950/60 to-transparent" />
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* 3D Glass Brand Name */}
          <Glass3DText />

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            منوی اختصاصی
            <br />
            <span className="bg-gradient-to-l from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              شرکت قیر پردیس پارس
            </span>
          </h1>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-base md:text-lg text-white/50 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            سه تجربه متفاوت برای آغاز روز، میانه روز و پایان یک روز کاری؛ با مواد اولیه باکیفیت، طبخ حرفه‌ای و طعمی ماندگار.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <button
              onClick={() => scrollTo("#menu")}
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-2xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
              aria-label="مشاهده منو"
            >
              مشاهده منو
            </button>
            <button
              onClick={() => scrollTo("#pricing")}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-lg rounded-2xl hover:bg-white/15 transition-all hover:-translate-y-0.5"
              aria-label="شرایط قیمت‌گذاری"
            >
              شرایط قیمت‌گذاری
            </button>
          </motion.div>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { icon: Sparkles, text: "مواد اولیه باکیفیت" },
            { icon: ChefHat, text: "طبخ روزانه" },
            { icon: Truck, text: "ارسال رایگان و تحویل در محل" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
            >
              <item.icon size={20} className="text-amber-400" />
              <span className="text-white/70 text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 right-0 left-0 h-40 bg-gradient-to-t from-[#0d0815] to-transparent" />
    </section>
  );
}
