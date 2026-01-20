"use client"

import Hero from "@/components/hero";
import About from "@/components/about";
import FeaturedProject from "@/components/featured-project";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
