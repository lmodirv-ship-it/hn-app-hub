import {
  MessageCircle,
  ShoppingCart,
  PlayCircle,
  Car,
  Database,
  Wrench,
  GraduationCap,
  Gamepad2,
  Briefcase,
  LayoutGrid,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export type CategoryId =
  | "all"
  | "comm"
  | "business"
  | "video"
  | "tools"
  | "services"
  | "education"
  | "games";

export interface Category {
  id: CategoryId;
  name: string;
  icon: LucideIcon;
  colorVar: string;
  count: number;
}

export const categories: Category[] = [
  { id: "all", name: "الكل", icon: LayoutGrid, colorVar: "primary", count: 24 },
  { id: "comm", name: "تواصل", icon: MessageCircle, colorVar: "cat-comm", count: 5 },
  { id: "business", name: "تجارة", icon: ShoppingCart, colorVar: "cat-business", count: 4 },
  { id: "video", name: "فيديو", icon: PlayCircle, colorVar: "cat-video", count: 3 },
  { id: "tools", name: "أدوات", icon: Wrench, colorVar: "cat-tools", count: 5 },
  { id: "services", name: "خدمات", icon: Cloud, colorVar: "cat-services", count: 4 },
  { id: "education", name: "تعليم", icon: GraduationCap, colorVar: "cat-education", count: 2 },
  { id: "games", name: "ألعاب", icon: Gamepad2, colorVar: "cat-games", count: 1 },
];

export interface App {
  id: string;
  appId: string;
  name: string;
  packageName: string;
  category: CategoryId;
  categoryLabel: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  iconGradient: string;
  apkUrl: string;
  version: string;
  size: string;
  androidVersion: string;
  downloads: string;
  downloadsRaw: number;
  rating: number;
  ratingCount: string;
  status: "stable" | "beta" | "new";
  releaseDate: string;
  changelog: string[];
  features: string[];
  developer: string;
}

export const apps: App[] = [
  {
    id: "1",
    appId: "hn-chat",
    name: "HN Chat",
    packageName: "com.hn.chat",
    category: "comm",
    categoryLabel: "تواصل",
    description: "تواصل بسهولة وأمان",
    longDescription:
      "تطبيق دردشة سريع وآمن يتيح لك التواصل مع أصدقائك بسهولة ومشاركة الصور والفيديوهات والملفات.",
    icon: MessageCircle,
    iconGradient: "linear-gradient(135deg, oklch(0.65 0.22 258), oklch(0.6 0.22 240))",
    apkUrl: "#",
    version: "1.2.0",
    size: "32 MB",
    androidVersion: "Android 6.0+",
    downloads: "1.2K",
    downloadsRaw: 1200,
    rating: 4.8,
    ratingCount: "1.2K",
    status: "new",
    releaseDate: "2026-05-31",
    changelog: [
      "تحسينات جديدة في الأداء",
      "إصلاح مشاكل الإشعارات",
      "دعم الرسائل الصوتية المحسّن",
    ],
    features: [
      "دردشة فورية وآمنة",
      "مكالمات صوتية ومرئية",
      "مشاركة الصور والملفات",
      "واجهة مستخدم سهلة وبسيطة",
    ],
    developer: "HN Studio",
  },
  {
    id: "2",
    appId: "hn-market",
    name: "HN Market",
    packageName: "com.hn.market",
    category: "business",
    categoryLabel: "تجارة",
    description: "سوق متكامل للتجارة",
    longDescription:
      "منصة تجارة إلكترونية متكاملة لبيع وشراء المنتجات بسهولة مع أنظمة دفع آمنة وتوصيل سريع.",
    icon: ShoppingCart,
    iconGradient: "linear-gradient(135deg, oklch(0.74 0.17 55), oklch(0.68 0.2 35))",
    apkUrl: "#",
    version: "2.1.0",
    size: "28 MB",
    androidVersion: "Android 7.0+",
    downloads: "980",
    downloadsRaw: 980,
    rating: 4.6,
    ratingCount: "980",
    status: "stable",
    releaseDate: "2026-05-30",
    changelog: ["إضافة ميزات جديدة وتحسينات عامة", "تحسين تجربة الدفع"],
    features: ["متجر متكامل", "دفع آمن", "توصيل سريع", "إدارة الطلبات"],
    developer: "HN Studio",
  },
  {
    id: "3",
    appId: "hn-video",
    name: "HN Video",
    packageName: "com.hn.video",
    category: "video",
    categoryLabel: "فيديو",
    description: "مشاهدة الفيديوهات",
    longDescription:
      "منصة بث فيديو متطورة لمشاهدة محتوى عالي الجودة وبث مباشر مع دعم 4K.",
    icon: PlayCircle,
    iconGradient: "linear-gradient(135deg, oklch(0.65 0.24 25), oklch(0.6 0.24 10))",
    apkUrl: "#",
    version: "1.5.0",
    size: "25 MB",
    androidVersion: "Android 6.0+",
    downloads: "1.5K",
    downloadsRaw: 1500,
    rating: 4.7,
    ratingCount: "1.5K",
    status: "stable",
    releaseDate: "2026-05-29",
    changelog: ["دعم صيغ فيديو جديدة", "تحسين جودة البث"],
    features: ["بث عالي الجودة", "دعم 4K", "تحميل للمشاهدة لاحقاً", "قوائم تشغيل"],
    developer: "HN Studio",
  },
  {
    id: "4",
    appId: "hn-car",
    name: "HN Car",
    packageName: "com.hn.car",
    category: "services",
    categoryLabel: "خدمات",
    description: "خدمات السيارات",
    longDescription:
      "تطبيق شامل لخدمات السيارات يشمل الصيانة والقطع وحجز المواعيد مع أفضل الورش.",
    icon: Car,
    iconGradient: "linear-gradient(135deg, oklch(0.7 0.18 152), oklch(0.65 0.2 170))",
    apkUrl: "#",
    version: "1.1.0",
    size: "18 MB",
    androidVersion: "Android 6.0+",
    downloads: "870",
    downloadsRaw: 870,
    rating: 4.5,
    ratingCount: "870",
    status: "stable",
    releaseDate: "2026-05-28",
    changelog: ["تحسين خريطة وواجهة المستخدم", "إضافة ورش جديدة"],
    features: ["حجز مواعيد", "خرائط ذكية", "متجر قطع الغيار", "تتبع الصيانة"],
    developer: "HN Studio",
  },
  {
    id: "5",
    appId: "hn-db",
    name: "HN DB",
    packageName: "com.hn.db",
    category: "tools",
    categoryLabel: "أدوات",
    description: "إدارة قواعد البيانات",
    longDescription:
      "أداة احترافية لإدارة قواعد البيانات السحابية مع دعم SQL وNoSQL وأدوات تحليل متقدمة.",
    icon: Database,
    iconGradient: "linear-gradient(135deg, oklch(0.65 0.22 290), oklch(0.6 0.22 270))",
    apkUrl: "#",
    version: "1.0.5",
    size: "22 MB",
    androidVersion: "Android 8.0+",
    downloads: "650",
    downloadsRaw: 650,
    rating: 4.9,
    ratingCount: "650",
    status: "stable",
    releaseDate: "2026-05-27",
    changelog: ["تحسينات أمنية مهمة", "دعم MongoDB"],
    features: ["دعم SQL و NoSQL", "تشفير البيانات", "نسخ احتياطي تلقائي", "أدوات تحليل"],
    developer: "HN Studio",
  },
  {
    id: "6",
    appId: "hn-cloud",
    name: "HN Cloud",
    packageName: "com.hn.cloud",
    category: "services",
    categoryLabel: "خدمات",
    description: "تخزين سحابي آمن",
    longDescription: "خدمة تخزين سحابي بمساحة كبيرة وأمان عالي مع مزامنة فورية.",
    icon: Cloud,
    iconGradient: "linear-gradient(135deg, oklch(0.72 0.18 220), oklch(0.65 0.2 240))",
    apkUrl: "#",
    version: "1.3.2",
    size: "15 MB",
    androidVersion: "Android 7.0+",
    downloads: "740",
    downloadsRaw: 740,
    rating: 4.6,
    ratingCount: "740",
    status: "stable",
    releaseDate: "2026-05-26",
    changelog: ["مزامنة أسرع", "ميزة المجلدات المشتركة"],
    features: ["مساحة 100GB", "مزامنة فورية", "تشفير E2E", "مشاركة آمنة"],
    developer: "HN Studio",
  },
  {
    id: "7",
    appId: "hn-edu",
    name: "HN Edu",
    packageName: "com.hn.edu",
    category: "education",
    categoryLabel: "تعليم",
    description: "منصة تعليمية متكاملة",
    longDescription: "منصة تعليمية لجميع المراحل مع آلاف الدروس التفاعلية.",
    icon: GraduationCap,
    iconGradient: "linear-gradient(135deg, oklch(0.7 0.2 140), oklch(0.65 0.22 120))",
    apkUrl: "#",
    version: "2.0.0",
    size: "45 MB",
    androidVersion: "Android 6.0+",
    downloads: "520",
    downloadsRaw: 520,
    rating: 4.7,
    ratingCount: "520",
    status: "new",
    releaseDate: "2026-05-25",
    changelog: ["مناهج جديدة", "اختبارات تفاعلية"],
    features: ["آلاف الدروس", "اختبارات تفاعلية", "شهادات معتمدة", "بث مباشر"],
    developer: "HN Studio",
  },
  {
    id: "8",
    appId: "hn-work",
    name: "HN Work",
    packageName: "com.hn.work",
    category: "business",
    categoryLabel: "تجارة",
    description: "إدارة الأعمال",
    longDescription: "أداة شاملة لإدارة المشاريع والمهام والفرق.",
    icon: Briefcase,
    iconGradient: "linear-gradient(135deg, oklch(0.65 0.2 260), oklch(0.6 0.22 240))",
    apkUrl: "#",
    version: "1.4.0",
    size: "30 MB",
    androidVersion: "Android 7.0+",
    downloads: "430",
    downloadsRaw: 430,
    rating: 4.5,
    ratingCount: "430",
    status: "stable",
    releaseDate: "2026-05-24",
    changelog: ["لوحة كانبان جديدة", "تكامل مع التقويم"],
    features: ["إدارة المهام", "فرق العمل", "تقارير ذكية", "تكاملات"],
    developer: "HN Studio",
  },
];

export const stats = {
  totalApps: 24,
  totalDownloads: "12,540",
  monthlyUpdates: 8,
  activeUsers: "3,210",
};

export function getAppById(appId: string): App | undefined {
  return apps.find((a) => a.appId === appId);
}

export function getAppsByCategory(cat: CategoryId): App[] {
  if (cat === "all") return apps;
  return apps.filter((a) => a.category === cat);
}
