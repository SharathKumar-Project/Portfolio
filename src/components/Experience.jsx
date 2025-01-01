import React from "react";
import { experiences } from "../constants";
import Kru from "../assets/kru.svg";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">
        Experience
      </motion.h2>

      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center mb-9">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              duration={{ transition: 4 }}
              className="w-full lg:w-1/3 pr-5">
              <h6 className="mb-2 font-semibold text-xl ">
                {experience.role} -{" "}
                <span className="text-xl text-pink-400 ">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-9 text-sm text-neutral-400 font-medium ">
                {experience.year}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              duration={{ transition: 2 }}
              className="w-full max-w-xl lg:w-3/4 font-medium pl-6">
              <p className="mb-4 text-neutral-300">{experience.description}</p>

              {experience.project_link && (
                <div className="flex flex-col items-center mb-4">
                  <p className="mb-2 text-center">Explore the project:</p>
                  <a
                    href={experience.project_link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="p-4 rounded bg-gradient-to-r from-purple-300 to-black-500">
                      <motion.img
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        initial={{ opacity: 0, scale: 0.5, x: 0 }}
                        transition={{ duration: 1.5 }}
                        src={Kru}
                        width={130}
                        height={90}
                        alt="Project Link"
                      />
                    </button>
                  </a>
                </div>
              )}

              <div className="mb-8 flex flex-wrap justify-center lg:justify-center">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-3 mt-4 mb-2 px-3 py-2 rounded bg-neutral-900 text-ms text-purple-400">
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

export default Experience;
