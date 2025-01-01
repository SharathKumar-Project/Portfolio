import React from "react";
import { icons } from "../constants";
import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const getRandomDuration = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-700 pb-24 lg:mb-35">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-5">
        {icons.map((icon, index) => (
          <motion.div
            variants={iconVariant(getRandomDuration(0, 3))}
            initial="initial"
            animate="animate"
            key={index}
            className="rounded-2xl border-b-2 border-neutral-700 p-2 text-center sm:w-1/7 md:w-1/10 lg:w-auto">
            <StackIcon
              name={icon.iconImage}
              className="w-16 h-16 sm:w-20 sm:h-16 md:w-20 md:h-16 lg:w-20 lg:h-20 pt-5"
            />
            <p className="mt-2 text-sm font-medium">{icon.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
