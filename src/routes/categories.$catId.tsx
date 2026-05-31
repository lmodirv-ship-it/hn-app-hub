import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { AppCard } from "@/components/app/AppCard";
import { categories, getAppsByCategory, type CategoryId } from "@/lib/apps-data";

export const Route = createFileRoute("/categories/$catId")({
  head: ({ params }) => {
    const cat = categories.find((c) => c.id === params.catId);
    const name = cat?.name ?? "تصنيف";
    return {
      meta: [
        { title: `${name} — HN Apps` },
        { name: "description", content: `تطبيقات تصنيف ${name}.` },
      ],
    };
  },
  loader: ({ params }) => {
    const cat = categories.find((c) => c.id === params.catId);
    if (!cat) throw notFound();
    return { cat };
  },
  errorComponent: ({ error }) => (
    <div className="p-8 text-center text-sm text-destructive">حدث خطأ: {error.message}</div>
  ),
  notFoundComponent: () => (
    <AppLayout>
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-2">التصنيف غير موجود</h1>
        <Link to="/categories" className="text-primary text-sm">العودة للتصنيفات</Link>
      </div>
    </AppLayout>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const list = getAppsByCategory(cat.id as CategoryId);
  const Icon = cat.icon;
  return (
    <AppLayout>
      <header className="flex items-center gap-4">
        <div
          className="h-14 w-14 rounded-2xl grid place-items-center"
          style={{ background: `oklch(from var(--color-${cat.colorVar}) l c h / 0.18)` }}
        >
          <Icon className="h-6 w-6" style={{ color: `var(--color-${cat.colorVar})` }} />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{cat.name}</h1>
          <p className="text-sm text-muted-foreground">{list.length} تطبيقات</p>
        </div>
      </header>

      {list.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground text-sm">
          لا توجد تطبيقات في هذا التصنيف بعد.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {list.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </AppLayout>
  );
}
