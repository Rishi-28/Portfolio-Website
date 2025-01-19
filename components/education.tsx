"use client"

import { motion } from "framer-motion"
import { GraduationCap, School } from 'lucide-react'

const educationData = [
  {
    university: "Syracuse University",
    location: "Syracuse, NY",
    degree: "Master of Science",
    major: "Applied Data Science",
    period: "2023 - 2025",
    icon: GraduationCap
  },
  {
    university: "SRM University",
    location: "Chennai, India",
    degree: "Bachelor of Technology",
    major: "Electronics and Communication Engineering",
    period: "2017 - 2021",
    icon: School
  }
]

export function Education() {
  return (
    <section id="education" className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center"
      >
        Education
      </motion.h2>
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-[29px] top-2 bottom-2 w-[2px] bg-border" />
        
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative grid grid-cols-[60px,1fr] gap-6"
            >
              {/* Timeline dot and icon */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  className="w-[60px] h-[60px] rounded-full border-2 border-border bg-background flex items-center justify-center relative z-10"
                >
                  <edu.icon className="w-6 h-6" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className="absolute top-7 left-7 w-3 h-3 rounded-full bg-primary"
                />
              </div>

              {/* Content */}
              <div className="bg-card rounded-lg border p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{edu.university}</h3>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                    <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.major}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

