import { Insight } from "@/app/insight-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";

type BiasProps = Omit<Insight, "summary" | "sentiment">;

export default function Bias({ biasAssessment }: BiasProps) {
  return (
    <Card className="rounded-lg p-6 bg-background  dark:bg-gray-800 shadow-lg overflow-hidden lg:w-1/2">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2 font-bold sm:text-2xl text-primary">
          <AlertCircle />
          Bias Assessment
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Important information at a glance
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        {biasAssessment.isBiased ? (
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <AlertCircle className="text-red-500 mt-1 shrink-0" size={20} />
              <div>
                <h3 className=" text-red-500 font-semibold text-lg">
                  Biasness
                </h3>
                <p className="text-foreground/80">
                  {biasAssessment.explanation}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-green-500 mt-1 shrink-0" size={20} />
              <div>
                <h3 className="text-green-500 font-semibold text-lg">
                  Solution:
                </h3>
                <p className="text-foreground/80">{biasAssessment.solution}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <CheckCircle className="text-green-500 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-green-400">
                No Significant Bias Detected
              </h3>
              <p className="text-foreground/80">
                The article appears to present a balanced view without
                noticeable bias.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
