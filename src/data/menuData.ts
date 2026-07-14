import { siteImages } from "../config/images";

export type MealType = "breakfast" | "lunch" | "dinner";

export interface MenuItem {
  id: string;
  day: number;
  meal: MealType;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string;
  hasRice: boolean;
  tags: string[];
}

export const mealLabels: Record<MealType, string> = {
  breakfast: "صبحانه",
  lunch: "ناهار",
  dinner: "شام",
};

export const formatPrice = (price: number): string =>
  price.toLocaleString("fa-IR");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// داده‌های منو — تصاویر از siteImages (فایل مرکزی)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const menuItems: MenuItem[] = [
  // ━━━ صبحانه ━━━
  { id:"b1",  day:1,  meal:"breakfast", name:"خامه عسل",               price:1000000, description:"ترکیبی ملایم و دلپذیر از خامه تازه و عسل طبیعی",           fullDescription:"خامه تازه و پرچرب همراه با عسل طبیعی کوهستان، سرو شده با نان سنگک تازه. ترکیبی ساده اما لذیذ برای شروع یک روز پرانرژی.", image: siteImages.breakfast.creamHoney,           hasRice:false, tags:["صبحانه","شیرین"] },
  { id:"b2",  day:2,  meal:"breakfast", name:"پنیر و گوجه و خیار",     price:950000,  description:"صبحانه سنتی ایرانی با مواد تازه و باکیفیت",               fullDescription:"پنیر تبریزی اصل همراه با گوجه‌فرنگی و خیار تازه، سرو شده با سبزی خوردن و نان تازه. یک صبحانه سالم و سبک.", image: siteImages.breakfast.cheeseTomatoCucumber, hasRice:false, tags:["صبحانه","سنتی"] },
  { id:"b3",  day:3,  meal:"breakfast", name:"تخم‌مرغ آب‌پز و گوجه",   price:1000000, description:"تخم‌مرغ کامل آب‌پز با گوجه‌فرنگی تازه",                   fullDescription:"تخم‌مرغ محلی آب‌پز شده با گوجه‌فرنگی تازه و نان سنگک. یک صبحانه پرپروتئین و انرژی‌بخش.", image: siteImages.breakfast.boiledEggTomato,      hasRice:false, tags:["صبحانه","پروتئین‌دار"] },
  { id:"b4",  day:4,  meal:"breakfast", name:"کرم کنجد و عسل",         price:1700000, description:"ارده کنجدی اعلا با عسل طبیعی",                             fullDescription:"ارده کنجد مرغوب ترکیب شده با عسل طبیعی، سرو شده با نان بربری تازه. طعمی غنی و مغذی.", image: siteImages.breakfast.sesameHoneyCream,     hasRice:false, tags:["صبحانه","مغذی","ویژه"] },
  { id:"b5",  day:5,  meal:"breakfast", name:"خامه عسل",               price:1000000, description:"ترکیبی ملایم و دلپذیر از خامه تازه و عسل طبیعی",           fullDescription:"خامه تازه و پرچرب همراه با عسل طبیعی کوهستان، سرو شده با نان سنگک تازه.", image: siteImages.breakfast.creamHoney,           hasRice:false, tags:["صبحانه","شیرین"] },
  { id:"b6",  day:6,  meal:"breakfast", name:"حلوا شکری و پنیر",       price:950000,  description:"حلوا شکری خانگی همراه با پنیر صبحانه",                     fullDescription:"حلوا شکری خانگی با طعمی اصیل همراه با پنیر لیقوان، سرو شده با نان تازه.", image: siteImages.breakfast.halvaCheese,          hasRice:false, tags:["صبحانه","سنتی"] },
  { id:"b7",  day:7,  meal:"breakfast", name:"تخم‌مرغ آب‌پز و گوجه",   price:1000000, description:"تخم‌مرغ کامل آب‌پز با گوجه‌فرنگی تازه",                   fullDescription:"تخم‌مرغ محلی آب‌پز شده با گوجه‌فرنگی تازه و نان سنگک.", image: siteImages.breakfast.boiledEggTomato,      hasRice:false, tags:["صبحانه","پروتئین‌دار"] },
  { id:"b8",  day:8,  meal:"breakfast", name:"خامه عسل",               price:1000000, description:"ترکیبی ملایم و دلپذیر از خامه تازه و عسل طبیعی",           fullDescription:"خامه تازه و پرچرب همراه با عسل طبیعی کوهستان.", image: siteImages.breakfast.creamHoney,           hasRice:false, tags:["صبحانه","شیرین"] },
  { id:"b9",  day:9,  meal:"breakfast", name:"پنیر و گوجه و خیار",     price:950000,  description:"صبحانه سنتی ایرانی با مواد تازه و باکیفیت",               fullDescription:"پنیر تبریزی اصل همراه با گوجه‌فرنگی و خیار تازه.", image: siteImages.breakfast.cheeseTomatoCucumber, hasRice:false, tags:["صبحانه","سنتی"] },
  { id:"b10", day:10, meal:"breakfast", name:"تخم‌مرغ آب‌پز و گوجه",   price:1000000, description:"تخم‌مرغ کامل آب‌پز با گوجه‌فرنگی تازه",                   fullDescription:"تخم‌مرغ محلی آب‌پز شده با گوجه‌فرنگی تازه و نان سنگک.", image: siteImages.breakfast.boiledEggTomato,      hasRice:false, tags:["صبحانه","پروتئین‌دار"] },
  { id:"b11", day:11, meal:"breakfast", name:"کرم کنجد و عسل",         price:1700000, description:"ارده کنجدی اعلا با عسل طبیعی",                             fullDescription:"ارده کنجد مرغوب ترکیب شده با عسل طبیعی.", image: siteImages.breakfast.sesameHoneyCream,     hasRice:false, tags:["صبحانه","مغذی","ویژه"] },
  { id:"b12", day:12, meal:"breakfast", name:"خامه عسل",               price:1000000, description:"ترکیبی ملایم و دلپذیر از خامه تازه و عسل طبیعی",           fullDescription:"خامه تازه و پرچرب همراه با عسل طبیعی کوهستان.", image: siteImages.breakfast.creamHoney,           hasRice:false, tags:["صبحانه","شیرین"] },
  { id:"b13", day:13, meal:"breakfast", name:"حلوا شکری و پنیر",       price:950000,  description:"حلوا شکری خانگی همراه با پنیر صبحانه",                     fullDescription:"حلوا شکری خانگی با طعمی اصیل همراه با پنیر لیقوان.", image: siteImages.breakfast.halvaCheese,          hasRice:false, tags:["صبحانه","سنتی"] },
  { id:"b14", day:14, meal:"breakfast", name:"تخم‌مرغ آب‌پز و گوجه",   price:1000000, description:"تخم‌مرغ کامل آب‌پز با گوجه‌فرنگی تازه",                   fullDescription:"تخم‌مرغ محلی آب‌پز شده با گوجه‌فرنگی تازه و نان سنگک.", image: siteImages.breakfast.boiledEggTomato,      hasRice:false, tags:["صبحانه","پروتئین‌دار"] },

  // ━━━ ناهار ━━━
  { id:"l1",  day:1,  meal:"lunch", name:"چلو خورشت قرمه‌سبزی",      price:4100000, description:"خورشت اصیل ایرانی با سبزی‌های معطر و لوبیا قرمز",   fullDescription:"خورشت قرمه‌سبزی با سبزی‌های تازه سرخ‌شده، لوبیا قرمز، لیمو عمانی و گوشت گوسفندی، سرو شده با برنج زعفرانی.", image: siteImages.lunch.ghormehSabzi,       hasRice:true, tags:["ناهار","سنتی","محبوب"] },
  { id:"l2",  day:2,  meal:"lunch", name:"زرشک‌پلو با مرغ",          price:4350000, description:"مرغ زعفرانی با برنج زرشکی خوش‌عطر",                 fullDescription:"مرغ سرخ‌شده با زعفران اعلا، سرو شده با برنج دمی همراه زرشک سرخ‌شده و پیاز کاراملی.", image: siteImages.lunch.zereshkPoloChicken, hasRice:true, tags:["ناهار","مرغ","مجلسی"] },
  { id:"l3",  day:3,  meal:"lunch", name:"لوبیاپلو",                  price:3950000, description:"پلو لوبیا سبز با گوشت چرخ‌کرده و ادویه معطر",       fullDescription:"برنج خوش‌پخت با لوبیا سبز تازه و گوشت چرخ‌کرده، طبخ شده با رب گوجه و ادویه‌های مخصوص.", image: siteImages.lunch.loobiaPolo,         hasRice:true, tags:["ناهار","پلو"] },
  { id:"l4",  day:4,  meal:"lunch", name:"چلوکباب کوبیده",            price:5100000, description:"کباب کوبیده اصل با برنج زعفرانی",                   fullDescription:"دو سیخ کباب کوبیده از گوشت گوسفندی مرغوب، کبابی شده روی آتش ذغال، سرو شده با برنج زعفرانی و گوجه کبابی.", image: siteImages.lunch.koobideh,           hasRice:true, tags:["ناهار","کباب","ویژه"] },
  { id:"l5",  day:5,  meal:"lunch", name:"چلو ماهی شیر",              price:8050000, description:"فیله ماهی شیر تازه با سبزی‌پلو",                   fullDescription:"فیله ماهی شیر جنوب، سرخ‌شده با ادویه مخصوص، سرو شده با سبزی‌پلو و لیمو تازه.", image: siteImages.lunch.shirFish,           hasRice:true, tags:["ناهار","دریایی","لوکس"] },
  { id:"l6",  day:6,  meal:"lunch", name:"چلو خورشت قیمه",            price:4100000, description:"خورشت قیمه اصیل با لپه و لیمو عمانی",               fullDescription:"خورشت قیمه با گوشت گوسفندی، لپه، لیمو عمانی و سیب‌زمینی سرخ‌شده، سرو شده با برنج زعفرانی.", image: siteImages.lunch.gheimeh,            hasRice:true, tags:["ناهار","خورشت","سنتی"] },
  { id:"l7",  day:7,  meal:"lunch", name:"پلوبندری",                  price:4000000, description:"پلوی تند و معطر جنوبی",                             fullDescription:"پلو بندری با میگو یا مرغ، طبخ شده با ادویه‌های معطر جنوبی.", image: siteImages.lunch.bandariPolo,        hasRice:true, tags:["ناهار","جنوبی","تند"] },
  { id:"l8",  day:8,  meal:"lunch", name:"چلو خورشت مسما بادمجان",    price:4100000, description:"خورشت بادمجان با رب انار و گردو",                   fullDescription:"خورشت مسمای بادمجان با بادمجان سرخ‌شده، رب انار، گردو و گوشت، سرو شده با برنج زعفرانی.", image: siteImages.lunch.mosammaBademjan,    hasRice:true, tags:["ناهار","خورشت"] },
  { id:"l9",  day:9,  meal:"lunch", name:"عدس‌پلو",                   price:4050000, description:"پلو عدس با گوشت چرخ‌کرده و خرما",                   fullDescription:"برنج با عدس، گوشت چرخ‌کرده، کشمش و خرما. غذایی مقوی و خوش‌طعم.", image: siteImages.lunch.adasPolo,           hasRice:true, tags:["ناهار","پلو","مقوی"] },
  { id:"l10", day:10, meal:"lunch", name:"چلو جوجه‌کباب",             price:5150000, description:"جوجه‌کباب زعفرانی با برنج",                         fullDescription:"سینه مرغ مرینیت‌شده با زعفران و لیمو، کبابی شده روی ذغال، سرو شده با برنج زعفرانی و گوجه کبابی.", image: siteImages.lunch.joojehKabab,        hasRice:true, tags:["ناهار","کباب","مرغ"] },
  { id:"l11", day:11, meal:"lunch", name:"چلو میگو",                  price:7950000, description:"میگوی خلیج فارس با برنج زعفرانی",                   fullDescription:"میگوی تازه خلیج فارس، سرخ‌شده با ادویه مخصوص و سرو شده با برنج زعفرانی و سالاد فصل.", image: siteImages.lunch.shrimpRice,         hasRice:true, tags:["ناهار","دریایی","لوکس"] },
  { id:"l12", day:12, meal:"lunch", name:"چلو خورشت قیمه",            price:4100000, description:"خورشت قیمه اصیل با لپه و لیمو عمانی",               fullDescription:"خورشت قیمه با گوشت گوسفندی، لپه، لیمو عمانی و سیب‌زمینی سرخ‌شده.", image: siteImages.lunch.gheimeh,            hasRice:true, tags:["ناهار","خورشت","سنتی"] },
  { id:"l13", day:13, meal:"lunch", name:"چلوکباب کوبیده",            price:5100000, description:"کباب کوبیده اصل با برنج زعفرانی",                   fullDescription:"دو سیخ کباب کوبیده از گوشت گوسفندی مرغوب، کبابی شده روی آتش ذغال.", image: siteImages.lunch.koobideh,           hasRice:true, tags:["ناهار","کباب","ویژه"] },
  { id:"l14", day:14, meal:"lunch", name:"چلو جوجه‌کباب",             price:5100000, description:"جوجه‌کباب زعفرانی با برنج",                         fullDescription:"سینه مرغ مرینیت‌شده با زعفران و لیمو، کبابی شده روی ذغال.", image: siteImages.lunch.joojehKabab,        hasRice:true, tags:["ناهار","کباب","مرغ"] },

  // ━━━ شام ━━━
  { id:"d1",  day:1,  meal:"dinner", name:"لازانیا",                  price:3950000, description:"لازانیای گوشت با پنیر پیتزا و سس بشامل",       fullDescription:"لازانیا با لایه‌های پاستا، گوشت چرخ‌کرده، سس گوجه خانگی، سس بشامل و پنیر پیتزا.", image: siteImages.dinner.lasagna,           hasRice:false, tags:["شام","فرنگی"] },
  { id:"d2",  day:2,  meal:"dinner", name:"خوراک استیک مرغ",          price:5000000, description:"استیک سینه مرغ با سس مخصوص",                     fullDescription:"استیک سینه مرغ گریل‌شده با سس قارچ و سبزیجات سوته. یک شام سبک و پروتئین‌دار.", image: siteImages.dinner.chickenSteak,      hasRice:false, tags:["شام","مرغ","گریل"] },
  { id:"d3",  day:3,  meal:"dinner", name:"ماکارونی",                 price:4250000, description:"ماکارونی با سس گوشت و پنیر پیتزا",               fullDescription:"ماکارونی با سس بلونز خانگی از گوشت چرخ‌کرده تازه، رب گوجه و ادویه‌های مخصوص.", image: siteImages.dinner.macaroni,          hasRice:false, tags:["شام","فرنگی"] },
  { id:"d4",  day:4,  meal:"dinner", name:"خوراک کباب کوبیده",        price:5100000, description:"کباب کوبیده با نان و سالاد",                     fullDescription:"کباب کوبیده گوشت گوسفندی مرغوب سرو شده با نان تازه، گوجه کبابی و سالاد فصل.", image: siteImages.dinner.koobidehMeal,      hasRice:false, tags:["شام","کباب"] },
  { id:"d5",  day:5,  meal:"dinner", name:"پیراشکی مرغ",              price:3500000, description:"پیراشکی مرغ و سبزیجات با خمیر تازه",             fullDescription:"پیراشکی با مغز مرغ ریش‌ریش‌شده و سبزیجات، پخت شده با خمیر تازه.", image: siteImages.dinner.chickenPiroshki,   hasRice:false, tags:["شام","فست‌فود"] },
  { id:"d6",  day:6,  meal:"dinner", name:"خوراک کتلت گوشت",          price:3650000, description:"کتلت خانگی از گوشت و سیب‌زمینی",                 fullDescription:"کتلت خانگی از مخلوط گوشت چرخ‌کرده و سیب‌زمینی با ادویه مخصوص.", image: siteImages.dinner.meatCutlet,        hasRice:false, tags:["شام","سنتی"] },
  { id:"d7",  day:7,  meal:"dinner", name:"خوراک جوجه‌کباب",          price:5150000, description:"جوجه‌کباب زعفرانی با نان و سالاد",               fullDescription:"سینه مرغ مرینیت‌شده با زعفران و لیمو، کبابی شده و سرو شده با نان و سالاد.", image: siteImages.dinner.joojehMeal,        hasRice:false, tags:["شام","کباب","مرغ"] },
  { id:"d8",  day:8,  meal:"dinner", name:"ماکارونی",                 price:4250000, description:"ماکارونی با سس گوشت و پنیر پیتزا",               fullDescription:"ماکارونی با سس بلونز خانگی و پنیر پیتزا.", image: siteImages.dinner.macaroni,          hasRice:false, tags:["شام","فرنگی"] },
  { id:"d9",  day:9,  meal:"dinner", name:"خوراک مرغ و سبزیجات",      price:5250000, description:"مرغ گریل با سبزیجات فصل",                       fullDescription:"تکه‌های مرغ گریل‌شده همراه با سبزیجات فصل سوته شده. غذایی سبک و سالم.", image: siteImages.dinner.chickenVegetables, hasRice:false, tags:["شام","مرغ","سالم"] },
  { id:"d10", day:10, meal:"dinner", name:"لازانیا",                  price:3950000, description:"لازانیای گوشت با پنیر پیتزا و سس بشامل",       fullDescription:"لازانیا با لایه‌های پاستا، گوشت، سس بشامل و پنیر پیتزا.", image: siteImages.dinner.lasagna,           hasRice:false, tags:["شام","فرنگی"] },
  { id:"d11", day:11, meal:"dinner", name:"خوراک جوجه‌کباب",          price:5150000, description:"جوجه‌کباب زعفرانی با نان و سالاد",               fullDescription:"سینه مرغ مرینیت‌شده با زعفران، کبابی شده و سرو شده با نان و سالاد.", image: siteImages.dinner.joojehMeal,        hasRice:false, tags:["شام","کباب","مرغ"] },
  { id:"d12", day:12, meal:"dinner", name:"خوراک کتلت گوشت",          price:3650000, description:"کتلت خانگی از گوشت و سیب‌زمینی",                 fullDescription:"کتلت خانگی از مخلوط گوشت و سیب‌زمینی با ادویه مخصوص.", image: siteImages.dinner.meatCutlet,        hasRice:false, tags:["شام","سنتی"] },
  { id:"d13", day:13, meal:"dinner", name:"پیراشکی مرغ",              price:3500000, description:"پیراشکی مرغ و سبزیجات با خمیر تازه",             fullDescription:"پیراشکی با مغز مرغ و سبزیجات، پخت شده با خمیر تازه.", image: siteImages.dinner.chickenPiroshki,   hasRice:false, tags:["شام","فست‌فود"] },
  { id:"d14", day:14, meal:"dinner", name:"خوراک کباب کوبیده",        price:5100000, description:"کباب کوبیده با نان و سالاد",                     fullDescription:"کباب کوبیده گوشت گوسفندی سرو شده با نان تازه و سالاد فصل.", image: siteImages.dinner.koobidehMeal,      hasRice:false, tags:["شام","کباب"] },
];
