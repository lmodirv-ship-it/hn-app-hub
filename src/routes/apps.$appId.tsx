import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Star, Download, Share2, Calendar, Package, Smartphone, Tag, ChevronLeft } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { AppCard } from "@/components/app/AppCard";
import { getAppById, apps } from "@/lib/apps-data";

export const Route = createFileRoute("/apps/$appId")({
  head: ({ params }) => {
    const app = getAppById(params.appId);
    const name = app?.name ?? "تطبيق";
    return {
      meta: [
        { title: `${name} — HN Apps` },
        { name: "description", content: app?.longDescription ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const app = getAppById(params.appId);
    if (!app) throw notFound();
    return { app };
  },
  errorComponent: ({ error }) => (
    <div className="p-8 text-center text-sm text-destructive">حدث خطأ: {error.message}</div>
  ),
  notFoundComponent: () => (
    <AppLayout>
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-2">التطبيق غير موجود</h1>
        <Link to="/apps" className="text-primary text-sm">العودة لقائمة التطبيقات</Link>
      </div>
    </AppLayout>
  ),
  component: AppDetailPage,
});

function AppDetailPage() {
  const { app } = Route.useLoaderData();
  const Icon = app.icon;
  const related = apps.filter((a) => a.category === app.category && a.id !== app.id).slice(0, 5);

  return (
    <AppLayout>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">الرئيسية</Link>
        <ChevronLeft className="h-3 w-3" />
        <Link to="/apps" className="hover:text-foreground">التطبيقات</Link>
        <ChevronLeft className="h-3 w-3" />
        <span className="text-foreground">{app.name}</span>
      </div>

      {/* Hero */}
      <section className="glass-strong rounded-3xl p-6 md:p-8 shadow-elegant relative overflow-hidden">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full blur-3xl opacity-30" style={{ background: app.iconGradient }} aria-hidden />
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
          <div
            className="h-28 w-28 rounded-3xl grid place-items-center shadow-glow shrink-0"
            style={{ background: app.iconGradient }}
          >
            <Icon className="h-14 w-14 text-white" />
          </div>
          <div className="flex-1 text-center md:text-start space-y-3">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{app.name}</h1>
              <div className="text-sm text-muted-foreground mt-1">{app.developer}</div>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-bold">{app.rating}</span>
                <span className="text-muted-foreground text-xs">({app.ratingCount})</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Download className="h-4 w-4" />
                <span className="tabular-nums">{app.downloads}</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "oklch(from var(--color-primary) l c h / 0.18)",
                  color: "var(--color-primary)",
                }}
              >
                {app.categoryLabel}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl">{app.longDescription}</p>
            <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
              <button className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-gradient-primary text-white text-sm font-medium shadow-glow hover:scale-[1.02] transition-transform">
                <Download className="h-4 w-4" />
                تحميل APK ({app.size})
              </button>
              <button className="inline-flex items-center gap-2 h-11 px-6 rounded-xl glass hover:bg-surface-elevated text-sm font-medium transition-colors">
                <Share2 className="h-4 w-4" />
                مشاركة
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <InfoTile icon={Tag} label="الإصدار" value={app.version} />
        <InfoTile icon={Package} label="الحجم" value={app.size} />
        <InfoTile icon={Smartphone} label="نظام التشغيل" value={app.androidVersion} />
        <InfoTile icon={Calendar} label="آخر تحديث" value={app.releaseDate} />
      </section>

      {/* Screenshots placeholder */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold">لقطات الشاشة</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[9/16] rounded-2xl glass relative overflow-hidden flex items-center justify-center"
              style={{ background: app.iconGradient, opacity: 0.85 - i * 0.05 }}
            >
              <Icon className="h-12 w-12 text-white/80" />
            </div>
          ))}
        </div>
      </section>

      {/* Changelog + Features */}
      <section className="grid md:grid-cols-2 gap-4">
        <div className="glass rounded-2xl p-5 shadow-card">
          <h2 className="text-lg font-bold mb-3">سجل التحديثات</h2>
          <ul className="space-y-2 text-sm">
            {app.changelog.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-muted-foreground">{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-2xl p-5 shadow-card">
          <h2 className="text-lg font-bold mb-3">المميزات</h2>
          <ul className="space-y-2 text-sm">
            {app.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span
                  className="h-5 w-5 rounded-full grid place-items-center text-xs"
                  style={{
                    background: "oklch(from var(--color-success) l c h / 0.18)",
                    color: "var(--color-success)",
                  }}
                >
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-bold">تطبيقات مشابهة</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {related.map((a) => (
              <AppCard key={a.id} app={a} />
            ))}
          </div>
        </section>
      )}
    </AppLayout>
  );
}

function InfoTile({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="glass rounded-2xl p-4 flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-surface-elevated grid place-items-center">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold truncate">{value}</div>
      </div>
    </div>
  );
}
