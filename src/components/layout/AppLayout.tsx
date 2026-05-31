import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Send, Youtube } from "lucide-react";
import type { ReactNode } from "react";
import { TopNav } from "./TopNav";
import { Sidebar } from "./Sidebar";

export function AppLayout({
  children,
  rightPanel,
}: {
  children: ReactNode;
  rightPanel?: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <div className="flex-1 mx-auto w-full max-w-[1600px] px-4 md:px-6 py-6">
        <div className="flex gap-6">
          <Sidebar />
          <main className="flex-1 min-w-0 space-y-6">{children}</main>
          {rightPanel && (
            <aside className="hidden xl:block w-80 shrink-0">{rightPanel}</aside>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-12 border-t border-border/50 glass-strong">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="h-7 w-7 rounded-lg bg-gradient-primary grid place-items-center text-white text-[10px] font-bold">
            HN
          </div>
          <span>HN Apps © 2026 جميع الحقوق محفوظة</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
          <Link to="/support" className="hover:text-foreground transition-colors">سياسة الخصوصية</Link>
          <Link to="/support" className="hover:text-foreground transition-colors">الشروط والأحكام</Link>
          <Link to="/support" className="hover:text-foreground transition-colors">اتصل بنا</Link>
        </nav>
        <div className="flex items-center gap-2">
          {[Facebook, Twitter, Send, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="h-8 w-8 grid place-items-center rounded-lg glass hover:bg-surface-elevated transition-colors">
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
