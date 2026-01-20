"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function Experience() {
  const container = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      title: "MERN Stack Engineer",
      company: "BROTOTYPE",
      period: "2024 — PRESENT",
      description: "Intensive production-focused engineering program. Architected and shipped LearnVista (AI SaaS) and ShoeCommerce from scratch.",
      impact: [
        "Mastered end-to-end system design: Database modeling → Backend architecture → Frontend orchestration.",
        "Implemented real-time features using WebRTC and Socket.IO for low-latency communication.",
        "Optimized production environments with Docker containerization and Nginx reverse proxies."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "FREELANCE",
      period: "2023 — 2024",
      description: "Delivered scalable web solutions for various clients, focusing on secure authentication and payment integrations.",
      impact: [
        "Integrated Razorpay and Stripe for secure financial transactions.",
        "Architected role-based access control (RBAC) systems for administrative dashboards.",
        "Managed end-to-end deployment pipelines on AWS EC2 and S3."
      ]
    }
  ]

  useGSAP(() => {
    gsap.from(".exp-reveal", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      opacity: 0,
      x: -20,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    })
  }, { scope: container })

  return (
    <section id="experience" ref={container} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="exp-reveal mb-16">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">Background</h2>
          <p className="text-3xl font-display font-medium">Trajectory & Impact</p>
        </div>

        <div className="space-y-20 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border/50 hidden md:block" />
          
          {experiences.map((exp, i) => (
            <div key={i} className="exp-reveal relative md:pl-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="hidden md:block absolute left-[-4.5px] top-2 w-2 h-2 rounded-full bg-foreground" />
              
              <div className="lg:col-span-3">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60">{exp.period}</span>
                <h3 className="text-lg font-display font-medium mt-2">{exp.title}</h3>
                <p className="text-sm font-mono text-muted-foreground mb-4">{exp.company}</p>
              </div>

              <div className="lg:col-span-9 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed font-sans max-w-3xl">
                  {exp.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    {exp.impact.map((text, j) => (
                        <div key={j} className="flex gap-4 group">
                            <span className="text-[10px] font-mono text-muted-foreground/30 mt-1 group-hover:text-foreground transition-colors">0{j+1}</span>
                            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
