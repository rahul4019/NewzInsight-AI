import { ChevronRight, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "./card";

export function RecentAnalysisCardSkeleton() {
  return (
    <Card className="bg-background p-8 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      <CardContent className="p-2">
        <div className="flex justify-end items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <Skeleton className="flsfd" />
          </span>
        </div>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-1/3" />
        </div>
        <button className="flex items-center text-primary font-medium mt-4">
          <span>View full analysis</span>
          <ChevronRight size={20} className="mt-1" />
        </button>
      </CardContent>
    </Card>
  );
}

export function RecentAnalysisSectionSkeleton() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-primary">Recent Analyses</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <RecentAnalysisCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
