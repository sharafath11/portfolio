"use client"

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
            <span className="text-sm font-mono uppercase tracking-widest font-medium">SHARAFATH ABIL .dev</span>
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                Built for production • {currentYear}
            </p>
        </div>
        
        <div className="flex gap-8">
            <a href="https://github.com/sharafath11" target="_blank" className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sharafath-abi/" target="_blank" className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:sharafathabi@gmail.com" className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">Email</a>
        </div>

        <div className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">
            Kerala, India • 11.25° N, 75.78° E
        </div>
      </div>
    </footer>
  )
}
