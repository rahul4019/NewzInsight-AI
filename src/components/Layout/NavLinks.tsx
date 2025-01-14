"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { name: "All Analyses", link: "/analyses/1" },
  { name: "About", link: "/#about" },
];

export function NavLinks() {
  return (
    <nav className="flex p-0 flex-row items-center space-x-6">
      {links.map((link) => (
        <motion.div
          key={link.name}
          className="text-foreground hover:text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={link.link} className="font-semibold">
            {link.name}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
