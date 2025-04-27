"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      text: "Working with John was an absolute pleasure. His technical expertise and problem-solving skills helped us deliver our product ahead of schedule. I was particularly impressed with his ability to translate complex requirements into elegant solutions.",
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupX",
      image: "/placeholder.svg?height=100&width=100",
      text: "John is one of the most talented developers I've worked with. His deep understanding of the MERN stack allowed us to build a scalable platform that could handle our rapid growth. He's not just a coder, but a true problem solver.",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead at CreativeAgency",
      image: "/placeholder.svg?height=100&width=100",
      text: "I've collaborated with John on multiple projects, and his ability to bring designs to life is exceptional. He has a keen eye for detail and always ensures the final product matches the design vision while maintaining excellent performance.",
    },
    {
      name: "David Kim",
      role: "Founder at SaaS Platform",
      image: "/placeholder.svg?height=100&width=100",
      text: "John played a crucial role in building our MVP. His expertise in the MERN stack and his proactive approach to solving problems made him an invaluable asset to our team. I would not hesitate to work with him again.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">What people say about working with me.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 left-8 text-6xl text-primary/20">
            <Quote />
          </div>

          <div className="relative overflow-hidden h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  zIndex: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="h-full border border-muted bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full justify-between">
                    <p className="text-muted-foreground italic mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
