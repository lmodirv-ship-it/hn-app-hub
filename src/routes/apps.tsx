import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { AppCard } from "@/components/app/AppCard";
import { apps } from "@/lib/apps-data";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      { title: "جميع التطبيقات — HN Apps" },
      { name: "description", content: "تصفّح جميع تطبيقات HN في مكان واحد." },
    ],
  }),
  component: AppsPage,
});

function AppsPage() {
  return (
    <AppLayout>
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">جميع التطبيقات</h1>
        <p className="text-sm text-muted-foreground">
          تصفّح كامل مجموعة تطبيقات HN واختر ما يناسبك.
        </p>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </AppLayout>
  );
}
