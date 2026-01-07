import { useEffect, useRef } from "react";
import { PROJECTS } from "../constants/index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#project-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, projectsRef);
    return () => ctx.revert();
  }, []);
  return (
    <section className="pt-16" id="projects" ref={projectsRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex w-full  p-4 md:w-1/2 lg:w-1/3"
              id="project-card"
            >
              {/* <a href={project.link} target="_blank" rel="noopener noreferrer"> */}
              <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-purple-300/20">
                {/* Image */}
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-60 w-full object-cover"
                />
                {/* content */}
                <div className="flex flex-grow flex-col p-6">
                  <div>
                    <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-300">
                      {project.description}
                    </p>
                    <div className="mb-6">
                      <strong className="block mb-2">Tech Stack:</strong>
                      <ul className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <li
                            key={index}
                            className=" rounded-full border-2 border-pink-500/30 px-3 py-1 text-xs font-semibold"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* buttons */}
                  <div className="mt-auto flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-md bg-purple-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700 transition"
                    >
                      View Project
                    </a>

                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-md border border-purple-500 px-4 py-2 text-center text-sm font-semibold text-purple-400 hover:bg-purple-500/10 transition"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
