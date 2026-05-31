import { Shield, Zap, RefreshCw } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl glass-strong border border-border/50 shadow-elegant">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" aria-hidden />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" aria-hidden />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-pulse-glow" aria-hidden />

      <div className="relative grid md:grid-cols-2 gap-6 items-center p-6 md:p-10 min-h-[360px]">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            مرحبًا بك في{" "}
            <span className="text-gradient">HN Apps</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md">
            منصة موحدة لتحميل جميع تطبيقاتنا بسهولة وأمان
          </p>

          <div className="flex flex-wrap gap-3">
            <Feature icon={Shield} label="آمن" sub="100% آمن" tint="success" />
            <Feature icon={Zap} label="سريع" sub="تحميل سريع" tint="warning" />
            <Feature icon={RefreshCw} label="محدث" sub="تحديثات مستمرة" tint="info" />
          </div>

          {/* Slider dots */}
          <div className="flex items-center gap-2 pt-2">
            <span className="h-1.5 w-8 rounded-full bg-primary" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src={heroPhone}
            alt="HN Apps phone mockup with floating app icons"
            width={1024}
            height={1024}
            className="w-full max-w-md animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon: Icon,
  label,
  sub,
  tint,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  sub: string;
  tint: "success" | "warning" | "info";
}) {
  const colorMap = {
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    info: "var(--color-info)",
  };
  return (
    <div className="flex items-center gap-3 glass rounded-xl px-3 py-2.5">
      <div
        className="h-9 w-9 rounded-lg grid place-items-center"
        style={{ background: `oklch(from ${colorMap[tint]} l c h / 0.18)` }}
      >
        <Icon className="h-4 w-4" style={{ color: colorMap[tint] }} />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-[10px] text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}
