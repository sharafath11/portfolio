"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Najil",
      role: "BCA Student",
      image: "/najil.jpeg",
      text: "Sharafath's approach to coding was clear and helped me finish the MERN stack project efficiently. Great to work with!",
    },
    {
      name: "Pranv Shangar",
      role: "Brocamp Reviewer",
      image: "/placeholder.svg?height=100&width=100",
      text: "Review on Sharafath's first project: It's well-organized and clean. A promising developer with great potential!",
      project: "Project 1: MERN Stack E-commerce Platform",
    },
    {
      name: "Subin Chaliyath",
      role: "Brocamp Reviewer",
      image: "/placeholder.svg?height=100&width=100",
      text: "Sharafath’s project showed a strong grasp of the MERN stack. His coding practices were solid and industry-standard.",
      project: "Project 2: E-Learning Platform",
    },
    {
      name: "Muhammed Nihal",
      role: "Freelance Client",
      image: "/placeholder.svg?height=100&width=100",
      text: "Sharafath exceeded expectations on my web development project. His communication and delivery were top-notch.",
      project: "Freelance Project: Custom Web Application Development",
    },
    {
      name: "Siyadh",
      role: "Freelance Client",
      image: "/siyadh.jpeg",
      text: "Sharafath's work on my e-commerce platform was excellent. His understanding of the MERN stack and user requirements was impressive.",
      project: "Freelance Project: E-Commerce Platform Development",
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
