"use client"
import { useEffect, useRef, useState } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import Experience from "@/components/experience";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import GitHubActivity from "@/components/github-activity";
import BlogPosts from "@/components/blog-posts";
import Resume from "@/components/resume";
import Footer from "@/components/footer";

export default function Home() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  useEffect(() => {
    // Scroll to the footer on initial load
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });

      // Wait for the footer to be reached, then remove it and scroll back to the top
      setTimeout(() => {
        setIsFooterVisible(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1000); // Adjust time (in milliseconds) to wait before hiding the footer and scrolling to top
    }
  }, []);

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

      {/* Render Footer if it's visible */}
      {isFooterVisible && (
        <div ref={footerRef}>
          <Footer />
        </div>
      )}
    </main>
  );
}
