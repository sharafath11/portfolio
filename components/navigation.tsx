"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useGSAP(() => {
    gsap.from(".nav-item", {
      opacity: 0,
      y: -10,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.5
    })
  }, { scope: navRef })

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Systems", href: "#projects" },
    { name: "Stack", href: "#tech-stack" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border/40" : "py-8 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="nav-item group flex items-center gap-2"
        >
          <span className="text-xl font-mono font-bold tracking-tighter">
            SHARAFATH ABIL<span className="text-muted-foreground/50">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="nav-item text-[13px] uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <div className="nav-item ml-4 pl-4 border-l border-border/50">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-none hover:bg-muted/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-background z-40 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="container flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-display font-medium tracking-tight text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
