"use client";

import { TrendingUp } from "lucide-react";
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
const chartData = [
  { bias: "Positive", value: 40, fill: "#4A90E2" },
  { bias: "Negative", value: 30, fill: "#D0021B" },
  { bias: "Neutral", value: 30, fill: "#F5A623" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  positive: {
    label: "Positive",
    color: "#4A90E2",
  },
  negative: {
    label: "Negative",
    color: "#D0021B",
  },
  netural: {
    label: "Negative",
    color: "#F5A623",
  },
} satisfies ChartConfig;

export default function Component() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Sentiment</CardTitle>
        <CardDescription>Analysis of the sentiment</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="value" label nameKey="bias" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing biasness in parts
        </div>
      </CardFooter>
    </Card>
  );
}
