"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "LearnVista",
      description:
        "LearnVista is an AI-powered e-learning platform built with Next.js, TypeScript, and TailwindCSS. It blends modern course management, live streaming, and real-time interactivity with powerful AI tools.\n\nKey Features:\n- Authentication: Google OAuth + JWT\n- Courses & Lessons: Theory, practicals, MCQs with AI-based evaluation & feedback\n- AI Notes: Students see their original notes side-by-side with AI-enhanced notes that improve clarity and add insights\n- Daily Tasks: Personalized AI practice in speaking, writing & listening\n- Progress Tracking: Dashboard, achievements & digital certificates\n- Real-Time: Notifications & live mentor-led sessions via WebRTC + Socket.IO\n- AI Batman: 24/7 personal assistant for doubts, explanations & task guidance\n- PSC Questions: AI-generated practice questions\n- Donations: Stripe support for mentors\n\nTech Stack: Next.js (App Router), TypeScript, TailwindCSS, shadcn/ui, Node.js + Express, MongoDB Atlas, AWS S3, WebSockets, Stripe, Docker + Nginx (AWS EC2).",
      image: "/LV.png",
      tags: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "WebRTC",
        "AWS",
        "Stripe",
        "Docker",
        "Nginx",
        "AI",
      ],
      liveUrl: "https://learnvista.sharafathabi.cloud/",
      githubUrl: "https://github.com/sharafath11/LearnVista",
    },

    {
      title: "E-Commerce Platform",
      description:
        "This e-commerce web application, built using Node.js, MongoDB, EJS, and JWT, offers a seamless shopping experience. Key features include cart management, wishlist functionality, Google authentication, OTP verification, and secure online payments via Razorpay. The platform supports order returns, wallet integration, and review & rating options for products.",
      image: "/E-commerce.png",
      tags: ["Node.js", "MongoDB", "EJS", "JWT", "Razorpay"],
      liveUrl: "https://shop-st.ddns.net/",
      githubUrl: "https://github.com/sharafath11/ShoeCommerce",
    },
    {
      title: "Chat Application",
      description:
        "This chat application is built using the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO for real-time communication. The app allows users to engage in live chat sessions, with features like user authentication, persistent message storage, and responsive design.",
      image: "/chat.png",
      tags: ["MERN Stack", "Socket.IO", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/sharafath11/chatApp",
    },
    {
      title: "Today's Todo",
      description:
        "Today's Todo is a simple to-do application built with Node.js, Express, MongoDB, React, and TypeScript. It allows users to add, edit, delete, and view tasks, with a modern, responsive UI styled using Tailwind CSS. The app supports basic CRUD operations for managing daily tasks efficiently.",
      image: "/todo.png",
      tags: ["Node.js", "Express", "MongoDB", "React", "TypeScript", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/sharafath11/Today-s-Todo-",
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">
            A selection of my recent work, showcasing my skills in full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <Card className="h-full flex flex-col overflow-hidden border border-muted bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
                    style={{
                      transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center mt-auto">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild disabled={!project.liveUrl}>
                    <a
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                      onClick={(e) => {
                        if (!project.liveUrl) e.preventDefault();
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {project.liveUrl ? "Demo" : "Demo coming soon"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/sharafath11?tab=repositories" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}