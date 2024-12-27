import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Insight } from "@/app/insight-provider";
import { FileText } from "lucide-react";

type SummaryProps = Omit<
  Insight,
  "sentiment" | "biasAssessment" | "title" | "articleLink"
>;

export default function Summary({ summary }: SummaryProps) {
  return (
    <Card className="h-full p-6 bg-background dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2 font-bold sm:text-2xl text-primary">
          <FileText className={`w-5 h-5 `} />
          Summary
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Comprehensive overview of the article
        </CardDescription>
      </CardHeader>
      <CardContent className="prose max-w-none p-4 sm:p-6">
        <p className="leading-relaxed text-card-foreground/90">{summary}</p>
      </CardContent>
    </Card>
  );
}
