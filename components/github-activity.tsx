"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, GitCommit, GitPullRequest, Star } from "lucide-react"

export default function GitHubActivity() {
  // This would typically come from the GitHub API
  const githubStats = {
    repositories: 24,
    stars: 156,
    contributions: 1243,
    pullRequests: 87,
  }

  // Sample contribution data (would come from GitHub API)
  const contributionData = Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 5)),
  )

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <section id="github" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">GitHub Activity</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">My open source contributions and coding activity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Github />, title: "Repositories", value: githubStats.repositories },
            { icon: <Star />, title: "Stars", value: githubStats.stars },
            { icon: <GitCommit />, title: "Contributions", value: githubStats.contributions },
            { icon: <GitPullRequest />, title: "Pull Requests", value: githubStats.pullRequests },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-muted bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value.toLocaleString()}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="border border-muted bg-background/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Contribution Activity</CardTitle>
            <CardDescription>GitHub contributions over the past year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex gap-1"
              >
                {contributionData.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((day, dayIndex) => (
                      <motion.div
                        key={`${weekIndex}-${dayIndex}`}
                        variants={item}
                        className="w-3 h-3 rounded-sm"
                        style={{
                          backgroundColor: day === 0 ? "var(--muted)" : `rgba(124, 58, 237, ${day * 0.2})`,
                        }}
                        title={`${day} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex items-center justify-center mt-6 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-muted"></div>
                <span className="text-xs text-muted-foreground">No contributions</span>
              </div>
              {[1, 2, 3, 4].map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: `rgba(124, 58, 237, ${level * 0.2})` }}
                  ></div>
                  <span className="text-xs text-muted-foreground">
                    {level === 1 ? "1-3" : level === 2 ? "4-6" : level === 3 ? "7-9" : "10+"}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Github className="h-4 w-4" />
              View my GitHub profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
