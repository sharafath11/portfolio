"use client"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] -z-10" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-block rounded-full px-3 py-1 text-sm bg-muted mb-4">
            <span className="text-muted-foreground">MERN Stack Developer</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">SHARAFATH</span>
          </h1>

          <div className="h-[40px] md:h-[60px] lg:h-[80px] overflow-hidden">
            <TypeAnimation
              sequence={[
                "I build web applications",
                1000,
                "I create user experiences",
                1000,
                "I develop MERN stack solutions",
                1000,
                "I solve complex problems",
                1000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground"
            />
          </div>

          <p className="max-w-[700px] text-muted-foreground mx-auto mt-4 text-base md:text-xl">
            Crafting modern web experiences with MongoDB, Express, React, and Node.js
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="#projects">View my work</Link>
            </Button>
          </div>

          <div className="flex justify-center gap-4 mt-8">
  <a href="https://github.com/sharafath11" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon" className="rounded-full">
      <Github className="h-5 w-5" />
      <span className="sr-only">GitHub</span>
    </Button>
  </a>

  <a href="https://www.linkedin.com/in/sharafath-abi/" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon" className="rounded-full">
      <Linkedin className="h-5 w-5" />
      <span className="sr-only">LinkedIn</span>
    </Button>
  </a>

  <a href="https://x.com/__st__________" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon" className="rounded-full">
      <Twitter className="h-5 w-5" />
      <span className="sr-only">Twitter</span>
    </Button>
  </a>
</div>

        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" className="rounded-full" asChild>
          <Link href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </Button>
      </div>
    </section>
  )
}
