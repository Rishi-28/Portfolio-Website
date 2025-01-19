"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 mt-12 border-t border-foreground/10"
    >
      <div className="flex justify-center items-center">
        <p className="text-sm text-foreground/70">
          © {currentYear} Rishikesh Ramesh. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

