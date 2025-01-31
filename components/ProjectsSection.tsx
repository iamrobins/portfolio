import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Dogefiles.io",
    description: "Free Secure Cloud Storage for Everyone with 30000 monthly visitors.",
    image: "/dogefiles.png",
    github: "https://github.com/iamrobins/dogefiles-web",
    link: "https://www.dogefiles.io",
  },
  {
    name: "MapInsight.ai",
    description: "Plan you next travel with AI",
    image: "/mapinsight.png",
    github: "https://github.com/iamrobins/MapInsight",
    link: "https://mapinsight.vercel.app",
  },
  {
    name: "DigiKeys",
    description:
      "DigiKey is an all-in-one payment processing and e-commerce solution. Accept payments, sell digital keys from your own and more, do it all with a single platform.",
    image: "/digikeys.png",
    github: "https://github.com/iamrobins/DigiKeys",
    link: "https://www.youtube.com/watch?v=flauF5YODPg",
  },
  {
    name: "Public Chat Board",
    description:
      "A public chat board with a machine learning model that filters toxicity in real-time.",
    image: "/message-board.png",
    github: "https://github.com/iamrobins/message-board-server",
    link: "https://i.postimg.cc/yxGNKFsr/Slightly-Improved-Design.png",
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
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt="Project Image"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
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
