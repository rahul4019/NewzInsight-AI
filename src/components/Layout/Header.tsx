import { NewspaperIcon } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { ModeToggle } from "../theme-toggle";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <NewspaperIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-primary">
              NewzInsight
            </span>
          </div>
        </Link>
        <div className="flex gap-4">
          <NavLinks />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
