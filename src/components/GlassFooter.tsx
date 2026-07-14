import { Phone, MapPin } from "lucide-react";
import { siteImages } from "../config/images";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function GlassFooter() {
  return (
    <footer className="relative border-t border-white/[0.06]" aria-label="فوتر">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={siteImages.logo} 
                alt="لوگو لذیذ"
                className="w-10 h-10 rounded-2xl object-cover shadow-lg shadow-amber-500/20"
              />
              <div>
                <span className="text-white font-bold text-lg block">مجموعه غذایی لذیذ</span>
                <span className="text-white/40 text-xs">طعم اصیل، پذیرایی شایسته</span>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed">
              منوی اختصاصی شرکت قیر پردیس پارس
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white/60 font-bold text-sm mb-4">اطلاعات تماس</h3>
            <div className="space-y-3">
              <a 
                href="tel:0763204" 
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} className="shrink-0 text-amber-400/70" />
                <span className="price-number">0763204</span>
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={16} className="shrink-0 mt-1 text-amber-400/70" />
                <span className="leading-relaxed">
                  بندرعباس - رسالت شمالی - ۱۳ هکتاری - نبش کوچه فرخی - مجموعه غذایی لذیذ
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white/60 font-bold text-sm mb-4">شبکه‌های اجتماعی</h3>
            <a
              href="https://instagram.com/LAZIZ24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
              aria-label="اینستاگرام لذیذ"
            >
              <InstagramIcon />
              <span className="text-sm">@LAZIZ24</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] text-center">
          <p className="text-white/20 text-sm">
            طراحی و توسعه در واحد رسانه لذیذ © تابستان ۱۴۰۵
          </p>
        </div>
      </div>
    </footer>
  );
}
