"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".about-reveal", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    })
  }, { scope: container })

  return (
    <section
      id="about"
      ref={container}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="about-reveal relative group">
          <div className="absolute -inset-4 bg-muted/30 rounded-none -z-10 transition-transform group-hover:scale-[1.02]" />
          <div className="relative h-[500px] w-full overflow-hidden border border-border/50">
            <Image
              src="/me.jpeg"
              alt="Sharafath Abil"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            <span className="w-8 h-px bg-border" />
            Engineering discipline first
          </div>
        </div>

        <div className="space-y-12">
          <div className="about-reveal">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Philosophy
            </h2>
            <p className="text-2xl md:text-3xl font-display font-medium leading-tight">
              I don&apos;t just write code. I architect systems that survive
              production traffic.
            </p>
          </div>

          <div className="about-reveal space-y-6 text-muted-foreground leading-relaxed text-lg font-sans">
            <p>
              My engineering journey is rooted in production discipline. While
              many focus on visual demos, I focus on writing structured, readable
              code and building maintainable, scalable, end-to-end systems that
              hold up under real-world pressure.
            </p>

            <p>
              I believe engineering is about managing constraints. Whether it's
              optimizing a Redis cache layer for performance, orchestrating
              WebRTC signaling for real-time communication, or hardening JWT auth
              flows, I prioritize clarity, correctness, and system quality over
              visual tricks.
            </p>
          </div>

          <div className="about-reveal grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-border/50 pt-12">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-foreground font-mono mb-4">
                Core Focus
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                <li>End-to-End System Design</li>
                <li>Real-Time Communication (WebRTC / WebSockets)</li>
                <li>Monolith & Microservice Trade-offs</li>
                <li>Performance Optimization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-foreground font-mono mb-4">
                Infrastructure
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                <li>AWS (EC2, S3)</li>
                <li>Docker Containerization</li>
                <li>CI/CD Automation</li>
                <li>Nginx & Reverse Proxies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
