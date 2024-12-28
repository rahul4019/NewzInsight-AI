import { Separator } from "@/components/ui/separator";

export default function AllAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4 pb-8">
          <h1 className="text-3xl font-bold tracking-tight">All Analysis</h1>
          <p className="text-muted-foreground">
            Browse through all the article analyses performed by our AI.
          </p>
          <Separator />
          {children}
        </div>
      </div>
    </main>
  );
}
