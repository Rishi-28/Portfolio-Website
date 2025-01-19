"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Menu, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { href: "#home", label: "Home", key: "home" },
  { href: "#about", label: "About", key: "about" },
  { href: "#skills", label: "Skills", key: "skills" },
  { href: "#experience", label: "Experience", key: "experience" },
  { href: "#projects", label: "Projects", key: "projects" },
]

export function Nav() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const handleMailClick = () => {
    window.location.href = "mailto:r.rishikesh2870@gmail.com"
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 z-50 w-full glass-effect border-b border-primary/20"
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center"
        >
          <a href="#home" onClick={handleScroll} className="text-xl font-bold text-black">
            Rishikesh Ramesh
          </a>
        </motion.div>
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <motion.div
              key={item.key}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={item.href}
                onClick={handleScroll}
                className="text-sm font-medium text-black hover:text-black/80"
              >
                {item.label}
              </a>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleMailClick}
            className="text-black hover:text-black/80"
          >
            <Mail className="h-5 w-5" />
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Rishi-28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black/80"
          >
            <FaGithub className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/rishikesh2809/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black/80"
          >
            <FaLinkedin className="h-5 w-5" />
          </motion.a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="-mr-2">
                <Menu className="h-5 w-5 text-black" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.key}>
                  <a href={item.href} onClick={handleScroll}>{item.label}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </motion.header>
  )
}

