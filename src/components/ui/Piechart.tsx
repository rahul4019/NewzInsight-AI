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
  { bias: "Positive", value: 20, fill: "#00C853" },
  { bias: "Negative", value: 40, fill: "#E63946" },
  { bias: "Neutral", value: 40, fill: "#FFEB3B" },
];

const chartConfig = {
  bias: {
    label: "bias",
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

export default function Component() {
  return (
    <Card className="rounded-lg shadow-lg overflow-hidden lg:w-1/2">
      <CardHeader className="bg-primary">
        <CardTitle className="text-xl text-gray-200">Sentiment</CardTitle>
        <CardDescription className="text-gray-300">
          Analysis of the sentiment
        </CardDescription>
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
