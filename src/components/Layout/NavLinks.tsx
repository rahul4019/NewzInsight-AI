"use client";

import { motion } from "framer-motion";

const links = ["Dashboard", "History", "About"];

export function NavLinks() {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {links.map((link) => (
        <motion.a
          key={link}
          href="#"
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {link}
        </motion.a>
      ))}
    </nav>
  );
}
