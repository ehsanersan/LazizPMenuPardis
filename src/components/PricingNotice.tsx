import { motion } from "framer-motion";
import { FileText, Info } from "lucide-react";

export default function PricingNotice() {
  return (
    <section id="pricing" className="py-16 sm:py-20" aria-label="شرایط قیمت‌گذاری">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-10">
            شرایط قیمت‌گذاری
          </h2>

          <div className="space-y-4">
            {/* Rice notice */}
            <div className="relative p-6 rounded-3xl bg-white/[0.04] backdrop-blur-lg border border-white/[0.08] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-amber-500/30 to-transparent" />
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <span className="text-2xl">🍚</span>
                </div>
                <div>
                  <p className="text-white/80 text-base leading-relaxed">
                    قیمت‌ها با برنج هندی می‌باشد و در صورت درخواست، امکان سرو با برنج ایرانی با پرداخت تفاوت{" "}
                    <span className="text-amber-400 font-bold">۵۰۰ هزار ریال</span>{" "}
                    نیز می‌باشد.
                  </p>
                  <p className="mt-2 text-white/40 text-sm">
                    * این تفاوت قیمت فقط برای غذاهایی که همراه برنج سرو می‌شوند اعمال می‌گردد.
                  </p>
                </div>
              </div>
            </div>

            {/* VAT notice */}
            <div className="relative p-6 rounded-3xl bg-white/[0.04] backdrop-blur-lg border border-white/[0.08] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-amber-500/30 to-transparent" />
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <FileText size={22} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-white/80 text-base leading-relaxed">
                    با توجه به بخشنامه دولت، به قیمت‌های فوق{" "}
                    <span className="text-amber-400 font-bold">۱۰ درصد</span>{" "}
                    ارزش افزوده اضافه می‌شود.
                  </p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <Info size={16} className="text-white/30 shrink-0" />
              <p className="text-white/30 text-sm leading-relaxed">
                شما می‌توانید با استفاده از کلیدهای تغییر نوع برنج و ارزش افزوده در بالای هر بخش منو، قیمت نهایی را مشاهده نمایید.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
