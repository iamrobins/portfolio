"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">AI Backend Engineer</h1>
          <p className="text-lg mt-4 mb-4 md:text-2xl">
            I design and scale production-grade LLM infrastructure,
            agentic workflows, and high-throughput microservices for
            enterprise AI products.
          </p>
          <p className="mb-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 md:text-base">
            Based in India · Open to relocation to Germany · English C1 · German A1
          </p>
          <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-300 md:text-base">
            Contact me at{" "}
            <a
              href="mailto:itsrobin4@gmail.com"
              className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
            >
              itsrobin4@gmail.com
            </a>
          </p>
          <Link
            to="projects"
            href="#projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          href="#about"
          aria-label="Scroll to the About section"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
