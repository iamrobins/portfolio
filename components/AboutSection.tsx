import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "FastAPI" },
  { skill: "Node.js" },
  { skill: "LangGraph" },
  { skill: "PydanticAI" },
  { skill: "PostgreSQL" },
  { skill: "Docker" },
  { skill: "AWS" },
  { skill: "GenAI System Architecture" },
  { skill: "LangChain" },
  { skill: "OpenAI API" },
  { skill: "Langfuse" },
  { skill: "Kubernetes" },
  { skill: "TypeScript" }
];


const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h2 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h2>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h3 className="text-center text-2xl font-bold mb-6 md:text-left">
              AI systems built for production
            </h3>
            <p>
              I am an AI Backend Engineer with 3+ years of experience building
              production-grade LLM infrastructure, agentic workflows, and
              high-throughput microservices.
            </p>
            <br />
            <p>
              At Publicis Sapient, I design and develop backend systems for Nissan 
              and Infiniti using FastAPI, Node.js, LangGraph, and multi-agent
              orchestration. My work includes a customer-facing agentic chatbot
              that enhanced customer engagement, a hybrid RAG training platform
              that improved sales performance, and asynchronous streaming APIs
              for a 3D vehicle configurator.
            </p>
            <br />
            <p>
              I hold a Master of Science in Business Analytics &amp;
              Consultancy, graduating with Distinction from the University of
              Hertfordshire, UK.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
