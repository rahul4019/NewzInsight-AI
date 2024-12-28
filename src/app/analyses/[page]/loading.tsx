import { RecentAnalysisCardSkeleton } from "@/components/ui/RecentAnalysisSkeleton";

export default function Loading() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <RecentAnalysisCardSkeleton key={index} />
      ))}
    </div>
  );
}
