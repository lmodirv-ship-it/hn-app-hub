import { Link } from "@tanstack/react-router";
import { Star, Download } from "lucide-react";
import type { App } from "@/lib/apps-data";

export function AppCard({ app }: { app: App }) {
  const Icon = app.icon;
  return (
    <div className="group glass rounded-2xl p-4 card-hover flex flex-col">
      <Link to="/apps/$appId" params={{ appId: app.appId }} className="flex flex-col items-center text-center">
        <div
          className="h-20 w-20 rounded-2xl grid place-items-center shadow-card mb-3 transition-transform group-hover:scale-105"
          style={{ background: app.iconGradient }}
        >
          <Icon className="h-10 w-10 text-white" strokeWidth={2.2} />
        </div>
        <h3 className="font-bold text-base">{app.name}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{app.description}</p>
      </Link>

      <div className="flex items-center justify-between mt-4 text-xs">
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
          <span className="font-semibold tabular-nums">{app.rating}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Download className="h-3.5 w-3.5" />
          <span className="tabular-nums">{app.downloads}</span>
        </div>
      </div>

      <button className="mt-3 w-full h-9 rounded-xl bg-gradient-primary text-white text-sm font-medium shadow-card hover:shadow-glow transition-shadow">
        تحميل
      </button>
    </div>
  );
}
