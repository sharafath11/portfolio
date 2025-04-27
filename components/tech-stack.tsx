"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend")

  const technologies = {
    frontend: [
      { name: "React", icon: "⚛️", description: "Component-based UI library" },
      { name: "Next.js", icon: "▲", description: "React framework for production" },
      { name: "TypeScript", icon: "TS", description: "Typed JavaScript" },
      { name: "Redux", icon: "🔄", description: "State management" },
      { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework" },
      { name: "Material UI", icon: "🧩", description: "React component library" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
      { name: "Express", icon: "🚂", description: "Web framework for Node.js" },
      { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
      { name: "GraphQL", icon: "◼️", description: "API query language" },
      { name: "REST API", icon: "🔄", description: "RESTful architecture" },
      { name: "Socket.io", icon: "🔌", description: "Real-time communication" },
    ],
    tools: [
      { name: "Git", icon: "🔄", description: "Version control" },
      { name: "Docker", icon: "🐳", description: "Containerization" },
      { name: "AWS", icon: "☁️", description: "Cloud services" },
      { name: "Firebase", icon: "🔥", description: "Backend as a service" },
      { name: "Jest", icon: "🃏", description: "Testing framework" },
      { name: "Webpack", icon: "📦", description: "Module bundler" },
    ],
  }

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
    <section id="tech-stack" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tech Stack</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">The technologies and tools I use to bring ideas to life.</p>
        </div>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools & DevOps</TabsTrigger>
          </TabsList>

          {Object.entries(technologies).map(([category, techs]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div
                variants={container}
                initial="hidden"
                animate={activeTab === category ? "show" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6"
              >
                {techs.map((tech, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="overflow-hidden border border-muted hover:border-primary/50 transition-all duration-300 h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center text-3xl bg-muted rounded-full mb-4">
                          {tech.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
