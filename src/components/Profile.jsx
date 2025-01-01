import React from "react";
import { profile_content } from "../constants";
import profilePic from "../assets/profile_pic.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Profile = () => {
  return (
    <>
      <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center justify-center lg:items-start'>
              <motion.h1
                variants={container(0)}
                initial='hidden'
                animate='visible'
                className='pb-10 text-4xl lg:text-6xl font-medium tracking-tight lg:mt-10 overflow-hidden'>
                Sharath Kumar V
              </motion.h1>

              <motion.span
                variants={container(0.5)}
                initial='hidden'
                animate='visible'
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-3xl bg-clip-text lg:text-4xl font-bold tracking-tight text-transparent'>
                Full Stack Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial='hidden'
                animate='visible'
                className='my-2 max-w-xl py-6 font-medium'>
                {profile_content}
              </motion.p>
            </div>
          </div>

          <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center lg:justify-end'>
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duratiom: 1, delay: 1.2 }}
                src={profilePic}
                alt='picture'
                className='w-48 h-auto lg:w-2/3 xl:w-1/2'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
