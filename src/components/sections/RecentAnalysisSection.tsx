import { Clock } from "lucide-react";
import { RecentAnalysisCard } from "../ui/RecentAnalysisCard";
import { InferSelectModel } from "drizzle-orm";
import { articleAnalysesTable } from "@/db/schema";

export type Analysis = {
  id: string;
  title: string;
  articleLink: string;
  sentiment: {
    positive: number;
    negative: number;
    neutral: number;
  };
  summary: string;
  biasAssessment: {
    isBiased: boolean;
    explanation: string;
    solution: string;
  };
  createdAt: string;
};

export async function RecentAnalysisSection() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/recent-analyses`,
    {
      cache: "no-cache",
    },
  );

  const {
    recentArticles,
  }: { recentArticles: InferSelectModel<typeof articleAnalysesTable>[] } =
    await data.json();

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Recent Analyses</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((analysis) => (
            <RecentAnalysisCard key={analysis.id} analysis={analysis} />
          ))}
        </div>
      </div>
    </section>
  );
}
