import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, BookOpen, LifeBuoy } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "الدعم — HN Apps" },
      { name: "description", content: "تواصل مع فريق دعم HN Apps." },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <AppLayout>
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">مركز الدعم</h1>
        <p className="text-sm text-muted-foreground">
          نحن هنا لمساعدتك. اختر الطريقة المناسبة للتواصل.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card icon={Mail} title="البريد الإلكتروني" sub="support@hn-apps.com" />
        <Card icon={MessageCircle} title="الدردشة المباشرة" sub="متاحة من 9 صباحًا حتى 9 مساءً" />
        <Card icon={BookOpen} title="مركز المساعدة" sub="أدلة الاستخدام والأسئلة الشائعة" />
        <Card icon={LifeBuoy} title="بلاغ مشكلة" sub="أرسل بلاغًا حول مشكلة تواجهها" />
      </div>

      <section className="glass rounded-2xl p-6 shadow-card space-y-4">
        <h2 className="text-lg font-bold">أرسل لنا رسالة</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="h-11 rounded-xl bg-input/60 border border-border/50 px-4 text-sm focus:outline-none focus:border-primary/50" placeholder="الاسم" />
          <input className="h-11 rounded-xl bg-input/60 border border-border/50 px-4 text-sm focus:outline-none focus:border-primary/50" placeholder="البريد الإلكتروني" />
          <textarea rows={5} className="md:col-span-2 rounded-xl bg-input/60 border border-border/50 p-4 text-sm focus:outline-none focus:border-primary/50" placeholder="رسالتك..." />
          <button type="button" className="md:col-span-2 h-11 rounded-xl bg-gradient-primary text-white text-sm font-medium shadow-card hover:shadow-glow transition-shadow">
            إرسال
          </button>
        </form>
      </section>
    </AppLayout>
  );
}

function Card({
  icon: Icon,
  title,
  sub,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  sub: string;
}) {
  return (
    <div className="glass rounded-2xl p-5 card-hover flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shrink-0 shadow-card">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
      </div>
    </div>
  );
}
