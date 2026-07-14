# راهنمای مدیریت تصاویر — مجموعه غذایی لذیذ

## ساختار پوشه‌ها

```
public/images/
│
├── logo/
│   └── laziz-logo.png              ← لوگوی لذیذ (۲۰۰×۲۰۰ — PNG)
│
├── hero/
│   └── hero-cover.jpg              ← تصویر پس‌زمینه اصلی (۱۶۰۰×۹۰۰ — JPG)
│
├── breakfast/                       ← تصاویر صبحانه
│   ├── cream-honey.jpg             خامه عسل
│   ├── cheese-tomato-cucumber.jpg  پنیر و گوجه و خیار
│   ├── boiled-egg-tomato.jpg       تخم‌مرغ آب‌پز و گوجه
│   ├── sesame-honey-cream.jpg      کرم کنجد و عسل
│   └── halva-cheese.jpg            حلوا شکری و پنیر
│
├── lunch/                           ← تصاویر ناهار
│   ├── ghormeh-sabzi.jpg           چلو خورشت قرمه‌سبزی
│   ├── zereshk-polo-chicken.jpg    زرشک‌پلو با مرغ
│   ├── loobia-polo.jpg             لوبیاپلو
│   ├── koobideh.jpg                چلوکباب کوبیده
│   ├── shir-fish.jpg               چلو ماهی شیر
│   ├── gheimeh.jpg                 چلو خورشت قیمه
│   ├── bandari-polo.jpg            پلوبندری
│   ├── mosamma-bademjan.jpg        چلو خورشت مسما بادمجان
│   ├── adas-polo.jpg               عدس‌پلو
│   ├── joojeh-kabab.jpg            چلو جوجه‌کباب
│   └── shrimp-rice.jpg             چلو میگو
│
├── dinner/                          ← تصاویر شام
│   ├── lasagna.jpg                 لازانیا
│   ├── chicken-steak.jpg           خوراک استیک مرغ
│   ├── macaroni.jpg                ماکارونی
│   ├── koobideh-meal.jpg           خوراک کباب کوبیده
│   ├── chicken-piroshki.jpg        پیراشکی مرغ
│   ├── meat-cutlet.jpg             خوراک کتلت گوشت
│   ├── joojeh-meal.jpg             خوراک جوجه‌کباب
│   └── chicken-vegetables.jpg     خوراک مرغ و سبزیجات
│
├── packaging/                       ← تصاویر بسته‌بندی (اسلایدر)
│   ├── packaging-01.jpg
│   ├── packaging-02.jpg
│   ├── packaging-03.jpg
│   └── packaging-04.jpg
│
└── general/                         ← تصاویر عمومی / Placeholder
    ├── placeholder-food.jpg        Placeholder غذا
    └── placeholder-logo.png        Placeholder لوگو
```

## نحوه تغییر تصاویر

### روش ساده (بدون نیاز به کدنویسی):
1. تصویر جدید را آماده کنید (JPG یا PNG)
2. فایل را **با همان نام** در پوشه مربوطه جایگزین کنید
3. پروژه را Build کنید: `npm run build`
4. تمام! تصویر جدید در سایت نمایش داده می‌شود

### مثال‌ها:
- **تغییر لوگو:** فایل `laziz-logo.png` را در `public/images/logo/` جایگزین کنید
- **تغییر Hero:** فایل `hero-cover.jpg` را در `public/images/hero/` جایگزین کنید
- **تغییر تصویر قرمه‌سبزی:** فایل `ghormeh-sabzi.jpg` را در `public/images/lunch/` جایگزین کنید

### روش آنلاین (پنل مدیریت):
1. روی آیکون ⚙️ در گوشه پایین‌چپ سایت کلیک کنید
2. با نام کاربری و رمز عبور وارد شوید
3. تصویر مورد نظر را آپلود کنید

## مشخصات فنی تصاویر

| نوع تصویر | ابعاد پیشنهادی | فرمت | حداکثر حجم |
|-----------|---------------|------|-----------|
| لوگو | ۲۰۰×۲۰۰ | PNG | ۵۰۰ KB |
| Hero | ۱۶۰۰×۹۰۰ | JPG | ۱ MB |
| غذاها | ۸۰۰×۶۰۰ | JPG | ۵۰۰ KB |
| بسته‌بندی | ۸۰۰×۶۰۰ | JPG | ۵۰۰ KB |

## نکات مهم
- نام فایل‌ها را تغییر ندهید — فقط محتوا را جایگزین کنید
- از تصاویر بدون واترمارک استفاده کنید
- تصاویر غذا باید اشتهابرانگیز و با نورپردازی مناسب باشند

## فایل مرکزی مسیرها
تمام مسیرها در فایل `src/config/images.ts` تعریف شده‌اند.
