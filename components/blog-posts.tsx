"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPosts() {
  const posts = [
    {
      title: "Building Scalable MERN Applications",
      excerpt: "Learn how to architect MERN stack applications that can scale to millions of users.",
      image: "/placeholder.svg?height=300&width=600",
      date: "Mar 15, 2023",
      readTime: "8 min read",
      tags: ["MERN", "Scalability", "Architecture"],
    },
    {
      title: "Advanced React Patterns",
      excerpt: "Explore advanced React patterns that will help you write cleaner, more maintainable code.",
      image: "/placeholder.svg?height=300&width=600",
      date: "Feb 22, 2023",
      readTime: "12 min read",
      tags: ["React", "Patterns", "Best Practices"],
    },
    {
      title: "MongoDB Performance Optimization",
      excerpt: "Tips and tricks to optimize your MongoDB queries and improve application performance.",
      image: "/placeholder.svg?height=300&width=600",
      date: "Jan 10, 2023",
      readTime: "10 min read",
      tags: ["MongoDB", "Performance", "Database"],
    },
  ]

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Articles</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Thoughts, tutorials, and insights about web development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border border-muted bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between group" asChild>
                    <Link href="#">
                      Read Article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="#">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
