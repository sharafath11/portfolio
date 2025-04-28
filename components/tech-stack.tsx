"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaAws, FaBootstrap, FaDocker } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiRedux, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiPostman, 
  SiFirebase, 
  SiSocketdotio, 
  SiJet,
  SiWebpack,
  SiCloudinary,
  SiAmazon
} from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { GiBrain } from 'react-icons/gi';
import { BsFiletypeJson } from 'react-icons/bs'

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend")

  const technologies = {
    frontend: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, description: "Versatile programming language" },
      { name: "React", icon: <FaReact className="text-blue-600" />, description: "JavaScript library for building interactive UIs" },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, description: "React framework for server-side rendering" },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, description: "Typed superset of JavaScript" },
      { name: "Redux", icon: <SiRedux className="text-purple-600" />, description: "State management library" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, description: "Utility-first CSS framework" },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, description: "Popular CSS framework" },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, description: "JavaScript runtime (V8 engine)" },
      { name: "Express.js", icon: <SiExpress className="text-gray-600" />, description: "Minimal Node.js web framework" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, description: "NoSQL document database" },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, description: "Powerful relational database" },
      { name: "Postman", icon: <SiPostman className="text-orange-600" />, description: "API testing platform" },
      { name: "REST API", icon: <BsFiletypeJson className="text-gray-500" />, description: "Architectural style for APIs" },
      { name: "Socket.io", icon: <SiSocketdotio className="text-black dark:text-white" />, description: "Real-time communication" },
      { name: "JWT", icon: <SiJet className="text-pink-600" />, description: "Token-based authentication" },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" />, description: "Version control system" },
      { name: "Docker", icon: <FaDocker className="text-blue-500" />, description: "Container platform" },
      { name: "AWS", icon: <SiAmazon className="text-yellow-600" />, description: "Cloud computing services" },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, description: "Backend-as-a-Service" },
      { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" />, description: "Image/cloud management" },
      { name: "Webpack", icon: <SiWebpack className="text-blue-400" />, description: "JavaScript module bundler" },
      { name: "DSA", icon: <GiBrain className="text-purple-500" />, description: "Data Structures & Algorithms" },
    ],
  };

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

        <Tabs defaultValue="frontend" className="w-full max-w-5xl mx-auto" onValueChange={setActiveTab}>
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
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {techs.map((tech, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="overflow-hidden border border-muted hover:shadow-lg hover:scale-105 transition-all duration-300 h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl bg-muted rounded-full mb-4">
                          {tech.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{tech.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{tech.description}</p>
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
