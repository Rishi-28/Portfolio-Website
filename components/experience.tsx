"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Consultant – Analytics, CPG",
    company: "Tredence Inc",
    period: "January 2023 - July 2023",
    description: [
      "Designed Power BI Dashboards to analyze trends in historical sales and projected sales for 3+ supermarket chains in United States.",
      "Designed and validated a model selection algorithm to identify the optimal model for all SKUs, improving forecast accuracy by 12%.",
      "Created a Python automation script to capture quarterly revenue and gross profit, reducing data summarizing time by 40%."
    ]
  },
  {
    title: "Analyst - Analytics, CPG",
    company: "Tredence Inc",
    period: "June 2021 - December 2022",
    description: [
      "Applied imputation and anomaly correction techniques to 170+ SKUs containing 100,000+ historical sales records.",
      "Developed Demand Forecasting model using Holtwinter, auto ARIMA and XGBoost in Python for 170+ SKUs.",
      "Achieved 83% accuracy with forecasting model, reducing inventory's OOS instances by 10% and generating over $10,000,000 in additional revenue."
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 py-12 md:py-16">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center"
      >
        Work Experience
      </motion.h2>
      <div className="space-y-8 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="backdrop-blur-sm"
          >
            <div className="p-6 border border-foreground/10 rounded-lg hover:border-foreground/20 transition-colors">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-base text-black/80">{exp.company} | {exp.period}</p>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-black/90">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-lg">{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

