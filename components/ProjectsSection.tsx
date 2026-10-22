import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "MockMeisterAI",
    year: "2026",
    summary:
      "A real-time system design interview platform combining natural voice conversation, collaborative diagramming, and evidence-grounded feedback.",
    details: [
      {
        label: "Problem",
        text: "System design practice often separates the interview conversation, whiteboard, and feedback into disconnected tools.",
      },
      {
        label: "Built",
        text: "A React and Node.js application using OpenAI Realtime over WebRTC, an Excalidraw canvas, and a browser-rendered 3D interviewer.",
      },
      {
        label: "Engineering proof",
        text: "Five technical challenges, natural voice interruption, drawing-aware follow-ups, validated transcript citations, server-only credentials, ephemeral sessions, Docker, and Fly.io.",
      },
    ],
    image: "/mockmeisterai.png",
    github: "https://github.com/iamrobins/MockMeisterAI",
    link: "https://mockmeisterai.iamrobin.dev",
  },
  {
    name: "MapInsight.ai",
    year: "2024",
    summary:
      "An AI review-insight layer for Google Maps that helped people understand a place without reading hundreds of individual reviews.",
    details: [
      {
        label: "Problem",
        text: "Choosing a place meant manually scanning long, repetitive review lists to find consistent positives and negatives.",
      },
      {
        label: "Built",
        text: "Combined Google Maps place data with GPT to turn customer reviews into concise sentiment themes alongside the map.",
      },
      {
        label: "Context",
        text: "Built independently in 2024, while AI-generated review summaries in Google Maps were still an emerging feature.",
      },
    ],
    image: "/mapinsight.png",
    github: "https://github.com/iamrobins/MapInsight",
    link: "https://mapinsight.vercel.app",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} aria-label={`Open ${project.name} live project`}>
                      <Image
                        src={project.image}
                        alt={`${project.name} project`}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                      {project.year}
                    </p>
                    <h1 className="mb-4 text-4xl font-bold">{project.name}</h1>
                    <p className="mb-5 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.summary}
                    </p>
                    <dl className="mb-5 space-y-3 text-neutral-600 dark:text-neutral-400">
                      {project.details.map((detail) => (
                        <div key={detail.label}>
                          <dt className="font-semibold text-neutral-900 dark:text-neutral-100">
                            {detail.label}
                          </dt>
                          <dd>{detail.text}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.name} source code on GitHub`}
                      >
                        <BsGithub
                          size={30}
                          aria-hidden="true"
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name} live project`}
                      >
                        <BsArrowUpRightSquare
                          size={30}
                          aria-hidden="true"
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
