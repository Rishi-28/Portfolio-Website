"use client"

import { motion } from "framer-motion"
import { SiPython, SiMysql, SiPostgresql, SiSnowflake, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiApachespark, SiTableau } from "react-icons/si"
import { FaDatabase, FaChartBar, FaAws, FaMicrosoft, FaFileExcel, FaBrain, FaNetworkWired, FaChartLine } from "react-icons/fa"

const skills = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "SQL", icon: FaDatabase, color: "#4479A1" },
  { name: "Excel", icon: FaFileExcel, color: "#217346" },
  { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
  { name: "Tableau", icon: SiTableau, color: "#E97627" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Azure", icon: FaMicrosoft, color: "#0089D6" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "PySpark", icon: SiApachespark, color: "#E25A1C" },
  { name: "Machine Learning", icon: FaBrain, color: "#4CAF50" },
  { name: "Deep Learning", icon: FaNetworkWired, color: "#9C27B0" },
  { name: "Statistics", icon: FaChartLine, color: "#2196F3" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

export function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-12 md:py-16">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center"
      >
        Skills & Technologies
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl mx-auto"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 group"
          >
            <skill.icon className="h-16 w-16 mb-3 transition-all duration-300 group-hover:glow" style={{ color: skill.color }} />
            <span className="text-base font-medium text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
      <style jsx>{`
        .glow {
          filter: drop-shadow(0 0 8px currentColor);
        }
      `}</style>
    </section>
  )
}

