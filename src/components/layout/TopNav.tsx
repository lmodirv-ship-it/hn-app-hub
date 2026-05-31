import { Link, useRouterState } from "@tanstack/react-router";
import { Search, Bell } from "lucide-react";

const nav = [
  { to: "/", label: "الرئيسية" },
  { to: "/apps", label: "التطبيقات" },
  { to: "/categories", label: "التصنيفات" },
  { to: "/updates", label: "التحديثات" },
  { to: "/support", label: "الدعم" },
] as const;

export function TopNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 glass-strong border-b border-border/50">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="relative h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <span className="text-white font-bold text-sm tracking-tight">HN</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-bold text-base">HN Apps</div>
            <div className="text-[10px] text-muted-foreground" dir="ltr">All your apps in one place</div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-1 mx-4">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-gradient-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Search */}
        <div className="flex-1 max-w-md mr-auto">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="ابحث عن تطبيق..."
              className="w-full h-10 pr-10 pl-4 rounded-xl bg-input/60 border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-input transition-colors"
            />
          </div>
        </div>

        {/* Right actions */}
        <button className="relative h-10 w-10 grid place-items-center rounded-xl glass hover:bg-surface-elevated transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
        </button>

        <div className="relative h-10 w-10 rounded-full bg-gradient-primary grid place-items-center text-xs font-bold text-white">
          HN
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-success border-2 border-background" />
        </div>
      </div>
    </header>
  );
}
