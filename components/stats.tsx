"use client"

import { motion } from "framer-motion"

const stats = [
  {
    number: "2+",
    label: "Years Experience",
  },
  {
    number: "3+",
    label: "Projects Completed",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "5000+",
    label: "Lines of Code",
  },
]

export function Stats() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-6 bg-white/50 rounded-lg shadow-md"
          >
            <motion.div 
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="text-4xl font-bold md:text-5xl text-black"
            >
              {stat.number}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-sm text-black md:text-base text-center mt-2 font-medium"
            >
              {stat.label}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

