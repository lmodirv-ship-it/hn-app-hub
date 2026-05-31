import { Link } from "@tanstack/react-router";
import { Download, CheckCircle2 } from "lucide-react";
import { apps } from "@/lib/apps-data";

export function UpdatesTable({ limit }: { limit?: number }) {
  const list = limit ? apps.slice(0, limit) : apps;
  return (
    <div className="glass rounded-2xl overflow-hidden shadow-card">
      <div className="hidden md:grid grid-cols-12 px-5 py-3 text-xs font-medium text-muted-foreground border-b border-border/50 bg-surface/40">
        <div className="col-span-2">تحميل</div>
        <div className="col-span-2">الإصدار / الحجم</div>
        <div className="col-span-5">التطبيق</div>
        <div className="col-span-2">التاريخ</div>
        <div className="col-span-1 text-end">الحالة</div>
      </div>
      <ul className="divide-y divide-border/50">
        {list.map((app) => {
          const Icon = app.icon;
          return (
            <li
              key={app.id}
              className="grid grid-cols-12 items-center gap-3 px-5 py-3.5 hover:bg-surface-elevated/40 transition-colors"
            >
              <div className="col-span-12 md:col-span-2 order-2 md:order-1">
                <Link
                  to="/apps/$appId"
                  params={{ appId: app.appId }}
                  className="inline-flex items-center gap-2 h-9 px-4 rounded-xl bg-gradient-primary text-white text-xs font-medium shadow-card hover:shadow-glow transition-shadow"
                >
                  <Download className="h-3.5 w-3.5" />
                  تحميل
                </Link>
              </div>

              <div className="col-span-6 md:col-span-2 order-3 md:order-2">
                <div className="font-bold text-sm tabular-nums" style={{ color: "var(--color-warning)" }}>
                  {app.version}
                </div>
                <div className="text-[11px] text-muted-foreground">{app.size}</div>
              </div>

              <div className="col-span-12 md:col-span-5 order-1 md:order-3 flex items-center gap-3 min-w-0">
                <div
                  className="h-11 w-11 rounded-xl grid place-items-center shrink-0"
                  style={{ background: app.iconGradient }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm truncate">{app.name}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {app.changelog[0]}
                  </div>
                </div>
              </div>

              <div className="col-span-4 md:col-span-2 order-4 text-xs text-muted-foreground tabular-nums">
                {app.releaseDate}
              </div>

              <div className="col-span-2 md:col-span-1 order-5 flex justify-end">
                <CheckCircle2 className="h-4 w-4 text-success" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
