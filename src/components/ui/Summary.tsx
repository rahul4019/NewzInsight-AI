import { Insight } from "@/app/insight-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Summary(summary: { summary: string }) {
  return (
    <Card className="h-full shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-primary">
        <CardTitle className="text-xl sm:text-2xl text-gray-200">
          Summary
        </CardTitle>
        <CardDescription className="text-gray-300">
          Comprehensive overview of the article
        </CardDescription>
      </CardHeader>
      <CardContent className="prose max-w-none p-4 sm:p-6">
        <p className="text-muted-foreground">{summary.summary}</p>
      </CardContent>
    </Card>
  );
}
