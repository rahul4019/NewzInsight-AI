"use client";

import { Clock } from "lucide-react";
import { RecentAnalysisCard } from "../ui/RecentAnalysisCard";

const recentAnalyses = [
  {
    title: "The Impact of AI on Future Jobs",
    source: "techjournal.com",
    date: "2 hours ago",
    sentiment: "neutral",
    bias: "low",
  },
  {
    title: "Global Climate Change Report",
    source: "sciencedaily.com",
    date: "5 hours ago",
    sentiment: "negative",
    bias: "medium",
  },
  {
    title: "New Economic Policy Announcement",
    source: "financenews.com",
    date: "1 day ago",
    sentiment: "positive",
    bias: "high",
  },
];

export function RecentAnalysisSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="h-6 w-6 text-indigo-600" />
          <h2 className="text-3xl font-bold text-gray-900">Recent Analyses</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentAnalyses.map((analysis, index) => (
            <RecentAnalysisCard key={index} analysis={analysis} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
