"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const container = useRef<HTMLDivElement>(null)

  const secondaryProjects = [
    {
      title: "ShoeCommerce: Scale & Integration",
      description: "Full-stack E-commerce engine featuring Razorpay integration, JWT-based security, and advanced wallet/refund workflows. Orchestrated with Docker & Nginx.",
      image: "/E-commerce.png",
      tags: ["Razorpay", "JWT", "Docker", "Nginx", "EJS"],
      liveUrl: "http://stshop.sharafathabi.cloud",
      githubUrl: "https://github.com/sharafath11/ShoeCommerce",
    }
  ]

  const miniProjects = [
    {
      title: "Real-Time Chat",
      stack: "Socket.IO / MERN",
      github: "https://github.com/sharafath11/chatApp"
    },
    {
      title: "Today's Todo",
      stack: "React / TS / MongoDB",
      github: "https://github.com/sharafath11/Today-s-Todo-"
    },
    {
        title: "Netflix Clone",
        stack: "React / TMDB API",
        github: "https://github.com/sharafath11/netflix-clone"
    },
    {
        title: "OLX Clone",
        stack: "React / Firebase",
        github: "https://github.com/sharafath11/olx-clone"
    }
  ]

  useGSAP(() => {
    gsap.from(".secondary-reveal", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
    })
  }, { scope: container })

  return (
    <section id="projects" ref={container} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="secondary-reveal mb-12">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">Secondary Systems</h2>
          <p className="text-3xl font-display font-medium">Production Proof of Concept</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-24">
          {secondaryProjects.map((project, index) => (
            <div key={index} className="secondary-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
              <div className="relative aspect-video overflow-hidden border border-border/50 bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <Card className="border-none bg-transparent shadow-none p-0">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-display font-medium">{project.title}</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-2 py-1 bg-muted/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-0 flex gap-6">
                    <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-sm font-medium hover:underline">
                      Live URL <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-sm font-medium hover:underline">
                      Source Code <Github className="w-3 h-3" />
                    </a>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="secondary-reveal">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono mb-8 pb-4 border-b border-border/50">Engineering Lab (Mini Projects)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {miniProjects.map((mini, i) => (
                    <a key={i} href={mini.github} target="_blank" className="group p-6 bg-muted/20 border border-border/30 hover:bg-muted/40 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest">{mini.stack}</span>
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                        <h4 className="font-medium text-sm">{mini.title}</h4>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}