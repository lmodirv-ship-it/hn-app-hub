import { Link } from "@tanstack/react-router";
import { Star, Download, Share2, ChevronLeft } from "lucide-react";
import { apps, type App } from "@/lib/apps-data";

export function FeaturedSidebarPanel({ app = apps[0] }: { app?: App }) {
  const Icon = app.icon;
  return (
    <div className="space-y-4 sticky top-20">
      <div className="glass rounded-2xl p-5 shadow-card space-y-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">الرئيسية</Link>
          <ChevronLeft className="h-3 w-3" />
          <span className="text-foreground">{app.name}</span>
        </div>

        <div className="flex items-start gap-4">
          <div
            className="h-16 w-16 rounded-2xl grid place-items-center shadow-card shrink-0"
            style={{ background: app.iconGradient }}
          >
            <Icon className="h-8 w-8 text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-lg">{app.name}</h3>
            <div className="text-xs text-muted-foreground tabular-nums">
              {app.version} ({app.size})
            </div>
            <div className="mt-1 inline-flex items-center gap-1 text-xs" style={{ color: "var(--color-success)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              {app.categoryLabel}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs">
          <Star className="h-4 w-4 fill-warning text-warning" />
          <span className="font-bold">{app.rating}</span>
          <span className="text-muted-foreground">({app.ratingCount} تقييم)</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to="/apps/$appId"
            params={{ appId: app.appId }}
            className="inline-flex items-center justify-center gap-2 h-10 rounded-xl bg-gradient-primary text-white text-sm font-medium shadow-card hover:shadow-glow transition-shadow"
          >
            <Download className="h-4 w-4" />
            تحميل APK
          </Link>
          <button className="inline-flex items-center justify-center gap-2 h-10 rounded-xl glass hover:bg-surface-elevated text-sm font-medium transition-colors">
            <Share2 className="h-4 w-4" />
            مشاركة
          </button>
        </div>
      </div>

      <div className="glass rounded-2xl p-5 shadow-card">
        <h4 className="font-semibold text-sm mb-3">الوصف</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{app.longDescription}</p>
      </div>

      <div className="glass rounded-2xl p-5 shadow-card">
        <h4 className="font-semibold text-sm mb-3">مميزات التطبيق</h4>
        <ul className="space-y-2">
          {app.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs">
              <span
                className="h-4 w-4 rounded-full grid place-items-center text-[10px] text-success"
                style={{ background: "oklch(from var(--color-success) l c h / 0.18)" }}
              >
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="glass rounded-2xl p-5 shadow-card">
        <h4 className="font-semibold text-sm mb-3">معلومات إضافية</h4>
        <div className="grid grid-cols-3 gap-3 text-center">
          <InfoCell label="تاريخ التحديث" value={app.releaseDate} />
          <InfoCell label="الإصدار الحالي" value={app.version} />
          <InfoCell label="تاريخ التحديث" value={app.androidVersion} />
        </div>
      </div>
    </div>
  );
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="text-[10px] text-muted-foreground">{label}</div>
      <div className="text-xs font-semibold tabular-nums">{value}</div>
    </div>
  );
}
