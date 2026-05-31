import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutGrid, Download, Smartphone } from "lucide-react";
import { categories, stats } from "@/lib/apps-data";

export function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden lg:flex flex-col gap-4 w-64 shrink-0">
      {/* Categories */}
      <div className="glass rounded-2xl p-4 shadow-card">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="font-semibold text-sm">التصنيفات</h3>
          <LayoutGrid className="h-4 w-4 text-muted-foreground" />
        </div>
        <nav className="flex flex-col gap-1">
          {categories.map((cat) => {
            const href = cat.id === "all" ? "/apps" : `/categories/${cat.id}`;
            const active = pathname === href;
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to={href}
                className={`group flex items-center gap-3 px-2 py-2.5 rounded-xl text-sm transition-all ${
                  active
                    ? "bg-surface-elevated text-foreground"
                    : "text-muted-foreground hover:bg-surface-elevated/60 hover:text-foreground"
                }`}
              >
                <div
                  className="h-8 w-8 rounded-lg grid place-items-center shrink-0"
                  style={{ background: `oklch(from var(--color-${cat.colorVar}) l c h / 0.15)` }}
                >
                  <Icon className="h-4 w-4" style={{ color: `var(--color-${cat.colorVar})` }} />
                </div>
                <span className="flex-1 font-medium">{cat.name}</span>
                <span className="text-xs text-muted-foreground tabular-nums">{cat.count}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Stats */}
      <div className="glass rounded-2xl p-4 shadow-card">
        <h3 className="font-semibold text-sm mb-4 px-1">إحصائيات</h3>
        <div className="space-y-3">
          <StatRow label="إجمالي التطبيقات" value={stats.totalApps.toString()} accent="primary" />
          <StatRow label="إجمالي التحميلات" value={stats.totalDownloads} accent="success" />
          <StatRow label="التحديثات هذا الشهر" value={stats.monthlyUpdates.toString()} accent="warning" />
          <StatRow label="المستخدمون النشطون" value={stats.activeUsers} accent="info" />
        </div>
      </div>

      {/* CTA */}
      <button className="group relative overflow-hidden rounded-2xl p-4 bg-gradient-primary text-white font-medium text-sm shadow-glow flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]">
        <Smartphone className="h-4 w-4" />
        تحميل تطبيق HN Apps
        <Download className="h-4 w-4" />
      </button>
    </aside>
  );
}

function StatRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: "primary" | "success" | "warning" | "info";
}) {
  const colorMap = {
    primary: "var(--color-primary)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    info: "var(--color-info)",
  };
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground text-xs">{label}</span>
      <span className="font-bold tabular-nums" style={{ color: colorMap[accent] }}>
        {value}
      </span>
    </div>
  );
}
