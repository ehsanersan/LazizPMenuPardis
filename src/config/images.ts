/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * فایل مرکزی مدیریت تصاویر — مجموعه غذایی لذیذ
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * ★ تنها مرجع مسیر تمام تصاویر پروژه ★
 *
 * برای تغییر هر تصویر کافی است فایل مربوطه را در پوشه public/images
 * با همان نام جایگزین کنید. نیازی به تغییر کد نیست.
 *
 * ساختار پوشه‌ها:
 *   public/images/logo/          لوگو
 *   public/images/hero/          تصویر Hero
 *   public/images/breakfast/     تصاویر صبحانه
 *   public/images/lunch/         تصاویر ناهار
 *   public/images/dinner/        تصاویر شام
 *   public/images/packaging/     تصاویر بسته‌بندی
 *   public/images/general/       تصاویر عمومی / Placeholder
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// مسیرساز — BASE_URL به صورت خودکار از vite.config.ts خوانده می‌شود
// (روی GitHub Pages می‌شود "/LazizPMenuPardis/" و در حالت محلی "/")
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const img = (path: string): string => import.meta.env.BASE_URL + "images/" + path;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// مسیر‌های اصلی تصاویر — همه مسیرها فقط اینجا تعریف می‌شوند
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const siteImages = {
  /** لوگوی لذیذ */
  logo: img("logo/laziz-logo.png"),

  /** تصویر پس‌زمینه Hero */
  hero: img("hero/hero-cover.jpg"),

  /** تصاویر صبحانه */
  breakfast: {
    creamHoney:            img("breakfast/cream-honey.jpg"),
    cheeseTomatoCucumber:  img("breakfast/cheese-tomato-cucumber.jpg"),
    boiledEggTomato:       img("breakfast/boiled-egg-tomato.jpg"),
    sesameHoneyCream:      img("breakfast/sesame-honey-cream.jpg"),
    halvaCheese:           img("breakfast/halva-cheese.jpg"),
  },

  /** تصاویر ناهار */
  lunch: {
    ghormehSabzi:         img("lunch/ghormeh-sabzi.jpg"),
    zereshkPoloChicken:   img("lunch/zereshk-polo-chicken.jpg"),
    loobiaPolo:           img("lunch/loobia-polo.jpg"),
    koobideh:             img("lunch/koobideh.jpg"),
    shirFish:             img("lunch/shir-fish.jpg"),
    gheimeh:              img("lunch/gheimeh.jpg"),
    bandariPolo:          img("lunch/bandari-polo.jpg"),
    mosammaBademjan:      img("lunch/mosamma-bademjan.jpg"),
    adasPolo:             img("lunch/adas-polo.jpg"),
    joojehKabab:          img("lunch/joojeh-kabab.jpg"),
    shrimpRice:           img("lunch/shrimp-rice.jpg"),
  },

  /** تصاویر شام */
  dinner: {
    lasagna:              img("dinner/lasagna.jpg"),
    chickenSteak:         img("dinner/chicken-steak.jpg"),
    macaroni:             img("dinner/macaroni.jpg"),
    koobidehMeal:         img("dinner/koobideh-meal.jpg"),
    chickenPiroshki:      img("dinner/chicken-piroshki.jpg"),
    meatCutlet:           img("dinner/meat-cutlet.jpg"),
    joojehMeal:           img("dinner/joojeh-meal.jpg"),
    chickenVegetables:    img("dinner/chicken-vegetables.jpg"),
  },

  /** تصاویر بسته‌بندی (اسلایدر) */
  packaging: [
    img("packaging/packaging-01.jpg"),
    img("packaging/packaging-02.jpg"),
    img("packaging/packaging-03.jpg"),
    img("packaging/packaging-04.jpg"),
  ] as const,

  /** تصاویر عمومی / Placeholder */
  general: {
    placeholderFood:  img("general/placeholder-food.jpg"),
    placeholderLogo:  img("general/placeholder-logo.png"),
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ابزار مدیریت تصاویر (Admin Panel — ذخیره‌سازی localStorage)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const STORAGE_KEY = "laziz_images";

export function getStoredImages(): Record<string, string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function saveImage(key: string, base64: string): void {
  const stored = getStoredImages();
  stored[key] = base64;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

export function removeImage(key: string): void {
  const stored = getStoredImages();
  delete stored[key];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

/**
 * دریافت تصویر — اول از localStorage (آپلود ادمین)، سپس از مسیر محلی پروژه
 */
export function resolveImage(localPath: string, adminKey?: string): string {
  if (adminKey) {
    const stored = getStoredImages();
    if (stored[adminKey]) return stored[adminKey];
  }
  return localPath;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// برچسب‌ها و دسته‌بندی برای پنل مدیریت
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface AdminImageEntry {
  key: string;          // کلید یکتا
  path: string;         // مسیر فایل در پروژه
  label: string;        // برچسب فارسی
}

export const adminImageList: AdminImageEntry[] = [
  // عمومی
  { key: "logo",             path: siteImages.logo,  label: "لوگوی لذیذ" },
  { key: "hero",             path: siteImages.hero,  label: "تصویر پس‌زمینه Hero" },
  // صبحانه
  { key: "b.creamHoney",           path: siteImages.breakfast.creamHoney,           label: "خامه عسل" },
  { key: "b.cheeseTomatoCucumber", path: siteImages.breakfast.cheeseTomatoCucumber, label: "پنیر و گوجه و خیار" },
  { key: "b.boiledEggTomato",      path: siteImages.breakfast.boiledEggTomato,      label: "تخم‌مرغ آب‌پز و گوجه" },
  { key: "b.sesameHoneyCream",     path: siteImages.breakfast.sesameHoneyCream,     label: "کرم کنجد و عسل" },
  { key: "b.halvaCheese",          path: siteImages.breakfast.halvaCheese,          label: "حلوا شکری و پنیر" },
  // ناهار
  { key: "l.ghormehSabzi",        path: siteImages.lunch.ghormehSabzi,        label: "چلو خورشت قرمه‌سبزی" },
  { key: "l.zereshkPoloChicken",  path: siteImages.lunch.zereshkPoloChicken,  label: "زرشک‌پلو با مرغ" },
  { key: "l.loobiaPolo",          path: siteImages.lunch.loobiaPolo,          label: "لوبیاپلو" },
  { key: "l.koobideh",            path: siteImages.lunch.koobideh,            label: "چلوکباب کوبیده" },
  { key: "l.shirFish",            path: siteImages.lunch.shirFish,            label: "چلو ماهی شیر" },
  { key: "l.gheimeh",             path: siteImages.lunch.gheimeh,             label: "چلو خورشت قیمه" },
  { key: "l.bandariPolo",         path: siteImages.lunch.bandariPolo,         label: "پلوبندری" },
  { key: "l.mosammaBademjan",     path: siteImages.lunch.mosammaBademjan,     label: "چلو خورشت مسما بادمجان" },
  { key: "l.adasPolo",            path: siteImages.lunch.adasPolo,            label: "عدس‌پلو" },
  { key: "l.joojehKabab",         path: siteImages.lunch.joojehKabab,         label: "چلو جوجه‌کباب" },
  { key: "l.shrimpRice",          path: siteImages.lunch.shrimpRice,          label: "چلو میگو" },
  // شام
  { key: "d.lasagna",             path: siteImages.dinner.lasagna,            label: "لازانیا" },
  { key: "d.chickenSteak",        path: siteImages.dinner.chickenSteak,       label: "خوراک استیک مرغ" },
  { key: "d.macaroni",            path: siteImages.dinner.macaroni,           label: "ماکارونی" },
  { key: "d.koobidehMeal",        path: siteImages.dinner.koobidehMeal,       label: "خوراک کباب کوبیده" },
  { key: "d.chickenPiroshki",     path: siteImages.dinner.chickenPiroshki,    label: "پیراشکی مرغ" },
  { key: "d.meatCutlet",          path: siteImages.dinner.meatCutlet,         label: "خوراک کتلت گوشت" },
  { key: "d.joojehMeal",          path: siteImages.dinner.joojehMeal,         label: "خوراک جوجه‌کباب" },
  { key: "d.chickenVegetables",   path: siteImages.dinner.chickenVegetables,  label: "خوراک مرغ و سبزیجات" },
  // بسته‌بندی
  { key: "p.1", path: siteImages.packaging[0], label: "تصویر بسته‌بندی ۱" },
  { key: "p.2", path: siteImages.packaging[1], label: "تصویر بسته‌بندی ۲" },
  { key: "p.3", path: siteImages.packaging[2], label: "تصویر بسته‌بندی ۳" },
  { key: "p.4", path: siteImages.packaging[3], label: "تصویر بسته‌بندی ۴" },
];

export const adminCategories = {
  general:   { label: "عمومی",     keys: ["logo", "hero"] },
  breakfast: { label: "صبحانه",    keys: adminImageList.filter(e => e.key.startsWith("b.")).map(e => e.key) },
  lunch:     { label: "ناهار",     keys: adminImageList.filter(e => e.key.startsWith("l.")).map(e => e.key) },
  dinner:    { label: "شام",       keys: adminImageList.filter(e => e.key.startsWith("d.")).map(e => e.key) },
  packaging: { label: "بسته‌بندی", keys: adminImageList.filter(e => e.key.startsWith("p.")).map(e => e.key) },
};

/** دریافت entry ادمین با کلید */
export function getAdminEntry(key: string): AdminImageEntry | undefined {
  return adminImageList.find(e => e.key === key);
}

/** دریافت تصویر ادمین (localStorage → فایل محلی) */
export function getAdminImage(key: string): string {
  const entry = getAdminEntry(key);
  if (!entry) return siteImages.general.placeholderFood;
  return resolveImage(entry.path, key);
}
