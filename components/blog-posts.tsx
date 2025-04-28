"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      title: "Full-Stack Development",
      description: "Complete web solutions using React, Next.js, Node.js, and MongoDB with seamless integration.",
      link: "/contact"
    },
    {
      title: "UI/UX Implementation",
      description: "Pixel-perfect implementation of designs with responsive layouts and animations.",
      link: "/contact"
    },
    {
      title: "API & Backend Solutions",
      description: "RESTful/GraphQL APIs with secure authentication and optimized database queries.",
      link: "/contact"
    },
    {
      title: "Technical Project Coordination",
      description: "Codebase management, feature prioritization, and cross-team technical alignment.",
      link: "/contact"
    },
    {
      title: "Performance Optimization",
      description: "Speed enhancements, caching strategies, and bundle size reduction.",
      link: "/contact"
    },
    {
      title: "Web Accessibility Solutions",
      description: "WCAG-compliant components and inclusive design patterns.",
      link: "/contact"
    }
  ]

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Development Solutions</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Comprehensive web development with technical coordination expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border border-muted bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between group" asChild>
                    <Link href="#contact">
                      Contact Us
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}