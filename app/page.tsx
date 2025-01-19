import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Nav />
      <Hero />
      <div className="space-y-12 md:space-y-16 lg:space-y-20">
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </main>
  )
}

