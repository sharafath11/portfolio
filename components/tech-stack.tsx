"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function TechStack() {
  const container = useRef<HTMLDivElement>(null)

  const stackGroups = [
    {
      title: "Core & Frontend",
      skills: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "GSAP (ScrollTrigger)", "Redux Toolkit"]
    },
    {
      title: "Systems & Backend",
      skills: ["Node.js", "Express.js", "WebRTC signaling", "Socket.IO (WebSockets)", "Redis Caching", "JWT / OAuth"]
    },
    {
      title: "Infra & DevOps",
      skills: ["AWS (EC2, S3, RDS)", "Docker Containerization", "Nginx Reverse Proxy", "GitHub Actions CI/CD", "PostgreSQL / MongoDB"]
    },
    {
        title: "Engineering Practices",
        skills: ["System Architecture", "RBAC Security", "Real-Time Scalability", "RESTful Design", "Performance Auditing"]
    }
  ]

  useGSAP(() => {
    gsap.from(".stack-reveal", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    })
  }, { scope: container })

  return (
    <section id="tech-stack" ref={container} className="py-24 px-6 md:px-12 lg:px-24 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="stack-reveal mb-16">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">Core Competencies</h2>
          <p className="text-3xl font-display font-medium">Technical Specialization</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stackGroups.map((group, i) => (
            <div key={i} className="stack-reveal space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-foreground font-mono pb-2 border-b border-border/50">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill} className="group flex items-center gap-3">
                    <span className="w-1 h-1 bg-muted-foreground/30 group-hover:bg-foreground transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-sans">
                        {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
