import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Experience from "@/components/experience"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import GitHubActivity from "@/components/github-activity"
import BlogPosts from "@/components/blog-posts"
import Resume from "@/components/resume"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <About />
      <Projects />
      <TechStack />
       <Experience />
     <Testimonials />
      <GitHubActivity />
       <BlogPosts />
      <Resume />
      <Contact />
    </main>
  )
}
