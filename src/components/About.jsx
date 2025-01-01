import React from "react";
import aboutMe from "../assets/projects/project-4.jpg";
import { about_text } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>
        About <span className='text-neutral-500'>Me</span>
      </motion.h2>

      <div className='flex flex-wrap'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img
              className='rounded-2xl w-48 h-auto lg:w-2/3 xl:w-1/2'
              src={aboutMe}
              alt='aboutme'
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 2 }}
          className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6 font-medium '>{about_text}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
