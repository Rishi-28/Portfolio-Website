"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "LawDigestAI",
    period: "October 2024 - December 2024",
    description: [
      "Fine-tuned transformer models (T5, Legal-BERT) to automate legal case summarization and citation classification, achieving a ROUGE-1 score of 0.351, F1-score of 0.693 and 70% accuracy in nuanced legal text analysis.",
      "Executed advanced prompt engineering and optimized preprocessing pipelines for 13,173 legal case records, balancing 24 citation classes into 4 and reducing noise through token filtering, resulting in a 30% improvement in model efficiency.",
      "Implemented a user-friendly interface for real-time summarization and citation classification using Streamlit, enabling seamless legal text analysis and improving operational efficiency by 50%."
    ],
    tags: ["Transformers", "Prompt Engineering", "NLP", "Legal-BERT", "Streamlit"]
  },
  {
    title: "Predict Delays in Metastatic Cancer with LSTM",
    period: "April 2024 - June 2024",
    description: [
      "Leveraged data from Gilead Sciences and Health Verity with 150+ features, corrected outliers in numerical features using mode.",
      "Transformed 70+ time-related features applying melt, followed by linear interpolation and ARIMA for missing value predictions.",
      "Formulated an LSTM model to predict the duration of time for metastatic cancer diagnosis in breast cancer patients, achieving a validation RMSE of 82.09 and a test RMSE of 82.24."
    ],
    tags: ["LSTM", "Time Series", "Healthcare", "Data Preprocessing"]
  },
  {
    title: "Image Classification using Deep Learning (CNN)",
    period: "February 2024 - March 2024",
    description: [
      "Executed methods to find bounding box coordinates (object detection) for over 208,000 images in SPARK Dataset, optimizing label management for training and validation images, minimizing YOLO's loss to 0.04.",
      "Constructed and optimized a CNN model for space object classification, achieving 88% validation accuracy with regularization for robustness, augmenting analytical precision for space monitoring systems."
    ],
    tags: ["CNN", "Image Classification", "Object Detection", "YOLO"]
  },
  {
    title: "Machine Learning for Disease Diagnosis",
    period: "January 2024 - February 2024",
    description: [
      "Created data preprocessing framework using KNNImputer, LabelEncoder, and StandardScaler.",
      "Defined a model evaluation pipeline, achieving an f1_score of 0.87 for disease predictions."
    ],
    tags: ["Machine Learning", "Healthcare", "Preprocessing"]
  }
]

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-12 md:py-16">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center"
      >
        Projects
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-full border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-colors backdrop-blur-sm">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-base text-black/80">{project.period}</p>
              </div>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-black/90">
                {project.description.map((item, i) => (
                  <li key={i} className="text-base text-black/90">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="border-foreground/20">{tag}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

