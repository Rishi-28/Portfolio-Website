"use client"

import { motion } from "framer-motion"
import { GraduationCap } from 'lucide-react'

const educationData = [
  {
    period: "2023 - 2025",
    institution: "Syracuse University - School of Information Studies (iSchool)",
    degree: "MS, Applied Data Science",
    icon: GraduationCap
  },
  {
    period: "2017 - 2021",
    institution: "SRM Institute of Science & Technology - College of Engineering & Technology",
    degree: "B.Tech, Electronics & Communication",
    icon: GraduationCap
  }
]

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-12 md:py-16">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-foreground"
      >
        About Me
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-black text-xl mb-12 leading-relaxed"
        >
          With two years of experience in data science, I specialize in transforming raw data into actionable insights. 
          From designing demand forecasting models to building dynamic dashboards, my work bridges the gap between 
          numbers and narratives, driving impactful decisions across industries.
        </motion.p>

        <div className="relative">
          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative grid grid-cols-[8rem,1fr] gap-8 items-start"
              >
                <div className="text-right pt-3">
                  <span className="text-foreground font-medium">{edu.period}</span>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                      className="w-12 h-12 rounded-full border-2 border-foreground/20 flex items-center justify-center relative z-10 backdrop-blur-sm"
                    >
                      <edu.icon className="w-6 h-6 text-foreground" />
                    </motion.div>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-lg font-medium text-foreground">{edu.institution}</h3>
                    <p className="text-foreground/80 mt-1">{edu.degree}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

