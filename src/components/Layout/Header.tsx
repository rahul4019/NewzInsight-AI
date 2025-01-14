import { Menu, NewspaperIcon } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { ModeToggle } from "../theme-toggle";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { name: "All Analyses", link: "/analyses/1" },
  { name: "About", link: "/#about" },
];

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

        <div className="hidden md:flex gap-4">
          <NavLinks />
          <ModeToggle />
        </div>

        <div className="md:hidden flex gap-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger>
              <div className="border rounded-sm border-primary p-1">
                <Menu size={20} className="text-primary" />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left text-primary">
                  NewzInsight
                </SheetTitle>
                <SheetDescription>
                  {links.map((link) => (
                    <SheetClose
                      asChild
                      key={link.name}
                      className="w-full flex mt-4"
                    >
                      <Link href={link.link} className="font-semibold">
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
