import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { UpdatesTable } from "@/components/app/UpdatesTable";

export const Route = createFileRoute("/updates")({
  head: () => ({
    meta: [
      { title: "آخر التحديثات — HN Apps" },
      { name: "description", content: "تابع آخر تحديثات تطبيقات HN." },
    ],
  }),
  component: UpdatesPage,
});

function UpdatesPage() {
  return (
    <AppLayout>
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">آخر التحديثات</h1>
        <p className="text-sm text-muted-foreground">
          جميع التحديثات الأخيرة لتطبيقات HN مرتبة حسب التاريخ.
        </p>
      </header>
      <UpdatesTable />
    </AppLayout>
  );
}
