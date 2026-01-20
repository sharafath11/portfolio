"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Cpu, Globe, Database, ShieldCheck } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedProject() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const sections = gsap.utils.toArray(".project-section")
    
    gsap.from(".project-intro", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: ".project-intro",
            start: "top 80%",
        }
    })

    sections.forEach((section: any) => {
      gsap.from(section.querySelectorAll(".reveal"), {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      })
    })
  }, { scope: container })

  return (
    <section ref={container} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="project-intro mb-20">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-6">
            <span className="w-12 h-px bg-border" />
            Flagship Engineering Project
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">
            LearnVista: AI-Powered <span className="text-muted-foreground italic">SaaS Architecture</span>
          </h2>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Next.js 15", "TypeScript", "Node.js", "WebRTC", "Socket.IO", "Redis", "AWS EC2/S3", "Docker", "Stripe"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-background border border-border/50 text-[10px] uppercase tracking-widest font-mono text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="reveal order-2 lg:order-1">
            <h3 className="text-2xl font-display font-medium mb-6">Scalable Architecture & Real-Time Signals</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              LearnVista isn't just a video platform; it's a complex orchestration of signals and state. 
              Implemented <span className="text-foreground">WebRTC</span> for low-latency live classes, 
              using <span className="text-foreground">Socket.IO</span> for signaling and real-time student-mentor interactions. 
              Production load is managed via <span className="text-foreground">Redis caching</span>, reducing database overhead by 40%.
            </p>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex gap-3">
                    <Cpu className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                        <h4 className="text-sm font-medium">RBAC System</h4>
                        <p className="text-xs text-muted-foreground">Granular permissions for Students, Mentors, and Admins.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Globe className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                        <h4 className="text-sm font-medium">AWS Deployment</h4>
                        <p className="text-xs text-muted-foreground">Orchestrated with Docker & Nginx on EC2 with S3 signed URLs.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="reveal relative aspect-video bg-muted overflow-hidden border border-border/50 order-1 lg:order-2">
            <Image
              src="/LV.png"
              alt="LearnVista Dashboard"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="project-section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal relative aspect-video bg-muted overflow-hidden border border-border/50">
                <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent" />
                <div className="p-8 h-full flex flex-col justify-end">
                    <div className="flex gap-4">
                        <ShieldCheck className="w-8 h-8 opacity-50" />
                        <Database className="w-8 h-8 opacity-50" />
                    </div>
                </div>
            </div>
            <div className="reveal">
                <h3 className="text-2xl font-display font-medium mb-6">Financial Trust & System Quality</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Integrated <span className="text-foreground">Stripe Payments</span> with webhook verification to handle course enrollments and mentor donations. 
                    The system maintains 100% transaction integrity through ACID-compliant database operations and robust error handling.
                </p>
                <div className="flex gap-6">
                    <Button asChild className="rounded-none px-8 py-6">
                        <a href="https://learnvista.sharafathabi.cloud" target="_blank">
                            Live System <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-none px-8 py-6">
                        <a href="https://github.com/sharafath11/LearnVista" target="_blank">
                            View Code <Github className="ml-2 w-4 h-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
