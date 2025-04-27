"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior MERN Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Leading the development of enterprise web applications using the MERN stack. Architecting scalable solutions and mentoring junior developers.",
      achievements: [
        "Reduced application load time by 40% through code optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Led a team of 5 developers to deliver projects on time and within budget",
      ],
      skills: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple web applications for clients in various industries. Collaborated with designers and product managers to deliver high-quality products.",
      achievements: [
        "Built a real-time dashboard that increased client productivity by 25%",
        "Implemented authentication system with multi-factor authentication",
        "Optimized database queries resulting in 30% faster response times",
      ],
      skills: ["React", "Express", "MongoDB", "Redux", "Firebase"],
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Agency",
      period: "2018 - 2019",
      description:
        "Created responsive and interactive user interfaces for client websites and web applications. Worked closely with the design team to implement pixel-perfect designs.",
      achievements: [
        "Developed 15+ responsive websites for various clients",
        "Implemented accessibility improvements across all projects",
        "Created reusable component library reducing development time by 20%",
      ],
      skills: ["React", "JavaScript", "CSS", "HTML", "Webpack"],
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">My professional journey and the companies I've worked with.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-muted"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
              }`}
            >
              <div
                className="hidden md:block absolute top-0 md:top-6 left-0 md:left-auto md:right-auto transform md:translate-x-0 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                style={{
                  [index % 2 === 0 ? "right" : "left"]: "-2px",
                  [index % 2 === 0 ? "left" : "right"]: "auto",
                }}
              ></div>

              <Card className="border border-muted bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <CardTitle>{exp.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <CardDescription>{exp.period}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>

                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
