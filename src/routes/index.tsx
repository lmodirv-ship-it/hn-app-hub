import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Sparkles } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { HeroSection } from "@/components/HeroSection";
import { AppCard } from "@/components/app/AppCard";
import { UpdatesTable } from "@/components/app/UpdatesTable";
import { FeaturedSidebarPanel } from "@/components/app/FeaturedSidebarPanel";
import { apps } from "@/lib/apps-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HN Apps — منصة تطبيقات HN" },
      { name: "description", content: "منصة موحدة لتحميل جميع تطبيقات HN بسهولة وأمان." },
      { property: "og:title", content: "HN Apps — منصة تطبيقات HN" },
      { property: "og:description", content: "منصة موحدة لتحميل جميع تطبيقات HN بسهولة وأمان." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = apps.slice(0, 5);
  return (
    <AppLayout rightPanel={<FeaturedSidebarPanel />}>
      <HeroSection />

      {/* Featured Apps */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <Link to="/apps" className="text-xs text-muted-foreground hover:text-foreground">
            عرض الكل
          </Link>
          <h2 className="flex items-center gap-2 text-lg font-bold">
            تطبيقات مميزة
            <Sparkles className="h-4 w-4 text-warning" />
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {featured.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Latest Updates */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <Link to="/updates" className="text-xs text-muted-foreground hover:text-foreground">
            عرض المزيد
          </Link>
          <h2 className="flex items-center gap-2 text-lg font-bold">
            آخر التحديثات
            <Star className="h-4 w-4 text-primary" />
          </h2>
        </div>
        <UpdatesTable limit={4} />
      </section>
    </AppLayout>
  );
}
