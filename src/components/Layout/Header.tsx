import { NewspaperIcon } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { ModeToggle } from "../theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <NewspaperIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
            NewzInsight
          </span>
        </div>
        <div className="flex gap-4">
          <NavLinks />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
