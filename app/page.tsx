import type { Metadata } from "next"
import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"

export const metadata: Metadata = {
  title: "Robin Singh | AI Backend Engineer",
  description:
    "AI Backend Engineer building production-grade LLM infrastructure, agentic workflows, and high-throughput microservices.",
  icons: { icon: "/favicon.ico" },
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
