"use client"

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#E6F3FF] to-[#EBF1FF]"
        animate={{
          background: [
            "linear-gradient(to bottom right, #E6F3FF, #EBF1FF)",
            "linear-gradient(to bottom right, #EBF1FF, #E6F3FF)",
            "linear-gradient(to bottom right, #E6F3FF, #EBF1FF)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            background: `radial-gradient(circle, ${['#4299E1', '#667EEA', '#9F7AEA', '#ED64A6'][i % 4]}, transparent 60%)`,
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground

