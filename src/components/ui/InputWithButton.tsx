import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";

export default function InputWithButton() {
  return (
    <div className="space-y-2 mt-8 relative w-full max-w-2xl">
      <div className="flex w-full shadow-xl shadow-black/5 border-2 border-primary rounded-lg">
        <Input
          className="placeholder:text-gray-400 placeholder:text-lg focus:outline-none focus:ring-0 focus:border-transparent border px-6 py-7 -me-px flex-1 rounded-e-none shadow-none"
          placeholder="Paste article URL here..."
          type="url"
        />
        <button className="bg-primary inline-flex items-center rounded-e-lg border border-input px-3 text-sm font-medium text-white outline-offset-2 transition-colors hover:bg-primary/80 hover:text-white focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50">
          <Sparkles size={18} className="mr-2" />
          <span>Analyze</span>
        </button>
      </div>
    </div>
  );
}
