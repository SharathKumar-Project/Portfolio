import React from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: 100 }}
        transition={{ duration: 2 }}
        className="my-20 text-center text-4xl">
        Projects
      </motion.h2>

      <div className="flex flex-col items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center max-w-3xl">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4 flex justify-center">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 lg:pl-8 flex flex-col justify-center">
              <h3 className="mb-3 font-semibold text-center lg:text-left">
                {project.title}
              </h3>
              <p className="mb-4 text-neutral-300 text-center lg:text-left">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-3 mb-2 px-2 py-1 text-ms rounded bg-neutral-900 font-medium text-purple-400">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
