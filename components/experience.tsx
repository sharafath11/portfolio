"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Brototype Training Program (2024-2025)",
      period: "2024 - 2025",
      description:
        "Completed an intensive full-stack development training focused on real-world application building. Developed scalable web applications, structured repositories efficiently, and strengthened debugging and maintenance skills.",
        achievements: [
          "Designed and built scalable full-stack applications following best practices",
          "Structured project repositories for better maintainability and scalability",
          "Implemented robust user authentication and authorization systems using JWT",
          "Debugged and resolved complex backend and frontend issues during development",
          "Maintained code quality using Git version control and modular coding practices",
          "Worked on RESTful API development, database schema design, and responsive UI building",
          "Collaborated on GitHub with multiple contributors, ensuring smooth integration of new features",
          "Reviewed and merged pull requests, improving code quality and reducing bugs in the project",
          "Handled GitHub issues and tracked project progress with milestones and tasks",
          "Contributed to open-source projects and private repositories, enhancing team collaboration and project workflows",
          "Maintained consistent branching strategies and merge protocols to ensure high-quality code deployment",
        ],
      skills: [
        "JavaScript", "React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Bootstrap",
        "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Postman", "REST API", "Socket.io", 
        "JWT", "Git", "Firebase", "Cloudinary", "Webpack", "DSA", "EJS"
      ]
    },
    {
      title: "Freelancer - MERN Stack Developer",
      company: "Self-employed",
      period: "2024 - Present",
      description:
        "Developed custom web applications for clients using the MERN stack (MongoDB, Express.js, React, Node.js). Collaborated with clients to deliver high-quality and scalable solutions, focusing on user-friendly interfaces and performance optimization.",
      achievements: [
        "Built and deployed several full-stack applications for clients",
        "Worked closely with clients to understand requirements and deliver tailored solutions",
        "Implemented responsive UI designs and optimized user experience",
        "Ensured data security and authentication using JWT and secure RESTful APIs",
        "Maintained version control and project structure using Git",
        "Provided ongoing support and troubleshooting for deployed applications"
      ],
      skills: [
        "JavaScript", "React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Bootstrap",
        "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Postman", "REST API", "Socket.io", 
        "JWT", "Git", "Firebase", "Cloudinary", "Webpack", "DSA", "EJS"
      ]
    }
  ];
  
  

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
