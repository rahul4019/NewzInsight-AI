import { Clock } from "lucide-react";
import { RecentAnalysisCard } from "../ui/RecentAnalysisCard";

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
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/recent-analyses`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const { recentArticles }: { recentArticles: Analysis[] } = await res.json();

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
  } catch (error) {
    console.error("Error fetching recent articles:", error);
    return (
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-500">
            Failed to load recent analyses. Please try again later.
          </p>
        </div>
      </section>
    );
  }
}
