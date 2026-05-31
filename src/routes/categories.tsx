import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { AppCard } from "@/components/app/AppCard";
import { categories, getAppsByCategory } from "@/lib/apps-data";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "التصنيفات — HN Apps" },
      { name: "description", content: "استعرض التطبيقات حسب التصنيف." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <AppLayout>
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">التصنيفات</h1>
        <p className="text-sm text-muted-foreground">جميع التطبيقات مرتّبة حسب التصنيف.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const Icon = c.icon;
          const href = c.id === "all" ? "/apps" : `/categories/${c.id}`;
          return (
            <Link
              key={c.id}
              to={href}
              className="inline-flex items-center gap-2 h-9 px-3 rounded-xl glass hover:bg-surface-elevated text-sm transition-colors"
            >
              <Icon className="h-4 w-4" style={{ color: `var(--color-${c.colorVar})` }} />
              {c.name}
              <span className="text-xs text-muted-foreground">({c.count})</span>
            </Link>
          );
        })}
      </div>

      {categories
        .filter((c) => c.id !== "all")
        .map((c) => {
          const list = getAppsByCategory(c.id);
          if (list.length === 0) return null;
          const Icon = c.icon;
          return (
            <section key={c.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="h-9 w-9 rounded-xl grid place-items-center"
                  style={{ background: `oklch(from var(--color-${c.colorVar}) l c h / 0.18)` }}
                >
                  <Icon className="h-4 w-4" style={{ color: `var(--color-${c.colorVar})` }} />
                </div>
                <h2 className="text-lg font-bold">{c.name}</h2>
                <span className="text-xs text-muted-foreground">{list.length} تطبيقات</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {list.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            </section>
          );
        })}
    </AppLayout>
  );
}
