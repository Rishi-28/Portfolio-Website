"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Download } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"

export function Hero() {
  return (
    <section id="home" className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16 md:py-24">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-6 flex-1"
        >
          <h2 className="text-2xl font-medium text-black">
            Hello, I'm Rishikesh Ramesh,
          </h2>
          <h1 className="text-6xl font-bold sm:text-7xl md:text-8xl text-black">
            Data<br />Scientist
          </h1>
          <div className="space-y-4">
            <AnimatedText 
              text="Crafting clarity from complexity, one model at a time." 
              className="text-xl text-black sm:text-2xl"
              charDelay={0.08}
            />
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="pt-4"
          >
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-2 border-black hover:bg-black/5 transition-colors duration-300 text-lg"
            >
              <motion.a
                // href="/files/Resume_Rishikesh_Ramesh.pdf"
                // download="/files/Resume_Rishikesh_Ramesh.pdf"
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
                href="/files/Resume_Rishikesh_Ramesh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F8B261] text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-[#F8B261]/90 transition-colors inline-block"
            >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            delay: 0.7,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          whileHover={{ scale: 1.02 }}
          className="relative w-full md:w-[450px] h-[450px] rounded-full overflow-hidden flex-shrink-0 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
        >
          <Image
            src="/images/rishikesh.jpg"
            alt="Rishikesh Ramesh"
            fill
            priority
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 450px"
            style={{ objectPosition: 'center 20%' }}
          />
        </motion.div>
      </div>
    </section>
  )
}

