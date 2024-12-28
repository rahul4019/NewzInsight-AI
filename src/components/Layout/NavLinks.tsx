"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { name: "All Analyses", link: "/analyses" },
  { name: "About", link: "/#about" },
];

export function NavLinks() {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {links.map((link) => (
        <motion.div
          key={link.name}
          className="text-foreground hover:text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={link.link}> {link.name} </Link>
        </motion.div>
      ))}
    </nav>
  );
}
