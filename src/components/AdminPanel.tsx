import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Trash2, LogOut, Settings, Eye, EyeOff, Check, Image } from "lucide-react";
import {
  adminCategories,
  adminImageList,
  getAdminImage,
  getStoredImages,
  saveImage,
  removeImage,
} from "../config/images";

const ADMIN_CREDENTIALS = { username: "Ehterami1991", password: "Aa1991Bb" };

interface AdminPanelProps { isOpen: boolean; onClose: () => void; }

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeCategory, setActiveCategory] = useState<keyof typeof adminCategories>("general");
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [, setRefreshKey] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("laziz_admin_session") === "active") setIsLoggedIn(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsLoggedIn(true);
      sessionStorage.setItem("laziz_admin_session", "active");
      setLoginError("");
    } else {
      setLoginError("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("laziz_admin_session");
    setUsername(""); setPassword("");
  };

  const handleFileSelect = (key: string) => { setUploadingKey(key); fileInputRef.current?.click(); };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !uploadingKey) return;
    if (!file.type.startsWith("image/")) { alert("لطفاً فقط فایل تصویری انتخاب کنید"); return; }
    if (file.size > 5 * 1024 * 1024) { alert("حجم فایل نباید بیشتر از ۵ مگابایت باشد"); return; }
    const entry = adminImageList.find(x => x.key === uploadingKey);
    const reader = new FileReader();
    reader.onload = (ev) => {
      saveImage(uploadingKey, ev.target?.result as string);
      setUploadingKey(null);
      setSavedMessage(`تصویر «${entry?.label}» با موفقیت ذخیره شد`);
      setTimeout(() => setSavedMessage(null), 3000);
      setRefreshKey(p => p + 1);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleRemoveImage = (key: string) => {
    const entry = adminImageList.find(x => x.key === key);
    if (confirm(`آیا از حذف تصویر «${entry?.label}» مطمئن هستید؟`)) {
      removeImage(key);
      setSavedMessage(`تصویر «${entry?.label}» به حالت پیش‌فرض بازگشت`);
      setTimeout(() => setSavedMessage(null), 3000);
      setRefreshKey(p => p + 1);
    }
  };

  const storedImages = getStoredImages();
  const categoryKeys = adminCategories[activeCategory].keys;
  const categoryEntries = adminImageList.filter(e => categoryKeys.includes(e.key));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
          <motion.div className="relative z-10 w-full max-w-4xl max-h-[90vh] mx-4 overflow-hidden rounded-3xl bg-[#1a0f2e] border border-white/10 shadow-2xl" initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3"><Settings className="text-amber-400" size={24} /><h2 className="text-xl font-bold text-white">پنل مدیریت تصاویر</h2></div>
              <div className="flex items-center gap-2">
                {isLoggedIn && <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all text-sm"><LogOut size={16} />خروج</button>}
                <button onClick={onClose} className="p-2 rounded-xl bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"><X size={20} /></button>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              {!isLoggedIn ? (
                <form onSubmit={handleLogin} className="max-w-sm mx-auto space-y-4">
                  <div className="text-center mb-8"><div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center"><Settings size={40} className="text-white" /></div><p className="text-white/50 text-sm">برای دسترسی به پنل مدیریت وارد شوید</p></div>
                  <div><label className="block text-white/60 text-sm mb-2">نام کاربری</label><input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-amber-500/50 focus:outline-none" placeholder="نام کاربری" dir="ltr" /></div>
                  <div><label className="block text-white/60 text-sm mb-2">رمز عبور</label><div className="relative"><input type={showPassword?"text":"password"} value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-amber-500/50 focus:outline-none" placeholder="رمز عبور" dir="ltr" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60">{showPassword?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></div>
                  {loginError && <p className="text-red-400 text-sm text-center">{loginError}</p>}
                  <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium hover:from-amber-400 hover:to-amber-500 transition-all">ورود</button>
                </form>
              ) : (
                <div>
                  <AnimatePresence>{savedMessage && <motion.div initial={{ opacity:0,y:-20 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-20 }} className="mb-4 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 flex items-center gap-2"><Check size={18}/>{savedMessage}</motion.div>}</AnimatePresence>
                  {/* Category Tabs */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(Object.entries(adminCategories) as [keyof typeof adminCategories, typeof adminCategories[keyof typeof adminCategories]][]).map(([key, { label }]) => (
                      <button key={key} onClick={() => setActiveCategory(key)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory===key?"bg-amber-500 text-white":"bg-white/5 text-white/60 hover:bg-white/10"}`}>{label}</button>
                    ))}
                  </div>
                  {/* Image Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryEntries.map(entry => {
                      const isCustom = !!storedImages[entry.key];
                      return (
                        <div key={entry.key} className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                          <div className="aspect-[4/3] relative">
                            <img src={getAdminImage(entry.key)} alt={entry.label} className="w-full h-full object-cover" />
                            {isCustom && <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-green-500/80 text-white text-[10px] font-medium">سفارشی</div>}
                          </div>
                          <div className="p-3">
                            <p className="text-white/80 text-sm font-medium mb-2 line-clamp-1">{entry.label}</p>
                            <div className="flex gap-2">
                              <button onClick={() => handleFileSelect(entry.key)} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-all text-xs"><Upload size={14}/>{isCustom?"تغییر":"آپلود"}</button>
                              {isCustom && <button onClick={() => handleRemoveImage(entry.key)} className="flex items-center justify-center p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"><Trash2 size={14}/></button>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-start gap-3"><Image size={20} className="text-amber-400 shrink-0 mt-0.5" /><div className="text-white/50 text-sm leading-relaxed"><p className="mb-2"><strong className="text-white/70">راهنما:</strong> برای تغییر تصویر، روی «آپلود» کلیک کنید. فرمت JPG/PNG/WebP — حداکثر ۵ مگابایت.</p></div></div>
                  </div>
                </div>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
