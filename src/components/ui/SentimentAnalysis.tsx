"use client";

import { Circle, TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Insight } from "@/app/insight-provider";

type SentimentAnalysisProps = Omit<
  Insight,
  "summary" | "biasAssessment" | "title"
>;

export default function SentimentAnalysis({
  sentiment,
}: SentimentAnalysisProps) {
  const chartData = [
    { bias: "Positive", value: sentiment.positive, fill: "#00C853" },
    { bias: "Negative", value: sentiment.negative, fill: "#E63946" },
    { bias: "Neutral", value: sentiment.neutral, fill: "#FFEB3B" },
  ];

  const chartConfig = {
    bias: {
      label: "sentiment",
    },
    positive: {
      label: "Positive",
      color: "#00c853",
    },
    negative: {
      label: "Negative",
      color: "#E63946",
    },
    netural: {
      label: "Neutral",
      color: "#FFEB3B",
    },
  } satisfies ChartConfig;

  return (
    <Card className="rounded-lg p-6 bg-background  dark:bg-gray-800 shadow-lg overflow-hidden lg:w-1/2">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2 font-bold sm:text-2xl text-primary">
          <TrendingUp />
          Sentiment Analysis
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Distribution of bias sentiment in the article content
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto font-semibold  text-sm max-h-[300px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />

            <Pie data={chartData} dataKey="value" label nameKey="bias" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-center gap-8 text-sm">
        <div className="flex items-center gap-2 ">
          <Circle fill="#00C853" className="text-[#00C853]" size={16} />{" "}
          <span>Positive</span>
        </div>
        <div className="flex items-center gap-2 ">
          <Circle fill="#FFEB3B" className="text-[#FFEB3B]" size={16} />{" "}
          <span>Neutral</span>
        </div>
        <div className="flex items-center gap-2 ">
          <Circle fill="#E63946" className="text-[#E63946]" size={16} />{" "}
          <span>Negative</span>
        </div>
      </CardFooter>
    </Card>
  );
}
