"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDownRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } })

    tl.to(".hero-title", {
      opacity: 1,
      y: 0,
      stagger: 0.1,
    })
    .to(".hero-subtitle", {
      opacity: 1,
      y: 0,
    }, "-=0.8")
    .to(".hero-cta", {
      opacity: 1,
      y: 0,
      stagger: 0.1,
    }, "-=0.8")
  }, { scope: container })

  return (
    <section
      ref={container}
      className="relative min-h-[90vh] w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-20"
    >
      <div className="max-w-5xl">
        <div className="space-y-6">
          <h1 className="hero-title opacity-0 translate-y-8 text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.1] tracking-tight">
            I build <span className="text-muted-foreground italic">production-grade</span> web systems — not demos.
          </h1>
          
          <p className="hero-subtitle opacity-0 translate-y-8 max-w-2xl text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            MERN & Next.js engineer specializing in architecting scalable, real-time systems that solve actual business constraints.
          </p>

          <div className="hero-cta opacity-0 translate-y-8 flex flex-col sm:flex-row gap-6 pt-8">
            <Button asChild size="lg" className="rounded-none px-8 py-7 text-lg group">
              <Link href="#projects" className="flex items-center gap-2">
                View Systems
                <ArrowDownRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-none px-8 py-7 text-lg hover:bg-muted/50">
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className="flex flex-col items-end space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50 font-mono">Based in Kerala, India</span>
            <div className="w-px h-24 bg-gradient-to-b from-border to-transparent mr-[2px]" />
        </div>
      </div>
    </section>
  )
}
