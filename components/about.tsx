"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "Redux",
    "REST API",
    "Tailwind CSS",
    "shadcn/ui",
    "Git",
    "Firebase",
    "DSA"
  ];
  

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-muted">
                <Image
                  src="/me.jpeg"
                  alt="John Doe"
                  width={600}
                  height={600}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            </div>

            <p className="text-muted-foreground">
  I'm a passionate MERN Stack developer with over a year of experience building modern web applications. I specialize in creating responsive, user-friendly interfaces and robust backend systems.
</p>

<p className="text-muted-foreground mt-4">
  My journey in web development began in 2022 when I built my first React application. Currently, I am pursuing an internship at Brototype, where I am sharpening my skills by working on real-world projects and delivering high-quality software solutions.
</p>


            <Card className="border border-muted bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Skills</h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {skills.map((skill, index) => (
                    <motion.div key={index} variants={item}>
                      <Badge variant="secondary" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
